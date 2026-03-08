import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { data: posts, error } = await supabase
      .from("blog_posts")
      .select("title, slug, date, tag, excerpt, content")
      .order("date", { ascending: false });

    if (error) throw error;

    const separator = "\n" + "=".repeat(80) + "\n";
    const lines: string[] = [
      "ALLA BLOGGINLÄGG – LRH KONSULT",
      `Exporterad: ${new Date().toISOString().split("T")[0]}`,
      `Totalt antal inlägg: ${posts.length}`,
      separator,
    ];

    for (const post of posts) {
      lines.push(`TITEL: ${post.title}`);
      lines.push(`SLUG: ${post.slug}`);
      lines.push(`DATUM: ${post.date}`);
      lines.push(`KATEGORI: ${post.tag}`);
      lines.push(`SAMMANFATTNING: ${post.excerpt}`);
      lines.push("");
      lines.push("--- INNEHÅLL ---");
      lines.push("");
      lines.push(post.content);
      lines.push(separator);
    }

    const txt = lines.join("\n");

    return new Response(txt, {
      headers: {
        ...corsHeaders,
        "Content-Type": "text/plain; charset=utf-8",
        "Content-Disposition": 'attachment; filename="lrh-konsult-blogginlagg.txt"',
      },
    });
  } catch (err) {
    console.error("Export error:", err);
    return new Response(JSON.stringify({ error: "Export misslyckades" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
