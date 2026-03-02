import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Zap } from "lucide-react";

const PrestandaOptimeringPage = () => (
  <ServicePageTemplate
    title="Prestanda-optimering"
    metaTitle="Optimera din hemsidas hastighet i Västmanland | Core Web Vitals | LRH Konsult"
    metaDescription="Optimera din hemsidas hastighet i Västmanland. Vi fixar Core Web Vitals för företag i Västerås & Sala. Maxa din ranking med en blixtsnabb sajt."
    heroSubheading="Prestanda"
    heroHeading="Prestanda-optimering för snabbare affärer"
    heroDescription="Sidhastighet är den dolda nyckeln till framgång. Vi utför djupgående prestandaoptimering för företag i Västerås och Västmanland som vill sänka sina laddtider och klättra i sökresultaten genom bättre Core Web Vitals."
    whyTitle="Core Web Vitals-optimering i Västmanland"
    whyText="Google mäter din framgång genom användarupplevelsen. Vi optimerar din kod, komprimerar dina bilder och ser till att din sajt levererar en blixtsnabb upplevelse för kunder i Köping och Sala."
    icon={Zap}
    breadcrumbLabel="Prestanda-optimering"
    features={[
      { title: "Core Web Vitals", description: "Optimering av LCP, FID och CLS för att nå Googles gröna tröskelvärden." },
      { title: "Bildoptimering", description: "Automatisk komprimering, lazy loading och moderna format (WebP/AVIF) för snabbare laddning." },
      { title: "Cachning & CDN", description: "Smart cachning-strategi och CDN-konfiguration för snabb leverans globalt." },
      { title: "Konverteringsoptimering (CRO)", description: "Snabbare sajt = fler konverteringar. Vi kopplar prestanda till affärsresultat." },
      { title: "Före & efter-rapport", description: "Detaljerad rapport med mätbara förbättringar i Lighthouse-poäng och laddtider." },
    ]}
    faqTitle="Vanliga frågor om sidhastighet"
    faq={[
      { question: "Hur snabb måste en hemsida vara?", answer: "Under 2026 bör en sida ladda på under 1.5 sekund för att inte tappa besökare och ranking." },
      { question: "Påverkar hastigheten min försäljning?", answer: "Absolut. En snabbare sida leder bevisat till högre konvertering och fler leads." },
      { question: "Kan ni optimera min befintliga sajt?", answer: "Ja, vi utför prestandaanalyser på alla typer av plattformar och implementerar konkreta förbättringar." },
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
