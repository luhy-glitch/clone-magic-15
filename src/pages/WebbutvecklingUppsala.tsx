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
  heroFacts: [
    "100/100 PageSpeed i Sveriges fjärde största stad",
    "Restauranggrupp fyrdubblade lunchbokningarna",
    "Headless CMS-lösningar för tech-startups vid Science Park",
    "Regional räckvidd från Uppsala till hela Mälardalen",
  ],
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
        "Att ranka på Google i Uppsala kräver mer än en snygg hemsida – det kräver en sofistikerad lokal SEO-strategi. Med hundratals företag som konkurrerar om samma söktermer är den tekniska grunden avgörande. Vi implementerar korrekt JSON-LD strukturerad data med LocalBusiness-schema, optimerade metadata och en intern länkstruktur som fördelar auktoritet effektivt mellan dina viktigaste sidor.",
        "Vi analyserar dina konkurrenter i Uppsala på djupet, identifierar sökord med hög kommersiell intention och bygger en innehållsstrategi som positionerar dig som det självklara valet. Uppsalas studentpopulation skapar dessutom unika sökmönster – en restaurang nära Carolina Rediviva har andra optimeringsmöjligheter än en bilverkstad i Boländerna.",
        "Google Business-optimering är en central del av vår strategi i Uppsala. Vi säkerställer att din profil har rätt kategorier, professionella bilder, uppdaterade öppettider och en strategi för att bygga autentiska kundrecensioner. I en stad som Uppsala, där kartpaketet ofta dominerar ovanför de organiska resultaten, kan en väloptimerad Google Business-profil vara skillnaden mellan synlighet och osynlighet.",
      ],
    },
    {
      title: "Från Uppsala till hela Mälardalen – regional räckvidd med lokal precision",
      paragraphs: [
        "Uppsala är navet i en region med över en miljon invånare. Med rätt digital strategi kan ditt företag nå kunder inte bara i Uppsala stad utan i hela Uppsala län, Knivsta, Enköping och ner mot Mälardalen. Vi bygger hemsidor som fungerar som digitala magneter och attraherar organisk trafik från hela regionen.",
        "Vår unika position med expertis i hela Mälardalen – från Västerås och Enköping till Sala och Köping – ger oss en insikt i regionala sökmönster som få andra byråer kan matcha. Vi förstår att en konsult i Uppsala som vill nå kunder i Stockholm har andra behov än en hantverkare som opererar inom 5 mils radie.",
        "Vi skapar dedikerade landningssidor för de geografiska områden du vill dominera, var och en optimerad med unik content och lokalt relevant strukturerad data. Denna strategi bygger topisk och geografisk auktoritet som stärks över tid.",
      ],
    },
    {
      title: "Uppsalas tech-scen förtjänar tech-först-webbutveckling",
      paragraphs: [
        "Uppsala är hem för ett av Sveriges mest dynamiska tech-ekosystem, med företag som vuxit ur universitetet och Science Park. Ändå har många lokala tjänsteföretag och restauranger hemsidor byggda med WordPress-mallar som inte ens klarar grundläggande prestandatester. Kontrasten är slående – och det skapar en möjlighet.",
        "Vi erbjuder tech-först-webbutveckling som matchar Uppsalas ambitionsnivå. Server-side rendering med Next.js, TypeScript för typesäker kod, automatisk koddelning och inkrementell statisk regenerering. Bilder i AVIF-format, fonter med preload och font-display swap, och CSS som inlinas i HTML för omedelbar rendering. Resultatet är hemsidor som laddar snabbare än blinkat.",
        "För tech-bolag och startups i Uppsala erbjuder vi dessutom headless CMS-lösningar som separerar innehåll från presentation. Detta ger dina content-creators friheten att publicera utan att behöva bry sig om tekniken, samtidigt som frontend-prestandan förblir perfekt.",
      ],
    },
  ],
  caseStudy: {
    title: "Projektinsikt: Restauranggrupp i Uppsala fyrdubblade lunchbokningarna",
    problem: "En restauranggrupp med tre lokaler i centrala Uppsala hade separata WordPress-sajter som laddade långsamt och rankade på sida 2-3 för nyckeltermer som 'restaurang Uppsala centrum' och 'lunch Uppsala'. De betalade 25 000 kr/månad i Google Ads för att kompensera den svaga organiska synligheten.",
    solution: "Vi konsoliderade alla tre restauranger till en snabb React-hemsida med dedikerade sidor per lokal, JSON-LD Restaurant-schema med menyer och öppettider, och en lunchmenysida som uppdaterades dagligen. Intern länkning mellan restaurangerna byggde samlad auktoritet.",
    result: "Inom tre månader rankade alla tre restauranger topp 3 för sina respektive lunchrelaterade söktermer. Lunchbokningarna via hemsidan fyrdubblade och Google Ads-budgeten kunde reduceras med 80 procent. Den organiska trafiken ökade med 340 procent jämfört med de tidigare WordPress-sajterna.",
  },
  faq: [
    { question: "Vad kostar en hemsida i Uppsala?", answer: "Våra paket börjar från 5 000 kr för enklare hemsidor till premiumlösningar från 25 000 kr med avancerad funktionalitet. Vi anpassar alltid efter dina specifika behov och din branschs krav i Uppsala." },
    { question: "Hur snabbt kan min hemsida vara klar?", answer: "En standardhemsida tar 2–4 veckor. Mer avancerade projekt med e-handel, bokningssystem eller headless CMS kan ta 4–8 veckor. Vi kommunicerar alltid en tydlig tidplan från start." },
    { question: "Varför ska jag välja LRH Konsult framför en byrå i Uppsala?", answer: "Vi erbjuder samma tekniska kvalitet som storstadsbyråer men med personlig service och konkurrenskraftiga priser. Våra hemsidor når konsekvent 100/100 PageSpeed – något som de flesta byråer i Uppsala inte kan garantera." },
    { question: "Erbjuder ni SEO-optimering som separat tjänst?", answer: "Ja, vi erbjuder både teknisk SEO och lokal sökmotoroptimering som fristående tjänster. Vi kan optimera din befintliga hemsida eller kombinera SEO med en nyutveckling." },
    { question: "Kan ni hjälpa restauranger i Uppsala med digital synlighet?", answer: "Absolut! Vi har specifik erfarenhet av restaurang-SEO i Uppsala med JSON-LD Restaurant-schema, menyoptimering och Google Business-strategier. Vi vet vilka söktermer som konverterar i restaurangbranschen." },
    { question: "Hur hanterar ni den hårda konkurrensen i Uppsala?", answer: "Genom teknisk överlägsenhet. Medan konkurrenternas sajter kämpar med 40-60 i PageSpeed levererar vi 100/100. Kombinerat med strategisk lokal SEO ger detta en omedelbar konkurrensfördel även i Uppsalas tuffa marknad." },
    { question: "Erbjuder ni löpande underhåll och support?", answer: "Ja, vi erbjuder supportavtal som inkluderar prestandaövervakning, säkerhetsuppdateringar, innehållsändringar och löpande SEO-optimering. Vi är din långsiktiga digitala partner i Uppsala." },
  ],
};

const WebbutvecklingUppsala = () => <LocalLandingPage config={config} />;
export default WebbutvecklingUppsala;
