import { Code2 } from "lucide-react";
import LocalLandingPage from "./LocalLandingPage";

const config = {
  city: "Västerås",
  slug: "webbutveckling-vasteras",
  serviceKeyword: "Webbutveckling",
  metaTitle: "Webbutveckling i Västerås – Moderna hemsidor i React & Next.js | LRH Konsult",
  metaDescription: "Professionell webbutveckling i Västerås. Vi bygger snabba, SEO-optimerade hemsidor i React och Next.js för företag i Västerås och Mälardalen. Boka fri konsultation!",
  heroHeading: "Webbutveckling i Västerås – hemsidor som konverterar",
  heroDescription: "Behöver ditt företag i Västerås en modern, snabb hemsida? Vi bygger skräddarsydda webbplatser i React och Next.js som rankar högt på Google och förvandlar besökare till kunder.",
  icon: Code2,
  benefits: [
    { title: "Lokalt i Västerås", description: "Vi finns nära dig i Västerås och erbjuder personliga möten och snabb kommunikation." },
    { title: "Next.js & React", description: "Moderna ramverk som ger blixtsnabba hemsidor med server-side rendering för maximal SEO." },
    { title: "SEO-optimerat från start", description: "Varje hemsida vi bygger i Västerås är optimerad för att ranka på Google från dag ett." },
    { title: "Responsiv design", description: "Pixel-perfekt upplevelse på mobil, surfplatta och desktop för dina kunder i Västerås." },
  ],
  bodyTitle: "Din webbutvecklare i Västerås",
  bodyParagraphs: [
    "Som webbutvecklare baserad i Västmanland har jag hjälpt företag i Västerås att ta steget in i den digitala världen med moderna, högpresterande webbplatser. Västerås är en stad i stark tillväxt och konkurrensen online ökar stadigt – det är viktigare än någonsin att ha en professionell hemsida som sticker ut.",
    "Jag specialiserar mig på webbutveckling med React och Next.js, teknologier som används av världens största företag för sin hastighet och skalbarhet. Genom att kombinera detta med djup kunskap om SEO och lokal marknadsföring i Västerås skapar jag hemsidor som inte bara ser fantastiska ut, utan också presterar på toppnivå i sökmotorerna.",
    "Varje projekt börjar med en grundlig analys av ditt företags behov och mål. Oavsett om du driver en restaurang på Stora Gatan, en butik i Erikslund eller en konsultfirma i centrum – jag skapar en digital närvaro som är skräddarsydd för just din verksamhet i Västerås.",
    "Kontakta mig för en kostnadsfri konsultation så diskuterar vi hur vi kan ta ditt företag i Västerås till nästa nivå digitalt.",
  ],
  faq: [
    { question: "Vad kostar en hemsida i Västerås?", answer: "Priset varierar beroende på projektets storlek. Jag erbjuder paket från 5 000 kr till 25 000 kr, anpassade för företag i Västerås. Kontakta mig för en skräddarsydd offert." },
    { question: "Hur lång tid tar det att bygga en hemsida i Västerås?", answer: "En enkel hemsida kan vara klar inom 1–2 veckor. Mer komplexa lösningar med e-handel eller skräddarsydda funktioner tar 4–8 veckor." },
    { question: "Erbjuder ni SEO för företag i Västerås?", answer: "Ja, alla våra hemsidor byggs med SEO i grunden. Vi erbjuder även dedikerad SEO-optimering för att hjälpa ditt företag att ranka högst i Västerås." },
  ],
};

const WebbutvecklingVasteras = () => <LocalLandingPage config={config} />;
export default WebbutvecklingVasteras;
