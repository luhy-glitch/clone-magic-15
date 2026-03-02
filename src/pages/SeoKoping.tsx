import { Search } from "lucide-react";
import LocalLandingPage from "./LocalLandingPage";

const config = {
  city: "Köping",
  slug: "seo-koping",
  serviceKeyword: "SEO-optimering",
  metaTitle: "SEO-optimering i Köping – Ranka #1 på Google | LRH Konsult",
  metaDescription: "Professionell SEO-optimering i Köping. Lokal SEO-expert som hjälper företag i Köping att synas högst på Google. Boka kostnadsfri SEO-analys idag!",
  heroHeading: "SEO-optimering i Köping – syns högst på Google",
  heroDescription: "Vill ditt företag i Köping synas överst när kunder söker efter dina tjänster? Vi är specialister på lokal SEO i Köping och hjälper dig att dominera sökresultaten.",
  icon: Search,
  benefits: [
    { title: "Lokal SEO i Köping", description: "Vi optimerar din närvaro för lokala sökningar så att kunder i Köping hittar dig först." },
    { title: "Google Business-optimering", description: "Fullständig optimering av din Google Business-profil för maximal synlighet i Köping." },
    { title: "Teknisk SEO-analys", description: "Djupgående analys av din webbplats struktur, hastighet och indexering." },
    { title: "Mätbara resultat", description: "Månatliga rapporter med tydliga KPI:er så du ser exakt hur din investering presterar." },
  ],
  bodyTitle: "Din SEO-expert i Köping",
  bodyParagraphs: [
    "Köping är en stad med många lokala företag som konkurrerar om synlighet online. Oavsett om du driver en hantverksverksamhet, en butik eller ett tjänsteföretag i Köping, är lokal SEO den mest kostnadseffektiva metoden för att nå nya kunder.",
    "Som SEO-konsult med erfarenhet av den lokala marknaden i Västmanland hjälper jag företag i Köping att optimera sin digitala närvaro. Det handlar om allt från teknisk SEO och sökordsstrategi till innehållsoptimering och lokal citering.",
    "Genom att fokusera på de sökord som dina potentiella kunder i Köping faktiskt använder, bygger vi en långsiktig strategi som ger bestående resultat. De första förbättringarna syns ofta inom 2–3 månader, medan mer konkurrenskraftiga sökord kan ta 6–12 månader att ranka för.",
    "Boka en kostnadsfri SEO-analys så visar jag dig konkret hur ditt företag i Köping kan klättra i sökresultaten och nå fler kunder.",
  ],
  faq: [
    { question: "Hur mycket kostar SEO i Köping?", answer: "Vi erbjuder skräddarsydda SEO-paket från 3 000 kr/månad, anpassade efter ditt företags behov och budget i Köping." },
    { question: "Hur lång tid tar det att se resultat av SEO i Köping?", answer: "Första förbättringarna syns inom 2–3 månader. Mer konkurrenskraftiga sökord i Köping kan ta 6–12 månader." },
    { question: "Behöver jag en ny hemsida för bättre SEO?", answer: "Inte nödvändigtvis. Vi kan optimera din befintliga sajt. Men om tekniken är föråldrad kan en ny hemsida ge ännu bättre resultat." },
  ],
};

const SeoKoping = () => <LocalLandingPage config={config} />;
export default SeoKoping;
