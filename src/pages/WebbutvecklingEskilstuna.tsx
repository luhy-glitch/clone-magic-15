import { Code2 } from "lucide-react";
import LocalLandingPage from "./LocalLandingPage";

const config = {
  city: "Eskilstuna",
  slug: "webbutveckling-eskilstuna",
  serviceKeyword: "Webbutveckling",
  metaTitle: "SEO Eskilstuna - Dominera Lokala Sökresultat | LRH Konsult",
  metaDescription: "Vi hjälper företag i Eskilstuna att ranka högt på Google genom teknisk perfektion och lokal relevans.",
  heroHeading: "Webbutveckling & SEO i Eskilstuna",
  heroDescription: "Eskilstuna är en viktig knutpunkt i Södermanland och en stad i snabb tillväxt. Kraven på företagens digitala närvaro har aldrig varit högre. Vi specialiserar oss på webbutveckling med fokus på Next.js och React – tekniker som möjliggör extremt snabba laddningstider och en sömlös användarupplevelse.",
  icon: Code2,
  benefits: [
    { title: "Regional expertis", description: "Vi förstår den lokala marknaden i Eskilstuna och Södermanland och bygger hemsidor som talar direkt till din målgrupp." },
    { title: "Prestanda i världsklass", description: "Våra hemsidor når konsekvent 100/100 i Google PageSpeed, vilket ger dig en avgörande fördel i sökresultaten." },
    { title: "Modern teknikstack", description: "React, Next.js och TypeScript ger dig en skalbar och framtidssäker plattform som växer med ditt företag." },
    { title: "Konverteringsoptimerad", description: "Vi designar med konvertering i fokus – varje element på din hemsida har ett syfte och driver besökare mot handling." },
  ],
  bodyTitle: "Maximera din digitala potential i Eskilstuna",
  bodyParagraphs: [
    "För att sticka ut i den lokala konkurrensen krävs en hemsida som presterar på en nivå utöver det vanliga. En hemsida från oss är inte bara en digital broschyr, det är en högpresterande motor som är byggd för att locka besökare och förvandla dem till lojala kunder. Genom att kombinera djup teknisk kunskap med en förståelse för Eskilstunas affärsklimat skapar vi webbplatser som verkligen gör skillnad för din verksamhet.",
    "Att ranka högt på Google i Eskilstuna kräver mer än bara sökord i rubrikerna. Den moderna sökmotoroptimeringen bygger på en stabil teknisk grund där hastighet och tillgänglighet står i centrum. När vi optimerar din sajt arbetar vi aktivt med att sänka Total Blocking Time (TBT) till noll millisekunder, vilket ger en omedelbar respons till användaren.",
    "Detta är signaler som Google värderar extremt högt. För företag i Eskilstuna innebär en tekniskt fulländad hemsida att man ofta kan gå om konkurrenter som förlitar sig på äldre, tyngre system. Vi ser till att din digitala dörr alltid står öppen och laddar snabbare än någon annan i regionen.",
  ],
  bodyExtraSections: [
    {
      title: "Lokal SEO-strategi för ökad synlighet i Eskilstuna med omnejd",
      paragraphs: [
        "För att lyckas med SEO i Eskilstuna krävs en lokal förankring i det digitala innehållet. Det handlar om att vara relevant för de sökningar som invånarna i Eskilstuna faktiskt gör. Vi implementerar avancerad strukturerad data, såsom JSON-LD för lokala företag, vilket gör att din verksamhet kan visas med rika utdrag direkt i sökresultaten.",
        "Detta ökar klickfrekvensen och driver mer relevant trafik till din sida. Genom att strategiskt väva in Eskilstuna som en geografisk markör i kombination med dina tjänster, bygger vi en auktoritet som håller över tid. Vårt mål är att ditt företag ska vara det självklara valet när någon i Eskilstuna söker efter det du erbjuder.",
      ],
    },
    {
      title: "Webbdesign som konverterar besökare till kunder i Eskilstuna",
      paragraphs: [
        "En vacker design är värdelös om ingen ser den, och en snabb sida tappar sitt värde om designen är rörig. I Eskilstuna ser vi till att kombinera det bästa av två världar. Vi skapar användarvänliga gränssnitt som är optimerade för konvertering (CRO). Varje element på din hemsida, från rubriker till kontaktformulär, är placerat med syfte.",
        "Genom att följa en mobil-först-strategi säkerställer vi att din webbplats fungerar fläckfritt på alla enheter, vilket är kritiskt i dagens mobila samhälle. För företag i Eskilstuna innebär detta att du aldrig missar en potentiell kund på grund av en svårnavigerad eller långsam mobilupplevelse.",
      ],
    },
    {
      title: "En långsiktig investering i Eskilstunas snabbaste webbteknik",
      paragraphs: [
        "När du väljer LRH Konsult för din webbutveckling i Eskilstuna investerar du i framtiden. Vi bygger inte lösningar som blir omoderna efter ett år, utan använder teknologier som är standard för världens största tech-bolag. Detta garanterar en säkerhet och prestanda som är svårslagen.",
        "Vi prioriterar dessutom hållbarhet genom att skriva effektiv kod som kräver mindre energi att ladda, vilket bidrar till ett grönare internet. För oss är varje projekt i Eskilstuna en möjlighet att visa hur teknisk perfektion kan leda till verklig affärsnytta. Låt oss hjälpa dig att ta ditt företag i Eskilstuna till nästa nivå med en hemsida som har 100/100 i PageSpeed och en SEO-strategi som håller hela vägen.",
      ],
    },
  ],
  faq: [
    { question: "Vad kostar webbutveckling i Eskilstuna?", answer: "Våra paket börjar från 5 000 kr för enklare hemsidor. Mer avancerade lösningar med skräddarsydda funktioner prissätts utifrån projektets omfattning. Kontakta oss för en fri offert." },
    { question: "Kan ni hjälpa företag i Eskilstuna med SEO?", answer: "Absolut. Lokal SEO är en central del av vår tjänst. Vi optimerar din hemsida för att ranka på relevanta sökord i Eskilstuna och hela Sörmland." },
    { question: "Hur skiljer sig era hemsidor från mallbaserade lösningar?", answer: "Till skillnad från WordPress-mallar eller Wix bygger vi din hemsida från grunden med React/Next.js. Det ger dig unik design, överlägsen prestanda och full kontroll utan månatliga licensavgifter." },
    { question: "Hur snabbt ser man resultat av SEO i Eskilstuna?", answer: "De första förbättringarna syns ofta inom 2–3 månader. Mer konkurrenskraftiga sökord kan ta 6–12 månader att ranka för, men den tekniska grunden ger resultat direkt." },
  ],
};

const WebbutvecklingEskilstuna = () => <LocalLandingPage config={config} />;
export default WebbutvecklingEskilstuna;
