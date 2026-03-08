import { Code2 } from "lucide-react";
import LocalLandingPage from "./LocalLandingPage";

const config = {
  city: "Örebro",
  slug: "webbutveckling-orebro",
  serviceKeyword: "Webbutveckling",
  metaTitle: "Webbutveckling Örebro - Hemsidor & SEO | LRH Konsult",
  metaDescription: "Professionell webbutveckling i Örebro med 100/100 PageSpeed. Blixtsnabba hemsidor i React & Next.js, lokal SEO och konverteringsoptimering.",
  heroHeading: "Webbutveckling & SEO i Örebro",
  heroDescription: "Örebro är en av Sveriges snabbast växande städer. Vi hjälper företag i Örebro att bygga blixtsnabba hemsidor med 100/100 PageSpeed som rankar högt på Google och ger fler kunder.",
  icon: Code2,
  benefits: [
    { title: "Regional expertis", description: "Vi täcker hela Mälardalen och Örebro-regionen med samma höga kvalitet och personliga service." },
    { title: "100/100 PageSpeed", description: "Garanterat toppresultat som ger dig en konkurrensfördel i Örebros dynamiska marknad." },
    { title: "Konverteringsfokus", description: "Hemsidor designade för att generera leads, bokningar och försäljning." },
    { title: "React & Next.js", description: "Framtidssäker teknik med server-side rendering för maximal hastighet och SEO." },
  ],
  bodyTitle: "Moderna hemsidor som driver tillväxt för företag i Örebro",
  bodyParagraphs: [
    "Örebro, med över 160 000 invånare, är en av Sveriges mest dynamiska städer med en stark mix av handel, industri och tjänsteföretag. Den digitala konkurrensen är intensiv, och företag som investerar i moderna, snabba hemsidor har en avgörande fördel. Vi hjälper företag i Örebro att ta den ledande positionen online.",
    "Vi bygger hemsidor med React och Next.js som levererar sub-sekundsladdningstider och perfekta Lighthouse-resultat. Google belönar teknisk excellence med högre rankingpositioner, och dina besökare belönar den med högre konverteringsgrad. Det är en win-win som direkt påverkar din bottom line.",
    "Oavsett om du driver en restaurang vid Svartån, en butik i City, ett hantverksföretag eller en konsultfirma kan vi skapa en digital närvaro som speglar kvaliteten på ditt arbete och attraherar nya kunder dygnet runt.",
  ],
  bodyExtraSections: [
    {
      title: "Lokal SEO som dominerar sökresultaten i Örebro",
      paragraphs: [
        "Att synas på Google i Örebro kräver en genomtänkt lokal SEO-strategi. Vi implementerar JSON-LD LocalBusiness-schema, optimerar för Örebro-specifika söktermer och bygger en digital auktoritet som positionerar ditt företag framför konkurrenterna.",
        "Vi arbetar med sökordsanalys, Google Business-optimering och innehållsstrategier som är specifikt anpassade för Örebromarknaden. Resultatet är ökad synlighet, fler organiska besökare och en stabil ström av nya kunder.",
      ],
    },
    {
      title: "Från Örebro till hela Mälardalen – expandera din räckvidd",
      paragraphs: [
        "Örebros strategiska läge gör det till ett perfekt utgångsläge för att nå kunder i hela Mälardalen. Med rätt digital strategi kan ditt företag attrahera kunder från Örebro län, Västmanland och hela regionen.",
        "Vi har djup expertis i hela Mälardalsregionen och hjälper företag att bygga en digital närvaro som sträcker sig långt bortom kommungränsen. Vår regionala kunskap ger dig en unik fördel.",
      ],
    },
  ],
  faq: [
    { question: "Vad kostar en hemsida i Örebro?", answer: "Våra paket börjar från 5 000 kr. Vi anpassar alltid lösningen efter ditt företags storlek och behov. Kontakta oss för en kostnadsfri offert." },
    { question: "Varför välja LRH Konsult för webbutveckling i Örebro?", answer: "Vi levererar hemsidor med garanterat 100/100 PageSpeed, lokal SEO och personlig service till konkurrenskraftiga priser." },
    { question: "Hur snabbt kan min hemsida vara klar?", answer: "En standardhemsida tar 2–4 veckor. Komplexa projekt med e-handel kan ta 4–8 veckor." },
    { question: "Erbjuder ni SEO som separat tjänst?", answer: "Ja, vi erbjuder både teknisk SEO och lokal sökmotoroptimering som fristående tjänster." },
  ],
};

const WebbutvecklingOrebro = () => <LocalLandingPage config={config} />;
export default WebbutvecklingOrebro;
