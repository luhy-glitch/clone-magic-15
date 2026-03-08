import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 60 * 60 * 1000;

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

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

function getSupabase() {
  return createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
  );
}

serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(clientIp)) {
      return new Response(
        JSON.stringify({ error: "För många förfrågningar. Försök igen senare." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const { name, email, subject, message, website } = await req.json();

    // Honeypot check
    if (website) {
      return new Response(JSON.stringify({ id: "ok" }), {
        status: 200, headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Namn, e-post och meddelande krävs." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (name.length > 100 || email.length > 255 || message.length > 5000 || (subject && subject.length > 200)) {
      return new Response(
        JSON.stringify({ error: "Fälten överskrider maxlängd." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Ogiltig e-postadress." }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Save to database for CRM
    const supabase = getSupabase();
    await supabase.from("contact_submissions").insert({
      name, email, subject: subject || "", message,
    }).then(({ error: dbError }) => {
      if (dbError) console.error("Failed to save contact submission:", dbError);
    });

    const data = await resend.emails.send({
      from: "LRH Konsult <onboarding@resend.dev>",
      to: ["lucas@lrhkonsult.se"],
      replyTo: email,
      subject: subject ? `Kontaktformulär: ${escapeHtml(subject)}` : `Kontaktformulär: Nytt meddelande från ${escapeHtml(name)}`,
      html: `
        <h2>Nytt meddelande från kontaktformuläret</h2>
        <p><strong>Namn:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-post:</strong> ${escapeHtml(email)}</p>
        <p><strong>Ämne:</strong> ${escapeHtml(subject || "Ej angivet")}</p>
        <hr />
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    return new Response(JSON.stringify(data), {
      status: 200, headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ error: "Det gick inte att skicka meddelandet. Försök igen senare eller kontakta oss direkt via e-post." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
});
