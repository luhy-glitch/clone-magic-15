import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Zap } from "lucide-react";

const PrestandaOptimeringPage = () => (
  <ServicePageTemplate
    title="Prestanda-optimering"
    metaTitle="Prestanda-optimering & Core Web Vitals | Snabbare Webb | LRH Konsult"
    metaDescription="Snabbare laddtider, bättre Core Web Vitals och högre konvertering. Professionell prestandaoptimering för webbplatser i Västmanland."
    heroSubheading="Prestanda"
    heroHeading="Prestanda-optimering för snabbare affärer"
    heroDescription="Varje sekund räknas. Långsamma webbplatser förlorar besökare, tappar ranking och minskar konverteringen. Jag optimerar din webbplats för blixtsnabba laddtider och gröna Core Web Vitals."
    whyTitle="Varför är hastighet så viktigt?"
    whyText="Google använder laddtid som rankingfaktor sedan 2021. En sajt som laddar på 1 sekund konverterar 3x bättre än en som laddar på 5 sekunder. Med djupgående prestandaanalys identifierar jag flaskhalsar och implementerar optimeringar som ger mätbara resultat – både i sökresultaten och på din bottenlinje."
    icon={Zap}
    breadcrumbLabel="Prestanda-optimering"
    features={[
      { title: "Core Web Vitals", description: "Optimering av LCP, FID och CLS för att nå Googles gröna tröskelvärden." },
      { title: "Bildoptimering", description: "Automatisk komprimering, lazy loading och moderna format (WebP/AVIF) för snabbare laddning." },
      { title: "Cachning & CDN", description: "Smart cachning-strategi och CDN-konfiguration för snabb leverans globalt." },
      { title: "Konverteringsoptimering (CRO)", description: "Snabbare sajt = fler konverteringar. Jag kopplar prestanda till affärsresultat." },
      { title: "Före & efter-rapport", description: "Detaljerad rapport med mätbara förbättringar i Lighthouse-poäng och laddtider." },
    ]}
    testimonial={{
      quote: "Vår Lighthouse-poäng gick från 42 till 98. Sajten laddar nu på under en sekund och vi ser direkt fler förfrågningar.",
      author: "Karin Olsson",
      role: "Marknadschef, FastTrack AB",
    }}
    relatedServices={[
      { label: "SEO-optimering", href: "/tjanster/seo-optimering" },
      { label: "Webbutveckling", href: "/tjanster/webbutveckling" },
      { label: "Underhåll & Support", href: "/tjanster/underhall-support" },
    ]}
  />
);

export default PrestandaOptimeringPage;
