import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Code2 } from "lucide-react";

const WebbutvecklingPage = () => (
  <ServicePageTemplate
    title="Webbutveckling"
    metaTitle="Webbutveckling i Västerås & Västmanland | React & Next.js | LRH Konsult"
    metaDescription="Skräddarsydd webbutveckling med React och Next.js för företag i Västerås, Köping och Sala. Snabba, säkra och SEO-optimerade webbplatser."
    heroSubheading="Webbutveckling"
    heroHeading="Webbutveckling i Västerås & Västmanland"
    heroDescription="Jag bygger skräddarsydda webbapplikationer med React och Next.js som ger ditt företag en modern, snabb och säker digital närvaro. Varje projekt är unikt och anpassat efter dina behov."
    whyTitle="Varför investera i professionell webbutveckling?"
    whyText="En väl byggd webbplats är grunden för din digitala framgång. Med modern teknik som React och Next.js skapar jag lösningar som laddar blixtsnabbt, rankar högt på Google och ger besökarna en sömlös upplevelse oavsett enhet. Du får en skalbar lösning som växer med ditt företag – utan kompromisser på prestanda eller säkerhet."
    icon={Code2}
    breadcrumbLabel="Webbutveckling"
    features={[
      { title: "React & Next.js", description: "Moderna ramverk som levererar snabba, interaktiva webbplatser med server-side rendering för bästa SEO." },
      { title: "Responsiv design", description: "Pixel-perfekt upplevelse på alla skärmstorlekar – från mobil till desktop." },
      { title: "API-integrationer", description: "Sömlös koppling till betalningssystem, CRM, bokningssystem och andra tredjepartstjänster." },
      { title: "E-handelslösningar", description: "Skräddarsydda webshop-lösningar med säker betalning och smidig orderhantering." },
      { title: "Prestanda & Säkerhet", description: "Optimerad kod, HTTPS, CSP-headers och regelbundna säkerhetsgranskningar ingår som standard." },
    ]}
    testimonial={{
      quote: "Lucas levererade en webbplats som överträffade alla våra förväntningar. Snabb, modern och enkel att uppdatera.",
      author: "Erik Johansson",
      role: "VD, TechStart Västerås",
    }}
  />
);

export default WebbutvecklingPage;
