import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const SITE_URL = "https://lrhkonsult.se";

const staticRoutes = [
  { loc: "", changefreq: "weekly", priority: "1.0" },
  { loc: "/webbutveckling", changefreq: "monthly", priority: "0.9" },
  { loc: "/seo-optimering", changefreq: "monthly", priority: "0.9" },
  { loc: "/om-mig", changefreq: "monthly", priority: "0.7" },
  { loc: "/blogg", changefreq: "weekly", priority: "0.8" },
  { loc: "/kontakt", changefreq: "monthly", priority: "0.8" },
  { loc: "/integritetspolicy", changefreq: "yearly", priority: "0.3" },
  { loc: "/tjanster/webbutveckling", changefreq: "monthly", priority: "0.8" },
  { loc: "/tjanster/webbdesign", changefreq: "monthly", priority: "0.8" },
  { loc: "/tjanster/seo-optimering", changefreq: "monthly", priority: "0.8" },
  { loc: "/tjanster/wordpress-losningar", changefreq: "monthly", priority: "0.8" },
  { loc: "/tjanster/underhall-support", changefreq: "monthly", priority: "0.8" },
  { loc: "/tjanster/prestanda-optimering", changefreq: "monthly", priority: "0.8" },
  { loc: "/webbutveckling-vasteras", changefreq: "monthly", priority: "0.8" },
  { loc: "/seo-koping", changefreq: "monthly", priority: "0.8" },
  { loc: "/hemsidor-sala", changefreq: "monthly", priority: "0.8" },
  { loc: "/webbutveckling-enkoping", changefreq: "monthly", priority: "0.8" },
  { loc: "/webbutveckling-eskilstuna", changefreq: "monthly", priority: "0.8" },
  { loc: "/webbutveckling-arboga", changefreq: "monthly", priority: "0.8" },
  { loc: "/webbutveckling-fagersta", changefreq: "monthly", priority: "0.8" },
  { loc: "/hemsidor-bygg-hantverkare", changefreq: "monthly", priority: "0.7" },
  { loc: "/digital-marknadsforing-butiker", changefreq: "monthly", priority: "0.7" },
  { loc: "/case-studies/pagespeed-revolution", changefreq: "yearly", priority: "0.7" },
];

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  // Require authorization via Bearer token or apikey header
  const authHeader = req.headers.get("Authorization");
  const apikeyHeader = req.headers.get("apikey");
  const anonKey = Deno.env.get("SUPABASE_ANON_KEY");
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  const token = authHeader?.replace("Bearer ", "") || apikeyHeader;

  if (!token || (token !== anonKey && token !== serviceKey)) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data: posts } = await supabase
      .from("blog_posts")
      .select("slug, updated_at")
      .order("date", { ascending: false });

    const today = new Date().toISOString().split("T")[0];

    const urls = staticRoutes.map(
      (r) =>
        `  <url>\n    <loc>${SITE_URL}${r.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`
    );

    if (posts) {
      for (const post of posts) {
        const lastmod = post.updated_at?.split("T")[0] ?? today;
        urls.push(
          `  <url>\n    <loc>${SITE_URL}/blogg/${post.slug}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`
        );
      }
    }

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;

    const { error } = await supabase.storage
      .from("sitemap")
      .upload("sitemap.xml", new Blob([xml], { type: "application/xml" }), {
        upsert: true,
        contentType: "application/xml",
      });

    if (error) throw error;

    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (err) {
    console.error("Sitemap generation failed:", err);
    return new Response(JSON.stringify({ error: "Sitemap generation failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  }
});
