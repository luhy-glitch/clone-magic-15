import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// --- Rate limiting (in-memory is fine for this - worst case resets on cold start) ---
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 15 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

// --- DB-backed session helpers ---
function getSupabase() {
  return createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  );
}

async function createSession(supabase: ReturnType<typeof createClient>): Promise<string> {
  const token = crypto.randomUUID() + "-" + crypto.randomUUID();
  const expiresAt = new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString();
  await supabase.from("admin_sessions").insert({ token, expires_at: expiresAt });
  return token;
}

async function validateSession(supabase: ReturnType<typeof createClient>, token: string): Promise<boolean> {
  const { data } = await supabase
    .from("admin_sessions")
    .select("expires_at")
    .eq("token", token)
    .single();
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

async function cleanupExpiredSessions(supabase: ReturnType<typeof createClient>) {
  await supabase.from("admin_sessions").delete().lt("expires_at", new Date().toISOString());
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabase = getSupabase();
  const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  // Cleanup expired sessions occasionally
  cleanupExpiredSessions(supabase).catch(() => {});

  try {
    const contentType = req.headers.get("content-type") || "";
    const ADMIN_KEY = Deno.env.get("ADMIN_SECRET_KEY");

    // Handle image upload (multipart)
    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      const sessionToken = formData.get("session_token") as string;

      if (!sessionToken || !(await validateSession(supabase, sessionToken))) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), {
          status: 401,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      const file = formData.get("file") as File;
      if (!file) {
        return new Response(JSON.stringify({ error: "No file provided" }), {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      const ext = file.name.split(".").pop() || "jpg";
      const fileName = `${crypto.randomUUID()}.${ext}`;

      const { error: uploadError } = await supabase.storage
        .from("blog-images")
        .upload(fileName, file, { contentType: file.type, upsert: false });

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage.from("blog-images").getPublicUrl(fileName);

      return new Response(JSON.stringify({ success: true, url: urlData.publicUrl }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Handle JSON actions
    const body = await req.json();
    const { action, secret_key, session_token, post } = body;

    // --- Login ---
    if (action === "verify") {
      if (isRateLimited(clientIp)) {
        return new Response(JSON.stringify({ error: "Too many attempts. Try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      if (!ADMIN_KEY || secret_key !== ADMIN_KEY) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), {
          status: 401,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }

      const token = await createSession(supabase);
      return new Response(JSON.stringify({ success: true, session_token: token }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // --- All other actions require valid session ---
    if (!session_token || !(await validateSession(supabase, session_token))) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (action === "validate_session") {
      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (action === "logout") {
      await invalidateSession(supabase, session_token);
      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (action === "create") {
      const { data, error } = await supabase.from("blog_posts").insert({
        slug: post.slug, title: post.title, date: post.date, tag: post.tag,
        excerpt: post.excerpt, content: post.content,
        image_url: post.image_url || "", image_alt: post.image_alt || "",
      }).select().single();
      if (error) throw error;
      return new Response(JSON.stringify({ success: true, post: data }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (action === "update") {
      const { data, error } = await supabase.from("blog_posts")
        .update({
          title: post.title, date: post.date, tag: post.tag,
          excerpt: post.excerpt, content: post.content,
          image_url: post.image_url || "", image_alt: post.image_alt || "",
          slug: post.slug,
        })
        .eq("id", post.id).select().single();
      if (error) throw error;
      return new Response(JSON.stringify({ success: true, post: data }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (action === "delete") {
      const { error } = await supabase.from("blog_posts").delete().eq("id", post.id);
      if (error) throw error;
      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ error: "Invalid action" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Admin auth error:", err);
    return new Response(JSON.stringify({ error: "An error occurred. Please try again." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
