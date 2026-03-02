import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

// --- Rate limiting ---
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

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

// --- Session tokens ---
// Simple HMAC-based session tokens valid for 2 hours
const activeSessions = new Map<string, number>(); // token -> expiresAt

function generateSessionToken(): string {
  const token = crypto.randomUUID() + "-" + crypto.randomUUID();
  const expiresAt = Date.now() + 2 * 60 * 60 * 1000; // 2 hours
  activeSessions.set(token, expiresAt);
  return token;
}

function validateSessionToken(token: string): boolean {
  const expiresAt = activeSessions.get(token);
  if (!expiresAt) return false;
  if (Date.now() > expiresAt) {
    activeSessions.delete(token);
    return false;
  }
  return true;
}

function invalidateSessionToken(token: string): void {
  activeSessions.delete(token);
}

// Cleanup expired sessions periodically
function cleanupSessions() {
  const now = Date.now();
  for (const [token, expiresAt] of activeSessions) {
    if (now > expiresAt) activeSessions.delete(token);
  }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Clean up expired sessions on each request
  cleanupSessions();

  const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  try {
    const contentType = req.headers.get("content-type") || "";
    const ADMIN_KEY = Deno.env.get("ADMIN_SECRET_KEY");
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    // Handle image upload (multipart) - uses session token
    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      const sessionToken = formData.get("session_token") as string;

      if (!sessionToken || !validateSessionToken(sessionToken)) {
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
        .upload(fileName, file, {
          contentType: file.type,
          upsert: false,
        });

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from("blog-images")
        .getPublicUrl(fileName);

      return new Response(JSON.stringify({ success: true, url: urlData.publicUrl }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Handle JSON actions
    const body = await req.json();
    const { action, secret_key, session_token, post } = body;

    // --- Login action: validate secret key with rate limiting ---
    if (action === "verify") {
      // Apply rate limiting only to login attempts
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

      // Generate a session token instead of having client store the key
      const token = generateSessionToken();
      return new Response(JSON.stringify({ success: true, session_token: token }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // --- All other actions: validate session token ---
    if (!session_token || !validateSessionToken(session_token)) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // --- Validate session: check if token is still valid ---
    if (action === "validate_session") {
      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // --- Logout: invalidate session token ---
    if (action === "logout") {
      invalidateSessionToken(session_token);
      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (action === "create") {
      const { data, error } = await supabase.from("blog_posts").insert({
        slug: post.slug,
        title: post.title,
        date: post.date,
        tag: post.tag,
        excerpt: post.excerpt,
        content: post.content,
        image_url: post.image_url || "",
        image_alt: post.image_alt || "",
      }).select().single();

      if (error) throw error;
      return new Response(JSON.stringify({ success: true, post: data }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    if (action === "update") {
      const { data, error } = await supabase.from("blog_posts")
        .update({
          title: post.title,
          date: post.date,
          tag: post.tag,
          excerpt: post.excerpt,
          content: post.content,
          image_url: post.image_url || "",
          image_alt: post.image_alt || "",
          slug: post.slug,
        })
        .eq("id", post.id)
        .select()
        .single();

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
