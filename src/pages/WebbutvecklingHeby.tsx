import { Code2 } from "lucide-react";
import LocalLandingPage from "./LocalLandingPage";

const config = {
  city: "Heby",
  slug: "webbutveckling-heby",
  serviceKeyword: "Webbutveckling",
  metaTitle: "Webbutveckling Heby - Hemsidor & SEO | LRH Konsult",
  metaDescription: "Professionella hemsidor i Heby som rankar på Google. 100/100 PageSpeed, lokal SEO och modern webbutveckling i Uppsala län.",
  heroHeading: "Webbutveckling & SEO i Heby",
  heroDescription: "Vi hjälper företag i Heby att synas online med blixtsnabba hemsidor och lokal SEO. Byggda i React med 100/100 PageSpeed – din digitala partner i Mälardalen.",
  icon: Code2,
  benefits: [
    { title: "Lokalt fokus", description: "Vi förstår Hebys unika position mellan Uppsala och Västmanland och skapar hemsidor som når kunder i hela regionen." },
    { title: "100/100 PageSpeed", description: "Garanterat toppresultat i Google PageSpeed Insights för maximal synlighet." },
    { title: "SEO från start", description: "Teknisk SEO, lokal optimering och strukturerad data integrerat i varje projekt." },
    { title: "Modern teknik", description: "React och Next.js för snabba, skalbara hemsidor som växer med ditt företag." },
  ],
  bodyTitle: "Hemsidor som ger företag i Heby fler kunder",
  bodyParagraphs: [
    "Heby kommun, beläget i gränslandet mellan Uppsala och Västmanland, har en aktiv företagarscen. Med rätt digital närvaro kan ditt företag nå kunder i hela Mälardalen. En modern hemsida med topprestanda och lokal SEO är nyckeln till att sticka ut i konkurrensen.",
    "Vi bygger hemsidor med React och Next.js som laddar omedelbart och rankar högt på Google. Genom att kombinera teknisk excellence med lokal expertis skapar vi hemsidor som inte bara ser professionella ut utan också konverterar besökare till kunder.",
    "Oavsett om du är jordbrukare, hantverkare, konsult eller butiksägare i Heby kan vi hjälpa dig att etablera en stark digital närvaro som genererar leads och bygger förtroende.",
  ],
  bodyExtraSections: [
    {
      title: "Regional synlighet för företag i Heby",
      paragraphs: [
        "Hebys strategiska läge ger ditt företag möjlighet att nå kunder i både Uppsala län och Västmanland. Med rätt lokal SEO-strategi kan vi positionera ditt företag för sökningar i hela regionen, inte bara i Heby kommun.",
        "Vi implementerar strukturerad data som hjälper Google förstå din geografiska täckning, optimerar för lokala sökord och bygger en digital auktoritet som gör ditt företag till det självklara valet i ditt område.",
      ],
    },
  ],
  faq: [
    { question: "Vad kostar en hemsida i Heby?", answer: "Våra paket börjar från 5 000 kr. Vi anpassar alltid lösningen efter ditt företags behov." },
    { question: "Arbetar ni med företag i hela regionen?", answer: "Ja, vi hjälper företag i Heby, Uppsala län, Västmanland och hela Mälardalen." },
    { question: "Hur snabbt kan min hemsida vara klar?", answer: "En standardhemsida tar 2–4 veckor beroende på projektets omfattning." },
    { question: "Erbjuder ni support efter lansering?", answer: "Ja, vi erbjuder löpande support och underhåll för att hålla din hemsida i toppform." },
  ],
};

const WebbutvecklingHeby = () => <LocalLandingPage config={config} />;
export default WebbutvecklingHeby;
