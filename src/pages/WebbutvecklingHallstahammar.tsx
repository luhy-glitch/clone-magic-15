import { Code2 } from "lucide-react";
import LocalLandingPage from "./LocalLandingPage";

const config = {
  city: "Hallstahammar",
  slug: "webbutveckling-hallstahammar",
  serviceKeyword: "Webbutveckling",
  metaTitle: "Webbutveckling Hallstahammar - Hemsidor & SEO | LRH Konsult",
  metaDescription: "Professionella hemsidor i Hallstahammar som rankar på Google. 100/100 PageSpeed, lokal SEO och skräddarsydd webbutveckling i Västmanland.",
  heroHeading: "Webbutveckling & SEO i Hallstahammar",
  heroDescription: "Vi hjälper företag i Hallstahammar att bygga blixtsnabba hemsidor som rankar högst på Google. Garanterat 100/100 PageSpeed och mätbara resultat – din lokala digitala partner i Västmanland.",
  icon: Code2,
  benefits: [
    { title: "Lokalt i Hallstahammar", description: "Vi förstår den lokala marknaden i Hallstahammar och skräddarsyr lösningar som ger ditt företag en tydlig konkurrensfördel." },
    { title: "100/100 PageSpeed", description: "Varje hemsida vi bygger når konsekvent toppresultat i Google PageSpeed Insights, vilket ger dig en direkt rankingfördel." },
    { title: "SEO från grunden", description: "Lokal SEO, strukturerad data och teknisk optimering är integrerat i varje rad kod vi skriver." },
    { title: "React & Next.js", description: "Framtidssäkra tekniker som ger en skalbar plattform utan begränsningar." },
  ],
  bodyTitle: "Moderna hemsidor som ger företag i Hallstahammar fler kunder",
  bodyParagraphs: [
    "Hallstahammar är en kommun med stort företagardriv, men många lokala verksamheter förlorar kunder till konkurrenter med bättre digital närvaro. En modern hemsida som laddar på under en sekund, är mobilanpassad och optimerad för Google är inte längre en lyx – det är en nödvändighet för att synas där kunderna söker.",
    "Vi bygger hemsidor med React och Next.js som levererar server-renderat HTML på under en sekund. Detta innebär att dina besökare aldrig behöver vänta, och Google belönar den snabba laddningstiden med högre rankingpositioner. För företag i Hallstahammar skapar detta en direkt fördel gentemot konkurrenter som fortfarande kör på gamla, tunga CMS-plattformar.",
    "Genom att kombinera teknisk prestanda med lokal SEO-strategi ser vi till att ditt företag i Hallstahammar hamnar högt i sökresultaten när potentiella kunder i Västmanland söker efter dina tjänster. Det handlar om att synas vid rätt tillfälle med rätt budskap.",
  ],
  bodyExtraSections: [
    {
      title: "Varför lokal SEO är avgörande för företag i Hallstahammar",
      paragraphs: [
        "Google prioriterar allt mer lokala sökresultat, vilket innebär att företag i Hallstahammar har en unik möjlighet att dominera sökresultaten i sitt närområde. Med rätt teknisk grund, korrekt JSON-LD LocalBusiness-schema och optimerade metadata kan ditt företag synas före större aktörer i Västerås och andra närliggande städer.",
        "Vi implementerar en fullständig lokal SEO-strategi som inkluderar optimering för Google Maps, lokala sökord och strukturerad data som hjälper Google förstå exakt var du finns och vilka tjänster du erbjuder. Resultatet är ökad synlighet, fler besökare och fler kunder.",
      ],
    },
    {
      title: "En digital partner som förstår Hallstahammars företagsklimat",
      paragraphs: [
        "Vi är din långsiktiga digitala partner i Hallstahammar. Från den initiala behovsanalysen till lansering och löpande support finns vi vid din sida. Vi mäter resultat, optimerar kontinuerligt och ser till att din hemsida alltid presterar på topp.",
        "Oavsett om du driver en restaurang, en verkstad, en butik eller en konsultfirma i Hallstahammar kan vi skapa en hemsida som berättar din historia och attraherar nya kunder. Kontakta oss idag för en kostnadsfri analys.",
      ],
    },
  ],
  faq: [
    { question: "Vad kostar en hemsida i Hallstahammar?", answer: "Våra paket börjar från 5 000 kr. Priset beror på projektets omfattning. Kontakta oss för en kostnadsfri offert." },
    { question: "Hur lång tid tar det att bygga en hemsida?", answer: "En standardhemsida tar 2–4 veckor. Vi prioriterar kvalitet och prestanda i varje steg." },
    { question: "Arbetar ni med alla typer av företag?", answer: "Ja, vi arbetar med alla branscher i Hallstahammar och Västmanland – från hantverkare till restauranger och konsulter." },
    { question: "Ingår SEO i priset?", answer: "Ja, grundläggande teknisk SEO och lokal optimering ingår alltid i alla våra paket." },
  ],
};

const WebbutvecklingHallstahammar = () => <LocalLandingPage config={config} />;
export default WebbutvecklingHallstahammar;
