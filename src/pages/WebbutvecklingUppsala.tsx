import { Code2 } from "lucide-react";
import LocalLandingPage from "./LocalLandingPage";

const config = {
  city: "Uppsala",
  slug: "webbutveckling-uppsala",
  serviceKeyword: "Webbutveckling",
  metaTitle: "Webbutveckling Uppsala - Hemsidor & SEO | LRH Konsult",
  metaDescription: "Professionell webbutveckling i Uppsala med 100/100 PageSpeed. Blixtsnabba hemsidor i React & Next.js, lokal SEO och konverteringsoptimering.",
  heroHeading: "Webbutveckling & SEO i Uppsala",
  heroDescription: "Uppsala är Sveriges fjärde största stad och en av landets mest konkurrensutsatta marknader. Vi hjälper företag i Uppsala att sticka ut med blixtsnabba hemsidor som rankar högst på Google och konverterar besökare till kunder.",
  icon: Code2,
  benefits: [
    { title: "Regionalt fokus", description: "Vi täcker hela Mälardalen, från Uppsala till Västerås, med samma höga kvalitet och personliga service." },
    { title: "100/100 PageSpeed", description: "Garanterat toppresultat som ger dig en tydlig konkurrensfördel i Uppsalas intensiva marknad." },
    { title: "Konverteringsdesign", description: "Hemsidor designade för att inte bara synas, utan faktiskt generera leads och kunder." },
    { title: "Framtidssäker teknik", description: "React och Next.js med server-side rendering för maximal hastighet och SEO-kraft." },
  ],
  bodyTitle: "Dominera Uppsalas digitala landskap med en hemsida i världsklass",
  bodyParagraphs: [
    "Uppsala är en stad med en unik mix av universitet, tech-bolag, restauranger och lokala tjänsteföretag. Konkurrensen om digital synlighet är hård, och bara de snabbaste och mest relevanta hemsidorna hamnar på Googles förstasida. Med över 230 000 invånare och ett starkt lokalt köpmönster är insatserna höga – men belöningen för de som investerar i rätt digital strategi är enorm.",
    "Vi bygger hemsidor med React och Next.js som levererar sub-sekundsladdningstider och 100/100 i alla Lighthouse-kategorier. Detta är inte bara teknisk jargong – det är den direkta anledningen till att våra kunders hemsidor rankar högre än deras konkurrenter i Uppsala. Google har gjort Core Web Vitals till en central rankingfaktor, och vi säkerställer att din hemsida överträffar varje gränsvärde.",
    "Oavsett om du driver en advokatbyrå vid Fyrisån, en restaurang i centrum eller ett tech-startup vid Science Park kan vi skapa en hemsida som fångar Uppsalas unika karaktär och konverterar digitala besökare till fysiska kunder.",
  ],
  bodyExtraSections: [
    {
      title: "Lokal SEO-strategi för Uppsalas konkurrensutsatta marknad",
      paragraphs: [
        "Att ranka på Google i Uppsala kräver mer än en snygg hemsida. Det kräver en genomtänkt lokal SEO-strategi med korrekt JSON-LD strukturerad data, optimerade metadata och en intern länkstruktur som fördelar auktoritet effektivt. Vi analyserar dina konkurrenter i Uppsala, identifierar sökord med hög kommersiell intention och bygger en strategi som positionerar dig som det självklara valet.",
        "Vi implementerar Google Business-optimering, lokala landningssidor och innehållsstrategier som bygger din digitala auktoritet i Uppsala över tid. SEO är en långsiktig investering – och vi är den partner som ser till att den ger avkastning.",
      ],
    },
    {
      title: "Från Uppsala till hela Mälardalen – regional räckvidd",
      paragraphs: [
        "Uppsala är navet i en region med över en miljon invånare. Med rätt digital strategi kan ditt företag nå kunder inte bara i Uppsala stad utan i hela Uppsala län och Mälardalen. Vi bygger hemsidor som fungerar som digitala magneter och attraherar organisk trafik från hela regionen.",
        "Vår expertis sträcker sig över hela Mälardalen – från Västerås och Enköping till Sala och Köping. Denna regionala kunskap gör oss till den ideala partnern för företag i Uppsala som vill expandera sin digitala räckvidd.",
      ],
    },
  ],
  faq: [
    { question: "Vad kostar en hemsida i Uppsala?", answer: "Våra paket börjar från 5 000 kr för enklare hemsidor till premiumlösningar från 25 000 kr. Vi anpassar alltid efter dina specifika behov." },
    { question: "Hur snabbt kan min hemsida vara klar?", answer: "En standardhemsida tar 2–4 veckor. Mer avancerade projekt med e-handel kan ta 4–8 veckor." },
    { question: "Varför ska jag välja LRH Konsult framför en byrå i Uppsala?", answer: "Vi erbjuder samma tekniska kvalitet som storstadsbyråer men med personlig service och konkurrenskraftiga priser. Våra hemsidor når konsekvent 100/100 PageSpeed." },
    { question: "Erbjuder ni SEO-optimering separat?", answer: "Ja, vi erbjuder både teknisk SEO och lokal sökmotoroptimering som separata tjänster. Kontakta oss för mer information." },
  ],
};

const WebbutvecklingUppsala = () => <LocalLandingPage config={config} />;
export default WebbutvecklingUppsala;
