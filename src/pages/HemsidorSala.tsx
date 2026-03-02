import { Code2 } from "lucide-react";
import LocalLandingPage from "./LocalLandingPage";

const config = {
  city: "Sala",
  slug: "hemsidor-sala",
  serviceKeyword: "Hemsidor",
  metaTitle: "Bygga Hemsida Sala | Webbyrå & Prestandaoptimering | LRH Konsult",
  metaDescription: "Ska du bygga en ny hemsida i Sala? Vi skapar moderna, mobilanpassade webbplatser med fokus på prestanda, snygg design och hög konvertering.",
  heroHeading: "Moderna och Snabba Hemsidor i Sala",
  heroDescription: "Din webbplats är ditt digitala skyltfönster. För företag i Sala erbjuder vi kompletta lösningar för att bygga hemsidor som är lika visuellt tilltalande som de är tekniskt fulländade.",
  icon: Code2,
  benefits: [
    { title: "Anpassat för Sala", description: "Vi förstår den lokala marknaden i Sala och skapar hemsidor som tilltalar dina kunder." },
    { title: "Modern teknik", description: "React och Next.js för blixtsnabba hemsidor som rankar högt på Google." },
    { title: "Allt-i-ett-lösning", description: "Design, utveckling, SEO och support – allt du behöver för din hemsida i Sala." },
    { title: "Personlig service", description: "Nära samarbete med personliga möten och direkt kontakt genom hela projektet." },
  ],
  bodyTitle: "Mobilanpassad design från grunden",
  bodyParagraphs: [
    "Majoriteten av dina besökare surfar via mobilen. Därför designar och utvecklar vi alltid med ett \"mobile-first\"-fokus, vilket garanterar en perfekt och snabb upplevelse oavsett skärmstorlek för dina kunder i Sala.",
  ],
  bodyExtraSections: [
    {
      title: "Från idé till färdig webbplats",
      paragraphs: [
        "Vi hanterar hela processen, från den allra första skissen till lansering och drift. Du får en trygg lokal partner som ser till att din nya hemsida laddar snabbt, rankar bra på Google och är enkel att uppdatera.",
      ],
    },
  ],
  faq: [
    { question: "Vad kostar en hemsida i Sala?", answer: "Vi erbjuder paket från 5 000 kr till 25 000 kr beroende på projektets storlek. Kontakta oss för en offert anpassad för ditt företag i Sala." },
    { question: "Kan ni hjälpa med SEO för företag i Sala?", answer: "Absolut! Alla hemsidor vi bygger är SEO-optimerade från grunden. Vi erbjuder även dedikerade SEO-tjänster för företag i Sala." },
    { question: "Hur snabbt kan ni leverera en hemsida i Sala?", answer: "En enkel hemsida kan vara klar inom 1–2 veckor. Mer komplexa projekt tar 4–8 veckor." },
  ],
};

const HemsidorSala = () => <LocalLandingPage config={config} />;
export default HemsidorSala;
