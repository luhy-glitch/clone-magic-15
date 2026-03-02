import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Code2 } from "lucide-react";

const WebbutvecklingPage = () => (
  <ServicePageTemplate
    title="Webbutveckling"
    metaTitle="Bäst webbutveckling i Västerås & Västmanland | Next.js & React | LRH Konsult"
    metaDescription="Bäst webbutveckling i Västerås & Västmanland. Vi bygger blixtsnabba Next.js-sajter som rankar #1 på Google. Din lokala expert för moderna webblösningar."
    heroSubheading="Webbutveckling"
    heroHeading="Webbutveckling i Västerås & Västmanland"
    heroDescription="LRH Konsult är din ledande partner för professionell webbutveckling i Västerås och övriga Västmanland. Vi bygger inte bara hemsidor; vi skapar högpresterande digitala verktyg i Next.js och React som är optimerade för att konvertera besökare till betalande kunder i Mälardalen."
    whyTitle="Webbutveckling i Västerås med fokus på Next.js"
    whyText="Genom att använda världsledande teknik ser vi till att ditt företag får en teknisk fördel. Våra lösningar laddar på under en sekund, vilket är ett krav för att nå förstaplatsen på Google under 2026."
    icon={Code2}
    breadcrumbLabel="Webbutveckling"
    features={[
      { title: "React & Next.js", description: "Moderna ramverk som levererar snabba, interaktiva webbplatser med server-side rendering för bästa SEO." },
      { title: "Responsiv design", description: "Pixel-perfekt upplevelse på alla skärmstorlekar – från mobil till desktop." },
      { title: "API-integrationer", description: "Sömlös koppling till betalningssystem, CRM, bokningssystem och andra tredjepartstjänster." },
      { title: "E-handelslösningar", description: "Skräddarsydda webshop-lösningar med säker betalning och smidig orderhantering." },
      { title: "Prestanda & Säkerhet", description: "Optimerad kod, HTTPS, CSP-headers och regelbundna säkerhetsgranskningar ingår som standard." },
    ]}
    faqTitle="Vanliga frågor om webbutveckling i Västmanland"
    faq={[
      { question: "Vilken teknik är bäst för SEO 2026?", answer: "Next.js är det överlägsna valet då det kombinerar blixtsnabb laddning med perfekt indexering för Google." },
      { question: "Kan ni hjälpa företag i hela Västmanlands län?", answer: "Ja, vi arbetar tätt med lokala företag i Västerås, Köping, Sala och Hallstahammar." },
      { question: "Ingår mobiloptimering i er webbutveckling?", answer: "Självklart, alla våra projekt bygger på en mobil-först-strategi för maximal räckvidd." },
    ]}
    testimonial={{
      quote: "Lucas levererade en webbplats som överträffade alla våra förväntningar. Snabb, modern och enkel att uppdatera.",
      author: "Erik Johansson",
      role: "VD, TechStart Västerås",
    }}
    relatedServices={[
      { label: "Webbdesign", href: "/tjanster/webbdesign" },
      { label: "Prestanda-optimering", href: "/tjanster/prestanda-optimering" },
      { label: "SEO-optimering", href: "/tjanster/seo-optimering" },
    ]}
  />
);

export default WebbutvecklingPage;
