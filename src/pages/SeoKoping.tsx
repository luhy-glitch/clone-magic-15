import { Search } from "lucide-react";
import LocalLandingPage from "./LocalLandingPage";

const config = {
  city: "Köping",
  slug: "seo-koping",
  serviceKeyword: "SEO-optimering",
  metaTitle: "SEO Köping | Sökmotoroptimering | LRH Konsult",
  metaDescription: "Dominera sökresultaten i Köping! LRH Konsult hjälper ditt företag med teknisk SEO, lokal optimering och innehållsstrategi för toppresultat på Google.",
  heroHeading: "SEO och Sökmotoroptimering i Köping",
  heroDescription: "Syns du inte på Google så finns du inte. Vi hjälper lokala företag i Köping att ta marknadsandelar digitalt genom datadriven och teknisk sökmotoroptimering anpassad för din bransch och ditt geografiska upptagningsområde.",
  icon: Search,
  benefits: [
    { title: "Lokal SEO i Köping", description: "Vi optimerar din närvaro för lokala sökningar så att kunder i Köping hittar dig först på Google och Google Maps." },
    { title: "Google Business-optimering", description: "Fullständig optimering av din Google Business-profil med rätt kategorier, bilder och omdömesstrategi för maximal synlighet." },
    { title: "Teknisk SEO-analys", description: "Djupgående analys av din webbplats struktur, hastighet, indexering och crawlbarhet för att eliminera tekniska hinder." },
    { title: "Mätbara resultat", description: "Månatliga rapporter med tydliga KPI:er som visar rankingpositioner, organisk trafik och konverteringar." },
  ],
  bodyTitle: "Lokal SEO som driver riktiga kunder i Köping",
  bodyParagraphs: [
    "Att ranka högt på relevanta sökord i Köping är den bästa investeringen du kan göra för ditt företag. Till skillnad från betald annonsering ger sökmotoroptimering en bestående synlighet som fortsätter att leverera leads och kunder månad efter månad, utan löpande annonskostnader.",
    "Vi optimerar din Google Business-profil med rätt kategorier, professionella bilder och en strategi för att bygga autentiska kundrecensioner. Vi bygger dessutom lokala landningssidor med sökord anpassade för Köpings specifika marknad, och ser till att din verksamhet dyker upp när potentiella kunder söker efter dina tjänster.",
    "Lokal SEO i Köping handlar om mer än bara sökord. Det handlar om att bygga trovärdighet genom konsekvent NAP-data (namn, adress, telefon) på alla plattformar, relevanta lokala citeringar och en webbplats som uppfyller Googles kvalitetskrav för sidladdning och användarupplevelse.",
  ],
  bodyExtraSections: [
    {
      title: "Teknisk SEO-optimering i Köping",
      paragraphs: [
        "Sökmotorer premierar tekniskt felfria webbplatser. Vi genomför djupgående tekniska SEO-audits där vi analyserar allt från Core Web Vitals och laddningstider till strukturerad data, semantisk HTML-struktur och intern länkning.",
        "Vanliga tekniska problem vi åtgärdar inkluderar långsam sidladdning, bristfällig mobilanpassning, saknad eller duplicerad metadata, felaktiga kanoniska taggar och otillräcklig schema-markup. Varje åtgärd prioriteras efter potentiell påverkan på din ranking i Köping.",
        "Vi implementerar även avancerade tekniker som JSON-LD strukturerad data för att hjälpa Google förstå ditt företags tjänster, plats och kontaktuppgifter – vilket direkt påverkar hur du visas i lokala sökresultat och kunskapspaneler.",
      ],
    },
    {
      title: "Innehållsstrategi för företag i Köping",
      paragraphs: [
        "En framgångsrik SEO-strategi kräver relevant och unikt innehåll. Vi genomför grundlig sökordsanalys för att identifiera de mest lönsamma sökfraserna för ditt företag i Köping och skapar en innehållsplan som systematiskt bygger din auktoritet inom ditt område.",
        "Genom att publicera regelbundet och strategiskt innehåll som svarar på dina kunders frågor bygger du inte bara bättre rankingar – du etablerar dig som en pålitlig expert i din bransch. Det är den mest hållbara vägen till långsiktig digital tillväxt i Köping.",
      ],
    },
  ],
  faq: [
    { question: "Hur mycket kostar SEO i Köping?", answer: "Vi erbjuder skräddarsydda SEO-paket från 3 000 kr/månad, anpassade efter ditt företags behov, konkurrenssituation och budget i Köping." },
    { question: "Hur lång tid tar det att se resultat av SEO i Köping?", answer: "Första förbättringarna syns inom 2–3 månader. Mer konkurrenskraftiga sökord i Köping kan ta 6–12 månader att ranka för, men tekniska förbättringar ger ofta omedelbar effekt." },
    { question: "Behöver jag en ny hemsida för bättre SEO?", answer: "Inte nödvändigtvis. Vi kan optimera din befintliga sajt. Men om tekniken är föråldrad eller sajten är byggd på en långsam plattform kan en ny hemsida ge markant bättre resultat." },
    { question: "Vad skiljer er från andra SEO-byråer?", answer: "Vi är lokalt förankrade i Västmanland och har djup kunskap om den regionala marknaden. Vi jobbar transparent med mätbara resultat och ingen bindningstid." },
  ],
};

const SeoKoping = () => <LocalLandingPage config={config} />;
export default SeoKoping;
