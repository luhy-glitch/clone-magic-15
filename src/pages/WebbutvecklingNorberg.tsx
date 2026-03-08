import { Code2 } from "lucide-react";
import LocalLandingPage from "./LocalLandingPage";

const config = {
  city: "Norberg",
  slug: "webbutveckling-norberg",
  serviceKeyword: "Webbutveckling",
  metaTitle: "Webbutveckling Norberg - Hemsidor & SEO | LRH Konsult",
  metaDescription: "Snabba hemsidor i Norberg som rankar på Google. 100/100 PageSpeed, lokal SEO och modern webbutveckling i Västmanland.",
  heroHeading: "Webbutveckling & SEO i Norberg",
  heroDescription: "Vi hjälper företag i Norberg att bygga moderna hemsidor som laddar blixtsnabbt och rankar högt på Google. 100/100 PageSpeed garanterat – din lokala webbpartner.",
  icon: Code2,
  benefits: [
    { title: "Lokalt i Norberg", description: "Vi arbetar nära företag i Norberg och förstår den lokala marknadens styrkor och möjligheter." },
    { title: "100/100 PageSpeed", description: "Toppresultat i Google PageSpeed Insights som ger dig en tydlig rankingfördel." },
    { title: "SEO-optimerat", description: "Lokal SEO med strukturerad data och teknisk optimering från start." },
    { title: "Skräddarsytt", description: "Unika lösningar anpassade efter din verksamhet – inga generiska mallar." },
  ],
  bodyTitle: "Digital tillväxt för företag i Norberg",
  bodyParagraphs: [
    "Norberg har en rik gruvhistoria och en aktiv företagaranda. Men i den digitala världen spelar det ingen roll hur bra dina produkter eller tjänster är om kunderna inte hittar dig online. En modern hemsida med 100/100 PageSpeed och lokal SEO-optimering ger ditt företag den synlighet det förtjänar.",
    "Vi bygger hemsidor med React och Next.js som levererar omedelbara laddningstider och en överlägsen användarupplevelse. Google belönar snabba, mobilanpassade hemsidor med högre positioner, vilket innebär fler organiska besökare och kunder för ditt företag i Norberg.",
    "Från hantverksföretag till tjänsteverksamheter – vi skapar digitala lösningar som hjälper företag i Norberg och norra Västmanland att växa och nå nya kunder i hela regionen.",
  ],
  bodyExtraSections: [
    {
      title: "Stärk din lokala synlighet i Norberg och norra Västmanland",
      paragraphs: [
        "Med rätt lokal SEO-strategi kan ditt företag i Norberg synas för sökningar i hela norra Västmanland. Vi implementerar JSON-LD LocalBusiness-schema, optimerar för lokala söktermer och bygger en digital auktoritet som ger dig ett försprång.",
        "Vi ser till att ditt företag hamnar högst i sökresultaten när potentiella kunder söker efter dina tjänster. Det handlar om att synas vid rätt tillfälle med rätt budskap.",
      ],
    },
  ],
  faq: [
    { question: "Vad kostar en hemsida i Norberg?", answer: "Paket från 5 000 kr. Vi skräddarsyr alltid lösningen efter dina behov och budget." },
    { question: "Hur lång tid tar en hemsida?", answer: "Normalt 2–4 veckor. Vi prioriterar kvalitet och prestanda." },
    { question: "Kan ni förbättra min befintliga hemsida?", answer: "Ja, vi erbjuder prestandaoptimering och SEO-förbättringar av befintliga hemsidor." },
    { question: "Arbetar ni med företag i hela Västmanland?", answer: "Ja, vi hjälper företag i hela Västmanland och Mälardalen." },
  ],
};

const WebbutvecklingNorberg = () => <LocalLandingPage config={config} />;
export default WebbutvecklingNorberg;
