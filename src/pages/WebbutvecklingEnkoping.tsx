import { Code2 } from "lucide-react";
import LocalLandingPage from "./LocalLandingPage";

const config = {
  city: "Enköping",
  slug: "webbutveckling-enkoping",
  serviceKeyword: "Webbutveckling",
  metaTitle: "Webbutveckling Enköping | Snabba Hemsidor",
  metaDescription: "Professionell webbutveckling i Enköping. React & Next.js-sajter med 100/100 PageSpeed. Boka fri konsultation idag!",
  heroHeading: "Webbutveckling i Enköping",
  heroDescription: "Vi hjälper företag i Enköping att växa digitalt med moderna, blixtsnabba hemsidor byggda i React och Next.js. Lokal expertis kombinerat med teknisk spetskompetens ger din verksamhet en konkurrensfördel online.",
  icon: Code2,
  benefits: [
    { title: "Nära Enköping", description: "Vi arbetar tätt med företag i Enköping och erbjuder personlig service och lokalkännedom för att förstå din marknad på djupet." },
    { title: "100/100 PageSpeed", description: "Varje hemsida vi bygger är optimerad för maximal hastighet och prestanda, vilket ger dig bättre ranking på Google och fler kunder." },
    { title: "SEO inbyggt från start", description: "Vi integrerar lokal SEO i varje aspekt av din hemsida så att du syns för rätt målgrupp i Enköping och Mälardalen." },
    { title: "Framtidssäker teknik", description: "Med React och TypeScript bygger vi skalbara lösningar som växer med ditt företag utan att behöva byggas om." },
  ],
  bodyTitle: "Moderna hemsidor för företag i Enköping",
  bodyParagraphs: [
    "Enköping är en stad med en stark och diversifierad företagskultur, från små hantverkare och lokala butiker till växande tjänsteföretag. I en tid där den digitala närvaron ofta är det första intrycket en potentiell kund får av din verksamhet, är det avgörande att din hemsida inte bara ser professionell ut utan också fungerar felfritt. På LRH Konsult specialiserar vi oss på att bygga hemsidor som gör exakt det – de laddar blixtsnabbt, ser fantastiska ut på alla enheter och rankar högt i Google.",
    "Vi använder moderna ramverk som React och Next.js för att skapa webbplatser som överträffar traditionella lösningar i både hastighet och funktionalitet. Till skillnad från mallbaserade plattformar som ofta begränsar dina möjligheter bygger vi din hemsida från grunden, anpassad efter just ditt företags behov och mål. Det innebär att du får en unik digital identitet som speglar din verksamhet i Enköping.",
    "Den lokala marknaden i Enköping erbjuder unika möjligheter för företag som investerar i sin digitala synlighet. Genom att optimera din hemsida för lokala söktermer som 'hantverkare Enköping' eller 'restaurang Enköping' kan vi hjälpa dig att fånga upp kunder som aktivt söker efter de tjänster du erbjuder. Det handlar om att vara synlig vid rätt tillfälle, och det börjar med en tekniskt överlägsen hemsida.",
  ],
  bodyExtraSections: [
    {
      title: "Teknisk excellens som driver affärsresultat",
      paragraphs: [
        "Vår utvecklingsprocess börjar alltid med en noggrann analys av dina affärsmål och din målgrupp i Enköping. Vi kartlägger konkurrenslandskapet och identifierar de sökord och sökfraser som är mest relevanta för din bransch. Denna datadriven approach säkerställer att din hemsida inte bara ser bra ut utan faktiskt genererar leads och kunder.",
        "Vi implementerar avancerade tekniker som server-side rendering, automatisk koddelning och optimerade bildformat (AVIF/WebP) för att uppnå den bästa möjliga prestanda. Resultatet är en hemsida som laddar på under en sekund, även på mobila enheter – något som direkt påverkar din konverteringsgrad och din ranking på Google.",
        "Som din lokala partner i regionen förstår vi utmaningarna som företag i Enköping ställs inför. Vi vet att en investering i en ny hemsida måste ge mätbar avkastning, och det är precis vad vi levererar. Varje projekt vi tar oss an mäts mot tydliga KPI:er som laddningstid, organisk trafik och konverteringsgrad.",
      ],
    },
    {
      title: "Från idé till lansering – och långt därefter",
      paragraphs: [
        "Vår process är transparent och effektiv. Vi arbetar i tydliga faser – behovsanalys, design, utveckling och lansering – där du som kund är involverad i varje steg. Du får löpande uppdateringar och möjlighet att ge feedback innan vi går vidare till nästa fas.",
        "Efter lanseringen erbjuder vi löpande support och underhåll för att säkerställa att din hemsida alltid presterar optimalt. Vi övervakar din sajts hastighet, säkerhet och SEO-resultat kontinuerligt och gör proaktiva förbättringar för att hålla dig steget före konkurrenterna i Enköping.",
        "Många av våra kunder ser oss inte bara som en leverantör utan som en strategisk partner i sin digitala tillväxt. Vi brinner för att hjälpa lokala företag i Västmanland att maximera sin potential online, och vi mäter vår framgång utifrån dina resultat.",
      ],
    },
  ],
  faq: [
    { question: "Vad kostar en hemsida för företag i Enköping?", answer: "Vi erbjuder paket från 5 000 kr för enklare hemsidor till mer avancerade lösningar från 15 000 kr. Kontakta oss för en kostnadsfri offert anpassad efter dina specifika behov." },
    { question: "Hur lång tid tar det att bygga en hemsida?", answer: "En standardhemsida tar vanligtvis 2–4 veckor från start till lansering. Mer komplexa projekt med skräddarsydda funktioner kan ta 6–8 veckor." },
    { question: "Erbjuder ni SEO-tjänster i Enköping?", answer: "Ja, alla våra hemsidor byggs med lokal SEO integrerad. Vi erbjuder även dedikerade SEO-paket för företag som vill öka sin organiska synlighet i Enköping och Mälardalen." },
    { question: "Kan ni hjälpa oss med en befintlig hemsida?", answer: "Absolut. Vi erbjuder prestandaoptimering, redesign och SEO-förbättringar av befintliga hemsidor, oavsett vilken teknik de är byggda i." },
  ],
};

const WebbutvecklingEnkoping = () => <LocalLandingPage config={config} />;
export default WebbutvecklingEnkoping;
