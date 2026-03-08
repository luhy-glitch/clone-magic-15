import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Search } from "lucide-react";

const SeoOptimeringPage = () => (
  <ServicePageTemplate
    title="SEO-optimering"
    metaTitle="Lokal SEO Västerås, Köping & Sala | LRH Konsult"
    metaDescription="Lokal SEO-expert i Västmanland. Vi optimerar din Google-närvaro i Västerås, Köping och Sala med teknisk SEO, innehållsstrategi och mätbara resultat."
    heroSubheading="SEO-optimering"
    heroHeading="SEO-optimering i Västerås, Köping & Sala"
    heroDescription="Vill du synas högst upp när kunder söker efter dina tjänster? Vi är specialister på SEO-optimering i Västmanland. Genom att kombinera teknisk expertis med lokalt anpassat innehåll ser vi till att ditt företag dominerar sökresultaten i Västerås, Köping och Sala."
    whyTitle="Lokal SEO-strategi för Västerås och Mälardalen"
    whyText="Vi optimerar din närvaro på Google Maps och ser till att du rankar på geografiska sökord. Lokal SEO är den mest kostnadseffektiva metoden för småföretag att växa digitalt under 2026."
    icon={Search}
    breadcrumbLabel="SEO-optimering"
    features={[
      { title: "Teknisk SEO", description: "Optimering av sidstruktur, laddtider, schema markup och crawlbarhet för sökmotorer." },
      { title: "Lokal SEO", description: "Google Business Profile-optimering och lokala sökord för Västerås, Köping och Sala." },
      { title: "Innehållsstrategi", description: "Keyword research och innehållsplanering som attraherar rätt besökare och bygger auktoritet." },
      { title: "Konkurrentanalys", description: "Djupgående analys av dina konkurrenters SEO-strategi för att hitta möjligheter och luckor." },
      { title: "Löpande rapportering", description: "Månatliga rapporter med tydliga KPI:er så du alltid vet hur din investering presterar." },
    ]}
    process={[
      { step: "1", title: "SEO-audit & analys", description: "Vi gör en djupgående analys av din nuvarande webbplats, identifierar tekniska problem och kartlägger dina konkurrenter i Västmanland." },
      { step: "2", title: "Sökordsstrategi", description: "Vi identifierar de mest lönsamma sökorden för ditt företag i Västerås, Köping och Sala och skapar en prioriterad handlingsplan." },
      { step: "3", title: "Implementering", description: "Vi optimerar din webbplats tekniskt, förbättrar innehåll och metadata, och bygger en stark intern länkstruktur." },
      { step: "4", title: "Mätning & rapport", description: "Månatlig uppföljning med tydliga KPI:er och löpande optimering baserat på data och resultat." },
    ]}
    caseStudies={[
      { client: "Köpings Rörmokare", metric: "Topp 3", result: "Gick från sida 3 till topp 3 på Google inom 4 månader med lokal SEO." },
      { client: "Sala Trädgård", metric: "+120%", result: "Ökning i organisk trafik efter 6 månaders SEO-arbete med lokalt fokus." },
      { client: "Västerås El & VVS", metric: "+85%", result: "Fler inkommande samtal tack vare optimerad Google Business-profil." },
    ]}
    contentSections={[
      {
        title: "Kundcase: Från osynlig till topp 3 på sex månader",
        paragraphs: [
          "En nystartad tjänsteverksamhet i Västerås hade svårt att synas på sina viktigaste sökord. Genom en kombination av teknisk SEO-städning och en aggressiv strategi för lokala landningssidor lyckades vi placera dem bland de tre högsta resultaten på över tio relevanta sökfraser. Detta ledde till en organisk trafikökning på 250 %.",
        ],
      },
      {
        title: "Vanliga frågor om SEO",
        paragraphs: [
          "Hur lång tid tar det innan man ser resultat av SEO? SEO är en långsiktig investering. Normalt börjar man se tydliga förbättringar i rankingen efter 3 till 6 månader, men de tekniska optimeringarna vi gör ger ofta en omedelbar effekt på hur sökmotorerna läser din sida.",
          "Vad är skillnaden mellan vanlig SEO och lokal SEO? Lokal SEO handlar om att optimera din närvaro för specifika geografiska områden, som Västerås eller Köping. Det handlar om att synas i kartresultat och vid sökningar där användaren letar efter tjänster \"nära mig\" eller i en specifik stad.",
        ],
      },
    ]}
    faqTitle="Vanliga frågor om SEO i Västmanland"
    faq={[
      { question: "Hur rankar jag på första sidan på Google?", answer: "Det krävs en kombination av teknisk prestanda, relevant lokalt innehåll och starka backlinks." },
      { question: "Vad är lokal SEO?", answer: "Det är optimering för att synas i specifika städer som Västerås, Köping och Sala vid lokala sökningar." },
      { question: "Kan ni garantera en förstaplats?", answer: "Ingen seriös aktör ger garantier, men våra metoder följer Googles \"Best Practices\" för att ge dig absolut bäst förutsättningar." },
      { question: "Hur mäter ni resultaten av SEO?", answer: "Vi följer upp med månatliga rapporter som visar positioner, organisk trafik, konverteringar och andra relevanta KPI:er." },
    ]}
    testimonial={{
      quote: "Inom 4 månader gick vi från sida 3 till topp 3 på Google för våra viktigaste sökord. Fantastiskt arbete!",
      author: "Marcus Ek",
      role: "Ägare, Köpings Rörmokare",
    }}
    relatedServices={[
      { label: "Prestanda-optimering", href: "/tjanster/prestanda-optimering" },
      { label: "Webbutveckling", href: "/tjanster/webbutveckling" },
      { label: "Underhåll & Support", href: "/tjanster/underhall-support" },
    ]}
  />
);

export default SeoOptimeringPage;
