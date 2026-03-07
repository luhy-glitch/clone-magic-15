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

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  const supabase = getSupabase();

  try {
    const { session_token, topic } = await req.json();

    if (!session_token || !(await validateSession(supabase, session_token))) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY");
    if (!GEMINI_API_KEY) throw new Error("GEMINI_API_KEY is not configured");

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

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

    // Step 1: Generate blog post content via Google Gemini API
    const textResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            { role: "user", parts: [{ text: `${systemPrompt}\n\nSkriv ett blogginlägg om: ${topic}` }] },
          ],
        }),
      }
    );

    if (!textResponse.ok) {
      const errText = await textResponse.text();
      console.error("Gemini error:", textResponse.status, errText);
      if (textResponse.status === 429) {
        return new Response(JSON.stringify({ error: "AI-tjänsten är överbelastad. Försök igen om en stund." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      throw new Error("Gemini text generation failed");
    }

    const textData = await textResponse.json();
    const rawContent = textData.candidates?.[0]?.content?.parts?.[0]?.text || "";
    
    // Parse the JSON response (handle markdown code blocks)
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

    // Step 2: Generate blog image
    let imageUrl = "";
    if (LOVABLE_API_KEY) {
      try {
        const imageResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash-image",
          messages: [
            {
              role: "user",
              content: `Create a professional, photorealistic blog header image: ${parsed.image_prompt}. Modern, clean, high quality, landscape orientation, suitable for a Swedish web agency blog.`
            }
          ],
          modalities: ["image", "text"],
        }),
      });

      if (imageResponse.ok) {
        const imageData = await imageResponse.json();
        const base64Image = imageData.choices?.[0]?.message?.images?.[0]?.image_url?.url;

        if (base64Image) {
          // Upload to storage
          const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, "");
          const imageBytes = Uint8Array.from(atob(base64Data), c => c.charCodeAt(0));
          const fileName = `ai-${crypto.randomUUID()}.png`;

          const { error: uploadError } = await supabase.storage
            .from("blog-images")
            .upload(fileName, imageBytes, { contentType: "image/png", upsert: false });

          if (!uploadError) {
            const { data: urlData } = supabase.storage.from("blog-images").getPublicUrl(fileName);
            imageUrl = urlData.publicUrl;
          } else {
            console.error("Image upload error:", uploadError);
          }
        }
      } else {
        console.error("Image generation failed:", imageResponse.status);
      }
    } catch (imgErr) {
      console.error("Image generation error:", imgErr);
      // Continue without image
    }
    }

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
