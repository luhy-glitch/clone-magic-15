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
    process={[
      { step: "1", title: "Prestandaanalys", description: "Vi kör Lighthouse, WebPageTest och Chrome DevTools för att identifiera exakt vad som saktar ner din sajt." },
      { step: "2", title: "Prioriterad åtgärdsplan", description: "Vi rangordnar alla problem efter påverkan och presenterar en tydlig plan med förväntade förbättringar." },
      { step: "3", title: "Teknisk optimering", description: "Vi implementerar åtgärder: bildkomprimering, koddelning, cachning, CDN-konfiguration och rendering-optimering." },
      { step: "4", title: "Verifiering & rapport", description: "Vi mäter resultaten med en detaljerad före/efter-rapport som visar konkreta förbättringar i Lighthouse-poäng." },
    ]}
    caseStudies={[
      { client: "FastTrack AB", metric: "42→98", result: "Lighthouse-poäng efter fullständig prestandaoptimering. Laddtid under 1 sekund." },
      { client: "Västerås Handel", metric: "-3.4s", result: "Minskad laddtid från 4.2s till 0.8s med bildoptimering och koddelning." },
      { client: "Sala Bygg", metric: "+25%", result: "Ökning i konverteringsgrad efter att Core Web Vitals nådde gröna tröskelvärden." },
    ]}
    contentSections={[
      {
        title: "Kundcase: Optimering av Core Web Vitals",
        paragraphs: [
          "En befintlig webbplats led av höga Bounce Rates på grund av långsamma laddningstider i mobilen. Vi genomförde en total prestandaoptimering där vi optimerade bildhantering, skriptladdning och serverrespons. Sidan gick från ett rött betyg (45/100) till ett grönt (98/100) på Google PageSpeed Insights, vilket direkt sänkte avhoppsfrekvensen dramatiskt.",
        ],
      },
      {
        title: "Vanliga frågor om prestanda",
        paragraphs: [
          "Varför är hastigheten så viktig för min hemsida? Google använder laddningstid som en direkt rankingfaktor. Om din sida är långsam kommer besökarna att lämna den innan den ens har laddat klart, vilket skickar signaler till Google att din sida inte är användarvänlig.",
          "Behöver jag bygga om hela sidan för att få den snabb? Inte alltid. Ofta kan vi göra stora förbättringar genom att optimera befintlig kod, komprimera tunga bilder och se över hur resurser laddas. Vi börjar alltid med en analys för att se var de största vinsterna finns.",
        ],
      },
    ]}
    faqTitle="Vanliga frågor om sidhastighet"
    faq={[
      { question: "Hur snabb måste en hemsida vara?", answer: "Under 2026 bör en sida ladda på under 1.5 sekund för att inte tappa besökare och ranking." },
      { question: "Påverkar hastigheten min försäljning?", answer: "Absolut. En snabbare sida leder bevisat till högre konvertering och fler leads." },
      { question: "Kan ni optimera min befintliga sajt?", answer: "Ja, vi utför prestandaanalyser på alla typer av plattformar och implementerar konkreta förbättringar." },
      { question: "Vad är Core Web Vitals?", answer: "Det är Googles mätvärden för användarupplevelse: LCP (laddtid), INP (interaktivitet) och CLS (visuell stabilitet). Bra poäng ger bättre ranking." },
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
