import { renderToString } from "react-dom/server.browser";
import { StaticRouter } from "react-router-dom/server";
import AppContent from "./AppContent";

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <AppContent />
    </StaticRouter>
  );
}

export function getPageTitle(url: string): string {
  const titles: Record<string, string> = {
    "/": "Webbutveckling & SEO i Västmanland | LRH Konsult",
    "/om-mig": "Om mig – Webbutvecklare Västmanland | LRH Konsult",
    "/kontakt": "Kontakt – LRH Konsult",
    "/integritetspolicy": "Integritetspolicy | LRH Konsult",
    "/case": "Kundcase – Resultat vi är stolta över | LRH Konsult",
    "/gratis-seo-analys": "Gratis SEO-analys | LRH Konsult",
    "/blogg": "Blogg – Webb & SEO-insikter | LRH Konsult",
    "/tjanster/webbutveckling": "Webbutveckling – Snabba Hemsidor | LRH Konsult",
    "/tjanster/webbdesign": "Webbdesign – Modern Design | LRH Konsult",
    "/tjanster/seo-optimering": "SEO-optimering – Ranka Högre | LRH Konsult",
    "/tjanster/wordpress-losningar": "WordPress-lösningar | LRH Konsult",
    "/tjanster/underhall-support": "Underhåll & Support | LRH Konsult",
    "/tjanster/prestanda-optimering": "Prestandaoptimering | LRH Konsult",
    "/tjanster/google-ads": "Google Ads | LRH Konsult",
    "/tjanster/vad-kostar-en-hemsida-2026": "Vad kostar en hemsida 2026? | LRH Konsult",
    "/webbutveckling-vasteras": "Webbutveckling Västerås - Snabba Hemsidor som Rankar | LRH Konsult",
    "/webbutveckling-enkoping": "Webbutveckling Enköping | LRH Konsult",
    "/webbutveckling-eskilstuna": "Webbutveckling Eskilstuna | LRH Konsult",
    "/webbutveckling-arboga": "Webbutveckling Arboga | LRH Konsult",
    "/webbutveckling-fagersta": "Webbutveckling Fagersta | LRH Konsult",
    "/webbutveckling-hallstahammar": "Webbutveckling Hallstahammar | LRH Konsult",
    "/webbutveckling-kungsor": "Webbutveckling Kungsör | LRH Konsult",
    "/webbutveckling-surahammar": "Webbutveckling Surahammar | LRH Konsult",
    "/webbutveckling-heby": "Webbutveckling Heby | LRH Konsult",
    "/webbutveckling-norberg": "Webbutveckling Norberg | LRH Konsult",
    "/webbutveckling-skinnskatteberg": "Webbutveckling Skinnskatteberg | LRH Konsult",
    "/webbutveckling-uppsala": "Webbutveckling Uppsala | LRH Konsult",
    "/webbutveckling-orebro": "Webbutveckling Örebro | LRH Konsult",
    "/seo-koping": "SEO Köping | LRH Konsult",
    "/hemsidor-sala": "Hemsidor Sala | LRH Konsult",
    "/hemsidor-bygg-hantverkare": "Hemsidor för Bygg & Hantverkare | LRH Konsult",
    "/digital-marknadsforing-butiker": "Digital Marknadsföring för Butiker | LRH Konsult",
    "/restauranger-sala": "Hemsidor för Restauranger i Sala | LRH Konsult",
    "/frisor-koping": "Hemsidor för Frisörer i Köping | LRH Konsult",
  };
  return titles[url] || "LRH Konsult – Webbutveckling & SEO i Västmanland";
}