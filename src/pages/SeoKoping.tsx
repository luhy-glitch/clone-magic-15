import { Search } from "lucide-react";
import LocalLandingPage from "./LocalLandingPage";

const config = {
  city: "Köping",
  slug: "seo-koping",
  serviceKeyword: "SEO-optimering",
  metaTitle: "SEO Köping | Sökmotoroptimering som ger resultat | LRH Konsult",
  metaDescription: "Dominera sökresultaten lokalt! LRH Konsult hjälper företag i Köping med teknisk SEO och innehållsoptimering för att nå förstaplatsen på Google.",
  heroHeading: "SEO och Sökmotoroptimering i Köping",
  heroDescription: "Syns du inte på Google så finns du inte. Vi hjälper lokala företag i Köping att ta marknadsandelar digitalt genom datadriven och teknisk sökmotoroptimering (SEO) anpassad för din bransch.",
  icon: Search,
  benefits: [
    { title: "Lokal SEO i Köping", description: "Vi optimerar din närvaro för lokala sökningar så att kunder i Köping hittar dig först." },
    { title: "Google Business-optimering", description: "Fullständig optimering av din Google Business-profil för maximal synlighet i Köping." },
    { title: "Teknisk SEO-analys", description: "Djupgående analys av din webbplats struktur, hastighet och indexering." },
    { title: "Mätbara resultat", description: "Månatliga rapporter med tydliga KPI:er så du ser exakt hur din investering presterar." },
  ],
  bodyTitle: "Lokal SEO som driver riktiga kunder",
  bodyParagraphs: [
    "Att ranka högt på relevanta sökord i din region är den bästa investeringen du kan göra. Vi optimerar din Google Business Profile, bygger rätt landningssidor och ser till att din verksamhet i Köping fångar upp de kunder som aktivt letar efter dina tjänster.",
  ],
  bodyExtraSections: [
    {
      title: "Teknisk optimering i framkant",
      paragraphs: [
        "Sökmotorer älskar tekniskt felfria webbplatser. Vi genomför djupgående tekniska SEO-audits och åtgärdar allt från Core Web Vitals och laddningstider till strukturerad data och semantisk HTML.",
      ],
    },
  ],
  faq: [
    { question: "Hur mycket kostar SEO i Köping?", answer: "Vi erbjuder skräddarsydda SEO-paket från 3 000 kr/månad, anpassade efter ditt företags behov och budget i Köping." },
    { question: "Hur lång tid tar det att se resultat av SEO i Köping?", answer: "Första förbättringarna syns inom 2–3 månader. Mer konkurrenskraftiga sökord i Köping kan ta 6–12 månader." },
    { question: "Behöver jag en ny hemsida för bättre SEO?", answer: "Inte nödvändigtvis. Vi kan optimera din befintliga sajt. Men om tekniken är föråldrad kan en ny hemsida ge ännu bättre resultat." },
  ],
};

const SeoKoping = () => <LocalLandingPage config={config} />;
export default SeoKoping;
