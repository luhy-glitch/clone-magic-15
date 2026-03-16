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

export function getPageDescription(url: string): string {
  const descriptions: Record<string, string> = {
    "/": "Blixtsnabba hemsidor i Västerås, Köping & Sala. 100/100 PageSpeed för maximal konvertering.",
    "/om-mig": "Lär känna Lucas på LRH Konsult – webbutvecklare och SEO-konsult med 5+ års erfarenhet i Västmanland.",
    "/kontakt": "Kontakta LRH Konsult för webbutveckling och SEO i Västmanland. Gratis konsultation.",
    "/blogg": "Artiklar om webbutveckling, SEO och digital marknadsföring från LRH Konsult.",
    "/case": "Se exempel på webbprojekt och SEO-resultat från LRH Konsult i Västmanland.",
    "/gratis-seo-analys": "Boka en gratis SEO-analys av din webbplats. LRH Konsult hjälper dig ranka högre på Google.",
    "/tjanster/webbutveckling": "Professionell webbutveckling i Västmanland. Snabba, moderna hemsidor som konverterar besökare till kunder.",
    "/tjanster/seo-optimering": "SEO-optimering i Västmanland. Ranka högre på Google och få fler kunder online.",
    "/tjanster/webbdesign": "Modern webbdesign i Västmanland. Snygga hemsidor som speglar ditt varumärke.",
    "/tjanster/google-ads": "Google Ads-kampanjer i Västmanland. Maximera din ROI med professionell annonsering.",
    "/tjanster/wordpress-losningar": "WordPress-lösningar i Västmanland. Enkla att hantera och snabba att ladda.",
    "/tjanster/underhall-support": "Webbunderhåll och support i Västmanland. Vi håller din hemsida uppdaterad och säker.",
    "/tjanster/prestanda-optimering": "Prestandaoptimering av hemsidor i Västmanland. 100/100 PageSpeed garanterat.",
    "/tjanster/vad-kostar-en-hemsida-2026": "Vad kostar en hemsida 2026? Transparent prisguide från LRH Konsult i Västmanland.",
    "/webbutveckling-vasteras": "Webbutveckling i Västerås. LRH Konsult skapar snabba hemsidor som rankar på Google.",
    "/webbutveckling-enkoping": "Webbutveckling i Enköping. Professionella hemsidor som ger fler kunder.",
    "/webbutveckling-eskilstuna": "Webbutveckling i Eskilstuna. Moderna hemsidor med fokus på SEO och konvertering.",
    "/webbutveckling-arboga": "Webbutveckling i Arboga. LRH Konsult hjälper lokala företag synas på Google.",
    "/webbutveckling-fagersta": "Webbutveckling i Fagersta. Snabba hemsidor för företag i Fagersta.",
    "/webbutveckling-hallstahammar": "Webbutveckling i Hallstahammar. Professionella hemsidor för lokala företag.",
    "/webbutveckling-kungsor": "Webbutveckling i Kungsör. LRH Konsult skapar hemsidor som syns på Google.",
    "/webbutveckling-surahammar": "Webbutveckling i Surahammar. Moderna hemsidor för företag i Surahammar.",
    "/webbutveckling-heby": "Webbutveckling i Heby. Professionella hemsidor för företag i Heby.",
    "/webbutveckling-norberg": "Webbutveckling i Norberg. LRH Konsult hjälper Norbergs företag synas online.",
    "/webbutveckling-skinnskatteberg": "Webbutveckling i Skinnskatteberg. Hemsidor för lokala företag.",
    "/webbutveckling-uppsala": "Webbutveckling i Uppsala. Professionella hemsidor med SEO-fokus.",
    "/webbutveckling-orebro": "Webbutveckling i Örebro. LRH Konsult skapar hemsidor som konverterar.",
    "/seo-koping": "SEO-optimering i Köping. Ranka högre på Google med LRH Konsult.",
    "/hemsidor-sala": "Hemsidor i Sala. LRH Konsult skapar professionella hemsidor för Sala-företag.",
    "/hemsidor-bygg-hantverkare": "Hemsidor för bygg och hantverkare. Visa upp dina projekt och få fler kunder.",
    "/hemsidor-restaurang": "Hemsidor för restauranger i Västmanland. Meny, bokning och lokal SEO.",
    "/hemsidor-redovisning": "Hemsidor för redovisningsbyråer. Bygg förtroende och få fler kunder online.",
    "/hemsidor-ehandel": "E-handelshemsidor i Västmanland. WooCommerce och Shopify-lösningar.",
    "/digital-marknadsforing-butiker": "Digital marknadsföring för butiker i Västmanland. Fler kunder online och i butik.",
    "/restauranger-sala": "Hemsidor för restauranger i Sala. LRH Konsult skapar hemsidor med meny och bokning.",
    "/frisor-koping": "Hemsidor för frisörer i Köping. Bokningssystem och lokal SEO.",
    "/blogg/oka-hemsidans-hastighet": "Lär dig öka din hemsidas hastighet med konkreta tips från LRH Konsult.",
    "/blogg/lokal-seo-smaforetag": "Lokal SEO för småföretag – så syns du i Google Maps och lokala sökningar.",
    "/blogg/react-vs-wordpress": "React vs WordPress – vilket passar ditt företag bäst? LRH Konsult reder ut skillnaderna.",
    "/blogg/komplett-seo-guide-smaforetag": "Komplett SEO-guide för småföretag 2025. Allt från nyckelord till länkbygge.",
    "/blogg/skapa-hemsida-foretag-guide": "Steg-för-steg guide för att skapa en professionell företagshemsida 2025.",
  };
  return descriptions[url] || "LRH Konsult erbjuder webbutveckling och SEO-optimering i Västmanland.";
}