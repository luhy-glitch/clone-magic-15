import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { action, secret_key, post } = await req.json();

    // Validate admin key
    const ADMIN_KEY = Deno.env.get("ADMIN_SECRET_KEY");
    if (!ADMIN_KEY || secret_key !== ADMIN_KEY) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    if (action === "verify") {
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
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
