import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 15 * 60 * 1000;

function getSupabase() {
  return createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  );
}

async function isRateLimited(supabase: ReturnType<typeof createClient>, ip: string): Promise<boolean> {
  const now = new Date();
  const resetAt = new Date(now.getTime() + RATE_WINDOW_MS);

  // Check existing entry
  const { data } = await supabase
    .from("admin_rate_limits")
    .select("attempt_count, reset_at")
    .eq("ip", ip)
    .single();

  if (!data || new Date(data.reset_at) < now) {
    // No entry or expired — upsert with count 1
    await supabase
      .from("admin_rate_limits")
      .upsert({ ip, attempt_count: 1, reset_at: resetAt.toISOString() }, { onConflict: "ip" });
    return false;
  }

  // Increment count
  const newCount = data.attempt_count + 1;
  await supabase
    .from("admin_rate_limits")
    .update({ attempt_count: newCount })
    .eq("ip", ip);

  return newCount > RATE_LIMIT;
}

async function createSession(supabase: ReturnType<typeof createClient>): Promise<string> {
  const token = crypto.randomUUID() + "-" + crypto.randomUUID();
  const expiresAt = new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString();
  await supabase.from("admin_sessions").insert({ token, expires_at: expiresAt });
  return token;
}

async function validateSession(supabase: ReturnType<typeof createClient>, token: string): Promise<boolean> {
  const { data } = await supabase.from("admin_sessions").select("expires_at").eq("token", token).single();
  if (!data) return false;
  if (new Date(data.expires_at) < new Date()) {
    await supabase.from("admin_sessions").delete().eq("token", token);
    return false;
  }
  return true;
}

async function invalidateSession(supabase: ReturnType<typeof createClient>, token: string) {
  await supabase.from("admin_sessions").delete().eq("token", token);
}

async function auditLog(supabase: ReturnType<typeof createClient>, action: string, details: Record<string, unknown> = {}) {
  await supabase.from("admin_audit_log").insert({ action, details }).catch(() => {});
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabase = getSupabase();
  const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  // Cleanup expired sessions occasionally
  supabase.from("admin_sessions").delete().lt("expires_at", new Date().toISOString()).then(() => {});
  // Cleanup expired rate limits
  supabase.from("admin_rate_limits").delete().lt("reset_at", new Date().toISOString()).then(() => {});

  try {
    const contentType = req.headers.get("content-type") || "";
    const ADMIN_KEY = Deno.env.get("ADMIN_SECRET_KEY");

    // Handle image upload (multipart)
    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      const sessionToken = formData.get("session_token") as string;
      if (!sessionToken || !(await validateSession(supabase, sessionToken))) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      }
      const file = formData.get("file") as File;
      if (!file) {
        return new Response(JSON.stringify({ error: "No file provided" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      }
      const ext = file.name.split(".").pop() || "jpg";
      const fileName = `${crypto.randomUUID()}.${ext}`;
      const { error: uploadError } = await supabase.storage.from("blog-images").upload(fileName, file, { contentType: file.type, upsert: false });
      if (uploadError) throw uploadError;
      const { data: urlData } = supabase.storage.from("blog-images").getPublicUrl(fileName);
      await auditLog(supabase, "image_upload", { fileName });
      return new Response(JSON.stringify({ success: true, url: urlData.publicUrl }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const body = await req.json();
    const { action, secret_key, session_token, post, lead_id, status } = body;

    // --- Login ---
    if (action === "verify") {
      if (await isRateLimited(supabase, clientIp)) {
        return new Response(JSON.stringify({ error: "Too many attempts. Try again later." }), { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      }
      if (!ADMIN_KEY || secret_key !== ADMIN_KEY) {
        await auditLog(supabase, "login_failed", { ip: clientIp });
        return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      }
      const token = await createSession(supabase);
      await auditLog(supabase, "login_success", { ip: clientIp });
      return new Response(JSON.stringify({ success: true, session_token: token }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    // --- All other actions require valid session ---
    if (!session_token || !(await validateSession(supabase, session_token))) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    if (action === "validate_session") {
      return new Response(JSON.stringify({ success: true }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    if (action === "logout") {
      await invalidateSession(supabase, session_token);
      await auditLog(supabase, "logout");
      return new Response(JSON.stringify({ success: true }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    // --- Blog CRUD ---
    if (action === "create") {
      const { data, error } = await supabase.from("blog_posts").insert({
        slug: post.slug, title: post.title, date: post.date, tag: post.tag,
        excerpt: post.excerpt, content: post.content,
        image_url: post.image_url || "", image_alt: post.image_alt || "",
      }).select().single();
      if (error) throw error;
      await auditLog(supabase, "blog_create", { slug: post.slug });
      return new Response(JSON.stringify({ success: true, post: data }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    if (action === "update") {
      const { data, error } = await supabase.from("blog_posts").update({
        title: post.title, date: post.date, tag: post.tag,
        excerpt: post.excerpt, content: post.content,
        image_url: post.image_url || "", image_alt: post.image_alt || "",
        slug: post.slug,
      }).eq("id", post.id).select().single();
      if (error) throw error;
      await auditLog(supabase, "blog_update", { id: post.id, slug: post.slug });
      return new Response(JSON.stringify({ success: true, post: data }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    if (action === "delete") {
      const { error } = await supabase.from("blog_posts").delete().eq("id", post.id);
      if (error) throw error;
      await auditLog(supabase, "blog_delete", { id: post.id });
      return new Response(JSON.stringify({ success: true }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    // --- Lead management ---
    if (action === "get_leads") {
      const { data, error } = await supabase.from("contact_submissions").select("*").order("created_at", { ascending: false });
      if (error) throw error;
      return new Response(JSON.stringify({ success: true, leads: data }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    if (action === "update_lead_status") {
      if (!lead_id || !status) {
        return new Response(JSON.stringify({ error: "Missing lead_id or status" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      }
      const validStatuses = ["new", "contacted", "client"];
      if (!validStatuses.includes(status)) {
        return new Response(JSON.stringify({ error: "Invalid status" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      }
      const { error } = await supabase.from("contact_submissions").update({ status }).eq("id", lead_id);
      if (error) throw error;
      await auditLog(supabase, "lead_status_update", { lead_id, status });
      return new Response(JSON.stringify({ success: true }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    return new Response(JSON.stringify({ error: "Invalid action" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (err) {
    console.error("Admin auth error:", err);
    return new Response(JSON.stringify({ error: "An error occurred. Please try again." }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});
