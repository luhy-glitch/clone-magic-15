import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Settings } from "lucide-react";

const WordpressPage = () => (
  <ServicePageTemplate
    title="WordPress-lösningar"
    metaTitle="Snabba & säkra WordPress-hemsidor i Västerås & Västmanland | LRH Konsult"
    metaDescription="Snabba & säkra WordPress-hemsidor i Västerås. Vi optimerar WordPress för lokala företag i Västmanland. Support, säkerhet och prestanda i världsklass."
    heroSubheading="WordPress"
    heroHeading="WordPress-lösningar för ditt företag"
    heroDescription="WordPress är ett kraftfullt verktyg när det hanteras av experter. Vi bygger skräddarsydda WordPress-lösningar för företag i Västmanland som kräver en stabil, snabb och lätthanterlig plattform för sin digitala tillväxt."
    whyTitle="Säker WordPress-utveckling för företag i Sala och Köping"
    whyText="Vi ser till att din WordPress-sajt är befriad från tunga plugins och säkerhetsluckor. Våra installationer är optimerade för hastighet, vilket är avgörande för din lokala ranking."
    icon={Settings}
    breadcrumbLabel="WordPress-lösningar"
    features={[
      { title: "Anpassade teman", description: "Skräddarsydda teman som matchar ditt varumärke – inga generiska templates." },
      { title: "WooCommerce", description: "Komplett e-handelslösning med säker betalning, lagerhantering och frakt." },
      { title: "Säkerhet & Skydd", description: "Härdad WordPress-installation med brandvägg, malware-scanning och SSL." },
      { title: "Hög prestanda", description: "Avancerad cachning, bildoptimering och CDN för blixtsnabba laddtider." },
    ]}
    faqTitle="Vanliga frågor om WordPress"
    faq={[
      { question: "Varför är min WordPress-sida långsam?", answer: "Ofta beror det på för många plugins eller dåliga teman. Vi rensar och optimerar din sajt för topprestanda." },
      { question: "Hur ofta behöver WordPress uppdateras?", answer: "Vi rekommenderar månatliga uppdateringar av kärna och tillägg för att bibehålla maximal säkerhet." },
      { question: "Kan jag byta från WordPress till Next.js senare?", answer: "Ja, vi kan hjälpa dig med en smidig migration när ditt företag växer och behöver mer kraft." },
    ]}
    testimonial={{
      quote: "Äntligen en WordPress-sajt som känns snabb och säker. Lucas fixade allt vi behövde och mer därtill.",
      author: "Sofia Berg",
      role: "Grundare, Bergström Design",
    }}
    relatedServices={[
      { label: "Underhåll & Support", href: "/tjanster/underhall-support" },
      { label: "SEO-optimering", href: "/tjanster/seo-optimering" },
      { label: "Webbdesign", href: "/tjanster/webbdesign" },
    ]}
  />
);

export default WordpressPage;
