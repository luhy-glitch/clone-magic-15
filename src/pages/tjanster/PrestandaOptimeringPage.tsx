import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Zap } from "lucide-react";

const PrestandaOptimeringPage = () => (
  <ServicePageTemplate
    title="Prestanda-optimering"
    metaTitle="Prestanda & Core Web Vitals | LRH Konsult"
    metaDescription="Optimera din hemsidas hastighet i Västmanland. Vi fixar Core Web Vitals, bildoptimering och cachning. Snabbare sajt = bättre ranking och fler kunder."
    heroSubheading="Prestanda"
    heroHeading="Prestanda-optimering för snabbare affärer"
    heroDescription="Sidhastighet är den dolda nyckeln till framgång online. Vi utför djupgående prestandaoptimering för företag i Västerås och Västmanland som vill sänka sina laddtider, klättra i sökresultaten och öka sina konverteringar genom bättre Core Web Vitals."
    whyTitle="Core Web Vitals-optimering i Västmanland"
    whyText="Google mäter din framgång genom användarupplevelsen. Vi optimerar din kod, komprimerar dina bilder och konfigurerar smart cachning för att leverera en blixtsnabb upplevelse. Varje millisekund räknas – både för dina kunder och för din ranking."
    icon={Zap}
    breadcrumbLabel="Prestanda-optimering"
    features={[
      { title: "Core Web Vitals", description: "Optimering av LCP, INP och CLS för att nå Googles gröna tröskelvärden och maximera din ranking." },
      { title: "Bildoptimering", description: "Automatisk komprimering, lazy loading och moderna format (WebP/AVIF) för snabbare laddning utan kvalitetsförlust." },
      { title: "Cachning & CDN", description: "Smart cachning-strategi och CDN-konfiguration för snabb leverans oavsett besökarens geografiska plats." },
      { title: "Konverteringsoptimering", description: "Snabbare sajt = fler konverteringar. Vi kopplar prestandaförbättringar direkt till mätbara affärsresultat." },
      { title: "Före & efter-rapport", description: "Detaljerad rapport med mätbara förbättringar i Lighthouse-poäng, laddtider och Core Web Vitals." },
    ]}
    process={[
      { step: "1", title: "Prestandaanalys", description: "Vi kör Lighthouse, WebPageTest och Chrome DevTools för att identifiera exakt vad som saktar ner din sajt och prioritera åtgärder efter påverkan." },
      { step: "2", title: "Prioriterad åtgärdsplan", description: "Vi rangordnar alla problem efter förväntad prestandavinst och presenterar en tydlig plan med konkreta förbättringsmål." },
      { step: "3", title: "Teknisk optimering", description: "Vi implementerar åtgärder: bildkomprimering till AVIF/WebP, koddelning, cachning, CDN-konfiguration, skriptoptimering och rendering-förbättringar." },
      { step: "4", title: "Verifiering & rapport", description: "Vi mäter resultaten med en detaljerad före/efter-rapport som visar konkreta förbättringar i Lighthouse-poäng och laddtider." },
    ]}
    contentSections={[
      {
        title: "Så går en prestandaoptimering till",
        paragraphs: [
          "De flesta långsamma sajter lider av samma grundproblem: okomprimerade bilder, onödigt stora JavaScript-bundlar och en server utan korrekt cachning. Vi börjar alltid med en mätning i Lighthouse och Core Web Vitals för att se exakt var flaskhalsarna finns – och vad de kostar dig i form av avhopp och tappade kunder.",
          "Därefter arbetar vi i flera steg. Vi konverterar bilder till moderna format (AVIF med WebP-fallback) med responsiva storlekar och lazy loading, och delar upp JavaScript med dynamisk import och tree-shaking så att bara nödvändig kod laddas vid sidvisning.",
          "Slutligen konfigurerar vi smart server-side cachning, inlinear kritisk CSS och sätter upp ett CDN för snabb global leverans. Målet är konkret: en sajt som konsekvent når grönt i PageSpeed Insights och laddar på bråkdelen av en sekund – för bättre upplevelse, lägre avhopp och starkare ranking på Google.",
        ],
      },
      {
        title: "Varför hastighet avgör din ranking",
        paragraphs: [
          "Google använder Core Web Vitals – LCP, INP och CLS – som direkta rankingfaktorer. Det innebär att en långsam sida inte bara ger dålig användarupplevelse utan också aktivt straffas i sökresultaten. Studier visar att 53 % av mobilanvändare lämnar en sida som tar mer än tre sekunder att ladda.",
          "LCP (Largest Contentful Paint) mäter hur snabbt det största synliga innehållet renderas. INP (Interaction to Next Paint) mäter responsiviteten – hur snabbt sidan reagerar på klick. CLS (Cumulative Layout Shift) mäter visuell stabilitet – att element inte hoppar runt när sidan laddar. Alla tre måste vara gröna för optimal ranking.",
          "Behöver du bygga om hela sidan för att få den snabb? Inte alltid. Ofta kan vi göra stora förbättringar genom att optimera befintlig kod, komprimera tunga bilder, se över hur resurser laddas och implementera rätt cachning-strategi. Vi börjar alltid med en analys för att identifiera var de största vinsterna finns.",
        ],
      },
    ]}
    faqTitle="Vanliga frågor om sidhastighet"
    faq={[
      { question: "Hur snabb måste en hemsida vara?", answer: "Under 2026 bör en sida ladda på under 1.5 sekunder för att inte tappa besökare och ranking. Google rekommenderar LCP under 2.5 sekunder som minimum." },
      { question: "Påverkar hastigheten min försäljning?", answer: "Absolut. En snabbare sida leder bevisat till högre konvertering och fler leads. Amazon har visat att varje 100ms extra laddtid kostar 1% i försäljning." },
      { question: "Kan ni optimera min befintliga sajt?", answer: "Ja, vi utför prestandaanalyser på alla typer av plattformar – WordPress, React, Shopify och mer – och implementerar konkreta förbättringar." },
      { question: "Vad är Core Web Vitals?", answer: "Det är Googles mätvärden för användarupplevelse: LCP (laddtid), INP (interaktivitet) och CLS (visuell stabilitet). Bra poäng ger direkt bättre ranking i sökresultaten." },
    ]}
    relatedServices={[
      { label: "SEO-optimering", href: "/tjanster/seo-optimering" },
      { label: "Webbutveckling", href: "/tjanster/webbutveckling" },
      { label: "Underhåll & Support", href: "/tjanster/underhall-support" },
    ]}
  />
);

export default PrestandaOptimeringPage;
