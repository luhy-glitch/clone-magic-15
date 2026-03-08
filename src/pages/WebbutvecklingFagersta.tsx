import { Code2 } from "lucide-react";
import LocalLandingPage from "./LocalLandingPage";

const config = {
  city: "Fagersta",
  slug: "webbutveckling-fagersta",
  serviceKeyword: "Webbutveckling",
  metaTitle: "Webbutveckling Fagersta | LRH Konsult",
  metaDescription: "Webbutveckling i Fagersta – moderna hemsidor med 100/100 prestanda och lokal SEO. Boka en kostnadsfri konsultation!",
  heroHeading: "Webbutveckling i Fagersta",
  heroDescription: "Fagersta har en stolt industritradition och en växande företagsscen. Vi hjälper lokala företag att bygga en digital närvaro som matchar ambitionen – med blixtsnabba hemsidor och resultatdriven SEO.",
  icon: Code2,
  benefits: [
    { title: "Lokal förståelse", description: "Vi känner Västmanland och förstår de specifika utmaningarna och möjligheterna för företag i Fagersta och norra Västmanland." },
    { title: "Teknisk spetskompetens", description: "React och Next.js ger dig en hemsida som är snabbare, säkrare och mer skalbar än traditionella WordPress-lösningar." },
    { title: "Datadriven SEO", description: "Vi analyserar sökbeteende i Fagersta för att optimera din hemsida för de sökord som faktiskt driver affärer." },
    { title: "Personlig service", description: "Ingen stor byrå med anonyma projektledare – du arbetar direkt med en dedikerad specialist som bryr sig om ditt resultat." },
  ],
  bodyTitle: "Digitala lösningar för företag i Fagersta",
  bodyParagraphs: [
    "Fagersta, med sitt starka industriarv och sin strategiska position i norra Västmanland, är en stad där företag har allt att vinna på en stark digital närvaro. I takt med att fler konsumenter söker efter produkter och tjänster online har det blivit avgörande att synas på rätt plats vid rätt tidpunkt. En professionell hemsida är grunden för den digitala synligheten.",
    "På LRH Konsult bygger vi hemsidor som är mer än bara digitala visitkort. Vi skapar kraftfulla marknadsföringsplattformar som arbetar för dig dygnet runt. Genom att använda den senaste tekniken inom webbutveckling – React, Next.js och TypeScript – levererar vi hemsidor som laddar blixtsnabbt, rankar högt på Google och konverterar besökare till betalande kunder.",
    "Den lokala marknaden i Fagersta har unika egenskaper som vi tar hänsyn till i vår utvecklingsprocess. Vi optimerar din hemsida för lokala söktermer och ser till att din Google Business Profile är synkroniserad med din webbplats. Det handlar om att bygga en sammanhängande digital identitet som stärker ditt varumärke i Fagersta och hela Västmanland.",
  ],
  bodyExtraSections: [
    {
      title: "Varför prestanda avgör din digitala framgång",
      paragraphs: [
        "Sidladdningstiden är en av de mest kritiska faktorerna för din hemsidas framgång. Google har bekräftat att Core Web Vitals – inklusive laddningstid (LCP), interaktivitet (INP) och visuell stabilitet (CLS) – är direkta rankningsfaktorer. En hemsida som laddar på under 1,5 sekunder har en markant fördel gentemot konkurrenter med långsammare sajter.",
        "Vi optimerar varje aspekt av din hemsida för maximal prestanda. Det inkluderar modern bildkomprimering (AVIF-format), effektiv koddelning, server-side rendering och minimering av JavaScript-exekvering. Resultatet är en hemsida som konsekvent når 100/100 i Google PageSpeed Insights.",
        "För ett företag i Fagersta innebär denna tekniska excellens att du inte bara rankar bättre på Google utan också ger dina besökare en överlägsen upplevelse. Snabbare sidor leder till lägre avhoppsfrekvens, högre engagemang och i slutändan fler affärer.",
      ],
    },
    {
      title: "En partner som förstår norra Västmanland",
      paragraphs: [
        "Vi är inte en anonym storbyrå i Stockholm – vi är en regional specialist som brinner för att hjälpa lokala företag att lyckas online. Vi förstår att varje krona i marknadsföringsbudgeten måste ge mätbar avkastning, och det är precis vad vi levererar med våra webbutvecklingslösningar.",
        "Vår process är enkel och transparent: vi lyssnar, analyserar, bygger och optimerar. Du är med i varje steg, och efter lanseringen är vi alltid tillgängliga för support och vidareutveckling. Många av våra kunder i Västmanland har samarbetat med oss i flera år och ser oss som en strategisk partner snarare än en engångsleverantör.",
      ],
    },
  ],
  faq: [
    { question: "Vilka typer av företag i Fagersta hjälper ni?", answer: "Vi arbetar med alla typer av företag – från hantverkare och butiker till industriföretag och konsulter. Vi anpassar vår lösning efter din bransch och dina mål." },
    { question: "Hur mycket kostar webbutveckling i Fagersta?", answer: "Våra paket startar från 5 000 kr för enklare hemsidor. Vi erbjuder alltid en kostnadsfri offert baserad på dina specifika behov och önskemål." },
    { question: "Kan ni förbättra min befintliga hemsida?", answer: "Ja, vi erbjuder prestandaoptimering och SEO-förbättringar av befintliga webbplatser. Vi börjar alltid med en gratis analys för att identifiera förbättringsområden." },
    { question: "Ingår hosting i era tjänster?", answer: "Vi hjälper dig med hosting-konfiguration och rekommenderar de bästa alternativen baserat på din hemsidas behov. Hosting ingår inte i grundpriset men vi ordnar allt åt dig." },
  ],
};

const WebbutvecklingFagersta = () => <LocalLandingPage config={config} />;
export default WebbutvecklingFagersta;
