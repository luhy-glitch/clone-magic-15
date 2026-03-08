import { Code2 } from "lucide-react";
import LocalLandingPage from "./LocalLandingPage";

const config = {
  city: "Västerås",
  slug: "webbutveckling-vasteras",
  serviceKeyword: "Webbutveckling",
  metaTitle: "Webbutveckling Västerås | LRH Konsult",
  metaDescription: "Professionell webbutveckling i Västerås. Blixtsnabba hemsidor i React & Next.js, SEO-optimerade från dag ett. Boka fri konsultation!",
  heroHeading: "Professionell Webbutveckling i Västerås",
  heroDescription: "Letar du efter en lokal partner för webbutveckling i Västerås? På LRH Konsult bygger vi skräddarsydda, moderna webbplatser i React och Next.js som inte bara ser bra ut, utan också presterar på absolut toppnivå i sökresultaten.",
  icon: Code2,
  benefits: [
    { title: "Lokalt i Västerås", description: "Vi finns nära dig i Västerås och erbjuder personliga möten och snabb kommunikation genom hela projektet." },
    { title: "Next.js & React", description: "Moderna ramverk som ger blixtsnabba hemsidor med server-side rendering för maximal SEO-prestanda." },
    { title: "SEO-optimerat från start", description: "Varje hemsida vi bygger i Västerås är optimerad för att ranka på Google från dag ett med rätt metadata och struktur." },
    { title: "Responsiv design", description: "Pixel-perfekt upplevelse på mobil, surfplatta och desktop för dina kunder i Västerås och Mälardalen." },
  ],
  bodyTitle: "Blixtsnabba hemsidor för företag i Västerås",
  bodyParagraphs: [
    "En snabb hemsida är avgörande för både användarupplevelsen och din synlighet på Google. Företag i Västerås som investerar i modern webbutveckling får en tydlig konkurrensfördel – snabbare laddtider leder till lägre avhoppsfrekvens, högre konvertering och bättre placeringar i sökresultaten.",
    "Vi fokuserar på extrem prestandaoptimering genom att använda tekniker som server-side rendering, automatisk koddelning och moderna bildformat som WebP och AVIF. Resultatet är hemsidor som laddar på under en sekund, även på mobila enheter med långsammare uppkoppling.",
    "Som din lokala webbutvecklare i Västerås förstår vi den regionala marknaden. Vi vet vilka sökord dina potentiella kunder använder och bygger din webbplats med lokal SEO inbakad i varje sida. Det handlar inte bara om att synas – det handlar om att synas för rätt målgrupp i Västerås och Mälardalen.",
  ],
  bodyExtraSections: [
    {
      title: "Rätt teknisk grund för framtiden",
      paragraphs: [
        "Vi bygger din plattform med modern teknik som är skalbar och framtidssäker. Oavsett om du behöver en stilren företagspresentation, en avancerad webbapplikation eller en e-handelslösning ser vi till att koden är ren, välstrukturerad och helt redo för framtida uppdateringar.",
        "Genom att välja React och Next.js får du en webbplats som inte bara är snabb idag utan också enkelt kan utökas med nya funktioner i takt med att ditt företag växer. Vi använder TypeScript för att minimera buggar och säkerställa hög kodkvalitet.",
        "Varje projekt i Västerås inleds med en grundlig behovsanalys där vi kartlägger dina mål, din målgrupp och dina konkurrenter. Därefter skapar vi en strategisk plan som kombinerar design, utveckling och SEO till en helhetslösning som ger mätbara resultat.",
      ],
    },
    {
      title: "Webbutveckling i Västerås – från idé till lansering",
      paragraphs: [
        "Vår process är transparent och effektiv. Du är involverad i varje steg, från wireframes och prototyper till färdig webbplats. Vi arbetar agilt, vilket innebär att du får se och testa din hemsida löpande under utvecklingen.",
        "Efter lanseringen lämnar vi dig inte i sticket. Vi erbjuder löpande support, underhåll och vidareutveckling så att din hemsida alltid är uppdaterad och presterar optimalt. Många av våra kunder i Västerås har varit med oss i flera år och ser oss som en förlängning av sitt eget team.",
      ],
    },
  ],
  faq: [
    { question: "Vad kostar en hemsida i Västerås?", answer: "Priset varierar beroende på projektets storlek och komplexitet. Vi erbjuder paket från 5 000 kr till 25 000 kr, anpassade för företag i Västerås. Kontakta oss för en skräddarsydd offert baserad på dina specifika behov." },
    { question: "Hur lång tid tar det att bygga en hemsida i Västerås?", answer: "En enkel hemsida kan vara klar inom 1–2 veckor. Mer komplexa lösningar med e-handel eller skräddarsydda funktioner tar 4–8 veckor. Vi håller dig uppdaterad genom hela processen." },
    { question: "Erbjuder ni SEO för företag i Västerås?", answer: "Ja, alla våra hemsidor byggs med SEO i grunden. Vi erbjuder även dedikerad SEO-optimering för att hjälpa ditt företag att ranka högst i Västerås och hela Västmanland." },
    { question: "Kan ni hjälpa med hosting och domän?", answer: "Absolut. Vi kan hantera allt från domänregistrering till hosting-konfiguration så att du slipper det tekniska krånglet." },
  ],
};

const WebbutvecklingVasteras = () => <LocalLandingPage config={config} />;
export default WebbutvecklingVasteras;
