import { Code2 } from "lucide-react";
import LocalLandingPage from "./LocalLandingPage";

const config = {
  city: "Skinnskatteberg",
  slug: "webbutveckling-skinnskatteberg",
  serviceKeyword: "Webbutveckling",
  metaTitle: "Webbutveckling Skinnskatteberg - Hemsidor & SEO | LRH Konsult",
  metaDescription: "Moderna hemsidor i Skinnskatteberg som rankar på Google. 100/100 PageSpeed, lokal SEO och professionell webbutveckling i Västmanland.",
  heroHeading: "Webbutveckling & SEO i Skinnskatteberg",
  heroDescription: "Företag i Skinnskatteberg förtjänar moderna, blixtsnabba hemsidor. Vi bygger webbplatser med 100/100 PageSpeed och lokal SEO som ger dig fler kunder.",
  icon: Code2,
  benefits: [
    { title: "Lokalt fokus", description: "Vi förstår företagsklimatet i Skinnskatteberg och västra Västmanland." },
    { title: "100/100 PageSpeed", description: "Garanterat toppresultat i Google PageSpeed – varje gång." },
    { title: "Lokal SEO", description: "Strukturerad data och lokal optimering som gör att kunderna hittar dig." },
    { title: "Modern teknik", description: "React och Next.js för hemsidor som är snabba, säkra och skalbara." },
  ],
  bodyTitle: "Professionella hemsidor för företag i Skinnskatteberg",
  bodyParagraphs: [
    "Skinnskatteberg ligger i västra Västmanland och har en aktiv företagarkultur. Trots kommunens storlek finns det en enorm potential för företag som investerar i en modern digital närvaro. En hemsida som laddar omedelbart och rankar på Google kan vara skillnaden mellan att växa eller stagnera.",
    "Vi bygger hemsidor med samma tekniker som världens ledande tech-bolag använder. React och Next.js möjliggör server-renderade sidor som laddar på under en sekund, vilket ger dina besökare en fantastisk upplevelse och Google en anledning att ranka dig högt.",
    "Oavsett om du driver ett jord- och skogsbruksföretag, en verkstad eller en servicefirma i Skinnskatteberg kan vi skapa en hemsida som berättar din historia och attraherar kunder från hela regionen.",
  ],
  bodyExtraSections: [
    {
      title: "Nå kunder i hela Västmanland från Skinnskatteberg",
      paragraphs: [
        "Med en genomtänkt lokal SEO-strategi kan ditt företag i Skinnskatteberg synas för sökningar i hela Västmanland. Vi optimerar din hemsida för lokala söktermer, implementerar strukturerad data och bygger en digital närvaro som överträffar dina konkurrenter.",
        "Vi ser oss som en långsiktig partner för ditt företags digitala tillväxt. Från den första behovsanalysen till lansering och löpande support – vi finns här för att hjälpa dig lyckas online.",
      ],
    },
  ],
  faq: [
    { question: "Vad kostar en hemsida i Skinnskatteberg?", answer: "Våra paket börjar från 5 000 kr. Kontakta oss för en kostnadsfri offert." },
    { question: "Kan ni hjälpa företag i glesbygd?", answer: "Absolut! Vi arbetar med företag i hela Västmanland, oavsett storlek eller plats. Möten kan ske digitalt." },
    { question: "Hur lång tid tar projektet?", answer: "En standardhemsida tar 2–4 veckor. Vi prioriterar alltid kvalitet." },
    { question: "Ingår support efter lansering?", answer: "Ja, vi erbjuder löpande support och underhåll för att hålla din hemsida i toppform." },
  ],
};

const WebbutvecklingSkinnskatteberg = () => <LocalLandingPage config={config} />;
export default WebbutvecklingSkinnskatteberg;
