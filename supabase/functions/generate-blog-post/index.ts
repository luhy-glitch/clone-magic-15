import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

function getSupabase() {
  return createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  );
}

async function validateSession(supabase: ReturnType<typeof createClient>, token: string): Promise<boolean> {
  const { data } = await supabase
    .from("admin_sessions")
    .select("expires_at")
    .eq("token", token)
    .single();
  if (!data) return false;
  return new Date(data.expires_at) > new Date();
}

async function generateImage(supabase: ReturnType<typeof createClient>, apiKey: string, prompt: string): Promise<string> {
  try {
    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash-image",
        messages: [
          {
            role: "user",
            content: `Generate a professional photorealistic blog header image: ${prompt}. Modern, clean, high quality, landscape orientation, 16:9 aspect ratio.`,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errBody = await response.text();
      console.error("Image generation failed:", response.status, errBody);
      return "";
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    // Check if response contains base64 image data
    if (Array.isArray(content)) {
      for (const part of content) {
        if (part.type === "image_url" && part.image_url?.url) {
          const base64Match = part.image_url.url.match(/^data:image\/\w+;base64,(.+)$/);
          if (base64Match) {
            const imageBytes = Uint8Array.from(atob(base64Match[1]), c => c.charCodeAt(0));
            const fileName = `ai-${crypto.randomUUID()}.png`;
            const { error: uploadError } = await supabase.storage
              .from("blog-images")
              .upload(fileName, imageBytes, { contentType: "image/png", upsert: false });
            if (uploadError) {
              console.error("Image upload error:", uploadError);
              return "";
            }
            const { data: urlData } = supabase.storage.from("blog-images").getPublicUrl(fileName);
            return urlData.publicUrl;
          }
          return part.image_url.url;
        }
      }
    }

    return "";
  } catch (err) {
    console.error("Image generation error:", err);
    return "";
  }
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabase = getSupabase();

  try {
    const { session_token, topic, action, image_prompt } = await req.json();

    if (!session_token || !(await validateSession(supabase, session_token))) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    // Image-only generation
    if (action === "generate_image") {
      const prompt = image_prompt || topic || "Professional blog header";
      const imageUrl = await generateImage(supabase, LOVABLE_API_KEY, prompt);
      if (!imageUrl) {
        return new Response(JSON.stringify({ error: "Kunde inte generera bild. Försök igen." }), {
          status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      return new Response(JSON.stringify({ success: true, image_url: imageUrl }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const systemPrompt = `Du är en SEO-expert och copywriter för en svensk webbyrå (LRH Konsult) i Västmanland. 
Skriv blogginlägg på svenska som är informativa, engagerande och SEO-optimerade.
Följ dessa regler:
- Använd H2-rubriker (##) för avsnitt, aldrig H1
- Skriv vanliga stycken utan dekorativa boxar
- Inkludera relevanta nyckelord naturligt
- Håll en professionell men tillgänglig ton
- Inlägget ska vara ca 800-1200 ord
- Avsluta med en kort sammanfattning

Svara ALLTID i exakt detta JSON-format (inget annat):
{
  "title": "SEO-optimerad titel",
  "excerpt": "Kort sammanfattning på 1-2 meningar för förhandsgranskning",
  "tag": "Kategori (t.ex. SEO, Webbutveckling, Prestanda, WordPress, Design)",
  "content": "Fullständigt markdown-innehåll med ## rubriker",
  "image_prompt": "Kort beskrivning på engelska av en passande fotorealistisk bild för artikeln"
}`;

    // Generate blog post content via Lovable AI Gateway
    const textResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Skriv ett blogginlägg om: ${topic}` },
        ],
      }),
    });

    if (!textResponse.ok) {
      const errText = await textResponse.text();
      console.error("AI error:", textResponse.status, errText);
      if (textResponse.status === 429) {
        return new Response(JSON.stringify({ error: "AI-tjänsten är överbelastad. Försök igen om en stund." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      throw new Error("AI text generation failed");
    }

    const textData = await textResponse.json();
    const rawContent = textData.choices?.[0]?.message?.content || "";

    let parsed;
    try {
      const jsonStr = rawContent.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
      parsed = JSON.parse(jsonStr);
    } catch {
      console.error("Failed to parse AI response:", rawContent);
      return new Response(JSON.stringify({ error: "AI genererade ett ogiltigt svar. Försök igen." }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Generate blog image
    const imageUrl = await generateImage(supabase, LOVABLE_API_KEY, parsed.image_prompt || topic);

    return new Response(JSON.stringify({
      success: true,
      post: {
        title: parsed.title,
        excerpt: parsed.excerpt,
        tag: parsed.tag,
        content: parsed.content,
        image_url: imageUrl,
        image_alt: parsed.title,
      }
    }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (err) {
    console.error("Generate blog post error:", err);
    return new Response(JSON.stringify({ error: "Något gick fel vid generering. Försök igen." }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
