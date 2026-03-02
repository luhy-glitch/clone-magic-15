import { Code2 } from "lucide-react";
import LocalLandingPage from "./LocalLandingPage";

const config = {
  city: "Västerås",
  slug: "webbutveckling-vasteras",
  serviceKeyword: "Webbutveckling",
  metaTitle: "Webbutveckling Västerås | Snabba & Säljande Hemsidor | LRH Konsult",
  metaDescription: "Behöver ditt företag i Västerås en ny hemsida? Vi bygger blixtsnabba, moderna och SEO-optimerade webbplatser som konverterar besökare till kunder.",
  heroHeading: "Professionell Webbutveckling i Västerås",
  heroDescription: "Letar du efter en lokal partner för webbutveckling i Västerås? På LRH Konsult bygger vi skräddarsydda, moderna webbplatser i React och Next.js som inte bara ser bra ut, utan också presterar på absolut toppnivå.",
  icon: Code2,
  benefits: [
    { title: "Lokalt i Västerås", description: "Vi finns nära dig i Västerås och erbjuder personliga möten och snabb kommunikation." },
    { title: "Next.js & React", description: "Moderna ramverk som ger blixtsnabba hemsidor med server-side rendering för maximal SEO." },
    { title: "SEO-optimerat från start", description: "Varje hemsida vi bygger i Västerås är optimerad för att ranka på Google från dag ett." },
    { title: "Responsiv design", description: "Pixel-perfekt upplevelse på mobil, surfplatta och desktop för dina kunder i Västerås." },
  ],
  bodyTitle: "Blixtsnabba hemsidor för lokala företag",
  bodyParagraphs: [
    "En snabb hemsida är avgörande för både användarupplevelsen och din synlighet på Google. Vi fokuserar på extrem prestandaoptimering så att dina kunder i Västerås och Västmanland aldrig behöver vänta på att din sida ska ladda.",
  ],
  bodyExtraSections: [
    {
      title: "Rätt teknisk grund för framtiden",
      paragraphs: [
        "Vi bygger din plattform med modern teknik som är skalbar. Oavsett om du behöver en stilren företagspresentation eller en mer avancerad webbapplikation, ser vi till att koden är ren, säker och helt redo för framtida uppdateringar.",
      ],
    },
  ],
  faq: [
    { question: "Vad kostar en hemsida i Västerås?", answer: "Priset varierar beroende på projektets storlek. Jag erbjuder paket från 5 000 kr till 25 000 kr, anpassade för företag i Västerås. Kontakta mig för en skräddarsydd offert." },
    { question: "Hur lång tid tar det att bygga en hemsida i Västerås?", answer: "En enkel hemsida kan vara klar inom 1–2 veckor. Mer komplexa lösningar med e-handel eller skräddarsydda funktioner tar 4–8 veckor." },
    { question: "Erbjuder ni SEO för företag i Västerås?", answer: "Ja, alla våra hemsidor byggs med SEO i grunden. Vi erbjuder även dedikerad SEO-optimering för att hjälpa ditt företag att ranka högst i Västerås." },
  ],
};

const WebbutvecklingVasteras = () => <LocalLandingPage config={config} />;
export default WebbutvecklingVasteras;
