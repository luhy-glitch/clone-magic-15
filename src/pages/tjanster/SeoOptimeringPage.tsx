import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Search } from "lucide-react";

const SeoOptimeringPage = () => (
  <ServicePageTemplate
    title="SEO-optimering"
    metaTitle="Nå plats #1 på Google med SEO i Västerås & Västmanland | LRH Konsult"
    metaDescription="Nå plats #1 på Google med SEO i Västerås & Västmanland. Lokal SEO-expert som hjälper dig i Köping och Sala att synas. Starta din tillväxtresa nu!"
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
    faqTitle="Vanliga frågor om SEO i Västmanland"
    faq={[
      { question: "Hur rankar jag på första sidan på Google?", answer: "Det krävs en kombination av teknisk prestanda, relevant lokalt innehåll och starka backlinks." },
      { question: "Vad är lokal SEO?", answer: "Det är optimering för att synas i specifika städer som Västerås, Köping och Sala vid lokala sökningar." },
      { question: "Kan ni garantera en förstaplats?", answer: "Ingen seriös aktör ger garantier, men våra metoder följer Googles \"Best Practices\" för att ge dig absolut bäst förutsättningar." },
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
