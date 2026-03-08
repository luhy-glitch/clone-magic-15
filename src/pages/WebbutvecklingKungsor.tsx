import { Code2 } from "lucide-react";
import LocalLandingPage from "./LocalLandingPage";

const config = {
  city: "Kungsör",
  slug: "webbutveckling-kungsor",
  serviceKeyword: "Webbutveckling",
  metaTitle: "Webbutveckling Kungsör - Hemsidor & SEO | LRH Konsult",
  metaDescription: "Professionella hemsidor i Kungsör som rankar på Google. 100/100 PageSpeed, lokal SEO och modern webbutveckling i Västmanland.",
  heroHeading: "Webbutveckling & SEO i Kungsör",
  heroDescription: "Kungsör förtjänar moderna, snabba hemsidor. Vi hjälper lokala företag att bygga digital auktoritet med blixtsnabba webbplatser som rankar högt på Google och genererar fler kunder.",
  icon: Code2,
  benefits: [
    { title: "Lokalt engagemang", description: "Vi arbetar nära företag i Kungsör och förstår den lokala marknadens unika förutsättningar." },
    { title: "100/100 PageSpeed", description: "Toppresultat i Google PageSpeed Insights – varje gång." },
    { title: "Mobil-först-design", description: "Google indexerar mobilversionen först. Vi säkerställer att den är felfri och blixtsnabb." },
    { title: "Framtidssäker teknik", description: "React och Next.js ger en skalbar plattform som växer med ditt företag." },
  ],
  bodyTitle: "Bygg en hemsida som ger ditt företag i Kungsör fler kunder",
  bodyParagraphs: [
    "I Kungsör, beläget strategiskt vid Mälaren, har lokala företag en enorm möjlighet att nå kunder i hela Västmanland och Södermanland. En modern hemsida med 100/100 PageSpeed och lokal SEO-optimering ger dig den synlighet du behöver för att växa digitalt.",
    "Vi bygger hemsidor med React och Next.js som levererar fullständigt renderat HTML till webbläsaren innan en enda rad JavaScript har exekverats. Det innebär omedelbara laddningstider och en överlägsen användarupplevelse som Google belönar med högre rankingpositioner.",
    "Oavsett om du driver ett hantverksföretag, en butik eller en tjänsteverksamhet i Kungsör skapar vi en digital närvaro som speglar kvaliteten på det du gör och attraherar nya kunder dygnet runt.",
  ],
  bodyExtraSections: [
    {
      title: "Lokal SEO-strategi för företag i Kungsör",
      paragraphs: [
        "Med rätt lokal SEO-strategi kan ditt företag i Kungsör dominera sökresultaten i hela närområdet. Vi implementerar JSON-LD LocalBusiness-schema, optimerar metadata och bygger en intern länkstruktur som fördelar auktoritet effektivt.",
        "Resultatet är att fler kunder i Kungsör och omnejd hittar ditt företag när de söker efter dina tjänster på Google. Det handlar om att vara synlig vid rätt tillfälle.",
      ],
    },
  ],
  faq: [
    { question: "Vad kostar en hemsida i Kungsör?", answer: "Våra paket börjar från 5 000 kr. Kontakta oss för en kostnadsfri offert anpassad efter dina behov." },
    { question: "Arbetar ni med företag utanför Kungsör?", answer: "Ja, vi hjälper företag i hela Västmanland och Mälardalen." },
    { question: "Hur snabbt kan hemsidan vara klar?", answer: "En standardhemsida tar 2–4 veckor beroende på omfattning." },
    { question: "Ingår SEO-optimering?", answer: "Ja, teknisk SEO och lokal optimering ingår i alla våra paket." },
  ],
};

const WebbutvecklingKungsor = () => <LocalLandingPage config={config} />;
export default WebbutvecklingKungsor;
