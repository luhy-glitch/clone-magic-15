import { Code2 } from "lucide-react";
import LocalLandingPage from "./LocalLandingPage";

const config = {
  city: "Sala",
  slug: "hemsidor-sala",
  serviceKeyword: "Hemsidor",
  metaTitle: "Hemsidor i Sala – Professionell webbdesign & utveckling | LRH Konsult",
  metaDescription: "Professionella hemsidor i Sala. Vi bygger moderna, snabba hemsidor för företag i Sala med fokus på SEO och konvertering. Boka fri konsultation!",
  heroHeading: "Professionella hemsidor i Sala",
  heroDescription: "Ditt företag i Sala förtjänar en hemsida som gör intryck. Vi skapar moderna, snabba och SEO-optimerade hemsidor som hjälper företag i Sala att nå fler kunder online.",
  icon: Code2,
  benefits: [
    { title: "Anpassat för Sala", description: "Vi förstår den lokala marknaden i Sala och skapar hemsidor som tilltalar dina kunder." },
    { title: "Modern teknik", description: "React och Next.js för blixtsnabba hemsidor som rankar högt på Google." },
    { title: "Allt-i-ett-lösning", description: "Design, utveckling, SEO och support – allt du behöver för din hemsida i Sala." },
    { title: "Personlig service", description: "Nära samarbete med personliga möten och direkt kontakt genom hela projektet." },
  ],
  bodyTitle: "Din partner för hemsidor i Sala",
  bodyParagraphs: [
    "Sala är en stad med en rik historia och en växande företagsscen. Allt fler företag i Sala inser vikten av en professionell hemsida för att konkurrera i den digitala eran. Oavsett om du driver ett lokalt servicebolag, en butik eller en restaurang – en väl utformad hemsida är din viktigaste marknadsföringskanal.",
    "Vi specialiserar oss på att skapa skräddarsydda hemsidor för företag i Sala med hjälp av modern teknik som React och Next.js. Dessa ramverk ger dig en hemsida som laddar blixtsnabbt, ser fantastisk ut på alla enheter och rankar högt på Google.",
    "Varje projekt vi tar oss an i Sala börjar med en grundlig behovsanalys. Vi lyssnar på dina mål, analyserar din bransch och skapar en digital strategi som är anpassad för den lokala marknaden i Sala och Västmanland.",
    "Redo att ge ditt företag i Sala en modern hemsida? Kontakta oss för en kostnadsfri konsultation.",
  ],
  faq: [
    { question: "Vad kostar en hemsida i Sala?", answer: "Vi erbjuder paket från 5 000 kr till 25 000 kr beroende på projektets storlek. Kontakta oss för en offert anpassad för ditt företag i Sala." },
    { question: "Kan ni hjälpa med SEO för företag i Sala?", answer: "Absolut! Alla hemsidor vi bygger är SEO-optimerade från grunden. Vi erbjuder även dedikerade SEO-tjänster för företag i Sala." },
    { question: "Hur snabbt kan ni leverera en hemsida i Sala?", answer: "En enkel hemsida kan vara klar inom 1–2 veckor. Mer komplexa projekt tar 4–8 veckor." },
  ],
};

const HemsidorSala = () => <LocalLandingPage config={config} />;
export default HemsidorSala;
