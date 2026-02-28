import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Search } from "lucide-react";

const SeoOptimeringPage = () => (
  <ServicePageTemplate
    title="SEO-optimering"
    metaTitle="SEO-optimering i Västerås, Köping & Sala | Lokal SEO | LRH Konsult"
    metaDescription="Öka din synlighet på Google med professionell SEO-optimering. Teknisk SEO, lokal SEO och innehållsstrategi för företag i Västmanland."
    heroSubheading="SEO-optimering"
    heroHeading="SEO-optimering i Västerås, Köping & Sala"
    heroDescription="Bli hittad av dina kunder när de söker på Google. Med datadriven SEO-strategi hjälper jag företag i Västmanland att klättra i sökresultaten och få fler kvalificerade besökare."
    whyTitle="Varför är SEO viktigt för ditt företag?"
    whyText="75% av alla användare scrollar aldrig förbi första sidan på Google. Med rätt SEO-strategi kan ditt företag synas precis när potentiella kunder söker efter dina tjänster. Jag kombinerar teknisk SEO, innehållsoptimering och lokal SEO för att bygga en hållbar digital synlighet som ger resultat månad efter månad."
    icon={Search}
    breadcrumbLabel="SEO-optimering"
    features={[
      { title: "Teknisk SEO", description: "Optimering av sidstruktur, laddtider, schema markup och crawlbarhet för sökmotorer." },
      { title: "Lokal SEO", description: "Google Business Profile-optimering och lokala sökord för Västerås, Köping och Sala." },
      { title: "Innehållsstrategi", description: "Keyword research och innehållsplanering som attraherar rätt besökare och bygger auktoritet." },
      { title: "Konkurrentanalys", description: "Djupgående analys av dina konkurrenters SEO-strategi för att hitta möjligheter och luckor." },
      { title: "Löpande rapportering", description: "Månatliga rapporter med tydliga KPI:er så du alltid vet hur din investering presterar." },
    ]}
    testimonial={{
      quote: "Inom 4 månader gick vi från sida 3 till topp 3 på Google för våra viktigaste sökord. Fantastiskt arbete!",
      author: "Marcus Ek",
      role: "Ägare, Köpings Rörmokare",
    }}
  />
);

export default SeoOptimeringPage;
