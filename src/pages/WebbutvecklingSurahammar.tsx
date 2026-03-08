import { Code2 } from "lucide-react";
import LocalLandingPage from "./LocalLandingPage";

const config = {
  city: "Surahammar",
  slug: "webbutveckling-surahammar",
  serviceKeyword: "Webbutveckling",
  metaTitle: "Webbutveckling Surahammar - Hemsidor & SEO | LRH Konsult",
  metaDescription: "Snabba hemsidor i Surahammar som rankar på Google. 100/100 PageSpeed, lokal SEO och modern webbutveckling för företag i Västmanland.",
  heroHeading: "Webbutveckling & SEO i Surahammar",
  heroDescription: "Vi hjälper företag i Surahammar att synas online med blixtsnabba hemsidor och lokal SEO. 100/100 PageSpeed garanterat – din digitala partner i Västmanland.",
  icon: Code2,
  benefits: [
    { title: "Lokalt i Surahammar", description: "Vi förstår Surahammars företagsklimat och skapar lösningar som ger dig ett försprång gentemot konkurrenterna." },
    { title: "100/100 PageSpeed", description: "Varje hemsida vi bygger når toppresultat i Google PageSpeed Insights." },
    { title: "SEO inbyggt", description: "Lokal SEO, strukturerad data och teknisk optimering från dag ett." },
    { title: "Personlig service", description: "Vi prioriterar långsiktiga relationer och en personlig kontakt genom hela projektet." },
  ],
  bodyTitle: "Digital tillväxt för företag i Surahammar",
  bodyParagraphs: [
    "Surahammar har en stark industriell tradition och en växande tjänstesektor. Oavsett bransch är en modern, snabb hemsida avgörande för att nå nya kunder i Västmanland. Vi bygger hemsidor som inte bara ser bra ut utan också presterar i världsklass – med garanterat 100/100 i Google PageSpeed.",
    "Med React och Next.js skapar vi webbplatser som laddar omedelbart och ger dina besökare den bästa möjliga upplevelsen. Google belönar snabba, mobilanpassade hemsidor med högre positioner i sökresultaten, vilket innebär fler organiska besökare och kunder för ditt företag.",
    "Vi erbjuder en komplett digital lösning – från design och utveckling till SEO och löpande support. Vårt mål är att ditt företag i Surahammar ska synas högst på Google och konvertera fler besökare till betalande kunder.",
  ],
  bodyExtraSections: [
    {
      title: "Varför företag i Surahammar behöver modern webbutveckling",
      paragraphs: [
        "Många företag i mindre kommuner som Surahammar har fortfarande hemsidor som byggdes för flera år sedan och inte uppfyller dagens krav. Långsamma laddningstider, dålig mobilanpassning och avsaknad av SEO gör att potentiella kunder aldrig hittar till din sida.",
        "Genom att investera i en modern hemsida med teknik i framkant positionerar du ditt företag för långsiktig digital tillväxt. Vi hjälper dig att ta steget från en osynlig närvaro till att dominera lokala sökresultat i Surahammar och Västmanland.",
      ],
    },
  ],
  faq: [
    { question: "Vad kostar en hemsida i Surahammar?", answer: "Paket från 5 000 kr. Vi anpassar alltid lösningen efter dina behov och budget." },
    { question: "Hur lång tid tar det att bygga en hemsida?", answer: "Normalt 2–4 veckor beroende på projektets omfattning." },
    { question: "Kan ni hjälpa med befintlig hemsida?", answer: "Ja, vi kan optimera och modernisera din befintliga hemsida för bättre prestanda och SEO." },
    { question: "Erbjuder ni löpande support?", answer: "Ja, vi erbjuder underhålls- och supportavtal för att hålla din hemsida säker och snabb." },
  ],
};

const WebbutvecklingSurahammar = () => <LocalLandingPage config={config} />;
export default WebbutvecklingSurahammar;
