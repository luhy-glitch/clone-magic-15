import { Code2 } from "lucide-react";
import LocalLandingPage from "./LocalLandingPage";

const config = {
  city: "Örebro",
  slug: "webbutveckling-orebro",
  serviceKeyword: "Webbutveckling",
  metaTitle: "Webbutveckling Örebro - Hemsidor & SEO | LRH Konsult",
  metaDescription: "Professionell webbutveckling i Örebro med 100/100 PageSpeed. Blixtsnabba hemsidor i React & Next.js, lokal SEO och konverteringsoptimering.",
  heroHeading: "Webbutveckling & SEO i Örebro",
  heroDescription: "Örebro är en av Sveriges snabbast växande städer med över 160 000 invånare. Vi hjälper företag i Örebro att bygga blixtsnabba hemsidor med 100/100 PageSpeed som dominerar sökresultaten och genererar fler kunder.",
  icon: Code2,
  benefits: [
    { title: "Regional expertis", description: "Vi täcker hela Mälardalen och Örebro-regionen med djup förståelse för den lokala marknadens dynamik och utmaningar." },
    { title: "100/100 PageSpeed", description: "Garanterat toppresultat i Google PageSpeed som ger dig en mätbar konkurrensfördel i Örebros dynamiska marknad." },
    { title: "Konverteringsfokus", description: "Hemsidor designade för att generera leads, bokningar och försäljning – inte bara för att se snygga ut." },
    { title: "React & Next.js", description: "Framtidssäker teknik med server-side rendering för maximal hastighet och oöverträffad SEO-kapacitet." },
  ],
  bodyTitle: "Moderna hemsidor som driver tillväxt för företag i Örebro",
  bodyParagraphs: [
    "Örebro har under de senaste åren cementerat sin position som en av Sveriges mest dynamiska städer. Med Örebro universitet som kunskapsmotor, en blomstrande handelsscen kring Drottninggatan och ett växande startup-ekosystem finns en unik energi som lockar både företag och kompetens. Men med tillväxten ökar också konkurrensen om digital synlighet – och bara de företag med den starkaste tekniska grunden står kvar på Googles förstasida.",
    "Vi bygger hemsidor med React och Next.js som levererar sub-sekundsladdningstider och perfekta Lighthouse-resultat. Medan majoriteten av företag i Örebro fortfarande förlitar sig på WordPress-installationer som knappt klarar 50 poäng i PageSpeed, når våra lösningar konsekvent 100 av 100. Google har gjort Core Web Vitals till en central rankingfaktor, och denna tekniska överlägsenhet ger våra kunder en omedelbar fördel.",
    "Oavsett om du driver en restaurang vid Svartån, en butik i Marieberg, ett hantverksföretag i Bista eller en konsultfirma vid Stortorget kan vi skapa en digital närvaro som speglar kvaliteten på ditt arbete och attraherar nya kunder dygnet runt, året runt.",
  ],
  bodyExtraSections: [
    {
      title: "Lokal SEO som dominerar sökresultaten i Örebro",
      paragraphs: [
        "Att synas på Google i Örebro kräver en genomtänkt lokal SEO-strategi som går bortom grunderna. Vi implementerar JSON-LD LocalBusiness-schema med detaljerad information om dina tjänster, öppettider och serviceområde. Optimerade metadata med Örebro-specifika söktermer säkerställer att din hemsida matchar exakt de frågor dina potentiella kunder ställer.",
        "Vi genomför konkurrensanalyser för din bransch i Örebro och identifierar söktermer med hög kommersiell intention som dina konkurrenter missar. Ofta hittar vi söktermer med god volym och låg konkurrens – det är dessa vi prioriterar för snabba resultat. Parallellt bygger vi auktoritet för mer konkurrenskraftiga termer som ger långsiktig avkastning.",
        "Google Business-profilen är en kritisk komponent i lokal SEO för Örebro. Vi optimerar din profil med rätt kategorier, engagerande beskrivningar, professionella bilder och en aktiv recensionsstrategi. I Örebros kartpaket kan en väloptimerad Google Business-profil vara skillnaden mellan att synas överst och att inte synas alls.",
      ],
    },
    {
      title: "Örebros handelsscen – digital konkurrens kräver digital excellens",
      paragraphs: [
        "Med Marieberg Galleria som Mellansveriges största köpcentrum och en livlig centrumhandel kring Drottninggatan är Örebro en utpräglad handelsstad. Men den digitala konkurrensen är minst lika intensiv som den fysiska. E-handelsaktörer, lokala butiker med onlinenärvaro och nationella kedjor konkurrerar alla om samma digitala utrymme.",
        "För lokala företag i Örebro är den stora fördelen att de kan erbjuda något som de stora kedjorna inte kan – personlig service och lokal närvaro. Men detta måste kommuniceras genom en hemsida som laddar snabbt, ser professionell ut och rankar högt. Vi hjälper dig att kombinera din lokala styrka med digital excellens.",
        "Vi designar hemsidor med tydliga konverteringsvägar: klickbara telefonnummer, strategiskt placerade kontaktformulär, Google Maps-integration och kundrecensioner som bygger förtroende. Varje element är testat och optimerat för att maximera antalet kundkontakter.",
      ],
    },
    {
      title: "Från Örebro till hela Mälardalen – expandera din digitala räckvidd",
      paragraphs: [
        "Örebros strategiska läge vid E18/E20-korridoren gör det till ett naturligt nav för företag som vill nå kunder i hela Mellansverige. Med digital marknadsföring finns inga geografiska begränsningar – men det kräver en hemsida och SEO-strategi som är byggd för regional räckvidd.",
        "Vi skapar dedikerade landningssidor för de geografiska områden du vill dominera och bygger en intern länkstruktur som fördelar auktoritet effektivt. JSON-LD serviceArea inkluderar Örebro län, Västmanland och de specifika kommuner du vill nå. Denna strategi bygger topisk och geografisk auktoritet som stärks exponentiellt över tid.",
        "Vår expertis sträcker sig över hela Mälardalsregionen. Vi hjälper företag i Örebro att nå kunder i Kumla, Hallsberg, Lindesberg och bortom – med samma tekniska kvalitet och personliga service som vi levererar till alla våra kunder i regionen.",
      ],
    },
  ],
  caseStudy: {
    title: "Projektinsikt: Tandläkarklinik i Örebro halverade sin annonskostnad",
    problem: "En tandläkarklinik i centrala Örebro med tre behandlare betalade över 30 000 kr/månad i Google Ads för att synas för söktermer som 'tandläkare Örebro' och 'akut tandvård Örebro'. Deras WordPress-hemsida laddade på 4,2 sekunder och rankade inte organiskt för något relevant sökord.",
    solution: "Vi byggde en ny React-hemsida med dedikerade behandlingssidor (tandblekning, tandimplantat, akuttandvård), JSON-LD Dentist-schema med prislista och öppettider, och en bokningslösning kopplad till deras journalsystem. Varje behandlingssida optimerades för specifika söktermer med hög konverteringsintention.",
    result: "Hemsidan nådde 100/100 i PageSpeed vid lansering. Inom fyra månader rankade kliniken topp 3 för 'tandläkare Örebro' och topp 1 för 'akut tandläkare Örebro'. Google Ads-budgeten halverades till 15 000 kr/månad, och det totala antalet nya patientbokningar ökade ändå med 35 procent tack vare den organiska trafiken.",
  },
  faq: [
    { question: "Vad kostar en hemsida i Örebro?", answer: "Våra paket börjar från 5 000 kr för en professionell hemsida med SEO. Premiumlösningar med bokningssystem, e-handel eller headless CMS prissätts individuellt. Vi erbjuder alltid en kostnadsfri offert anpassad för ditt företag i Örebro." },
    { question: "Varför välja LRH Konsult för webbutveckling i Örebro?", answer: "Vi levererar hemsidor med garanterat 100/100 PageSpeed, lokal SEO-expertis och personlig service till konkurrenskraftiga priser. Vår regionala kunskap i Mälardalen ger oss en unik fördel i att förstå Örebros marknad." },
    { question: "Hur snabbt kan min hemsida vara klar?", answer: "En standardhemsida tar 2–4 veckor. Komplexa projekt med e-handel eller bokningssystem kan ta 4–8 veckor. Vi kommunicerar alltid en tydlig tidplan och håller dig uppdaterad genom hela processen." },
    { question: "Erbjuder ni SEO som separat tjänst i Örebro?", answer: "Ja, vi erbjuder både teknisk SEO och lokal sökmotoroptimering som fristående tjänster. Vi kan optimera din befintliga hemsida eller kombinera SEO med en nyutveckling för maximalt resultat." },
    { question: "Kan ni hjälpa med Google Ads parallellt med SEO?", answer: "Ja, vi kan hantera Google Ads-kampanjer som komplement till SEO. Målet är dock att gradvis minska beroendet av betald annonsering i takt med att den organiska synligheten ökar – så att din marknadsföringsbudget ger bättre ROI." },
    { question: "Hur hanterar ni den intensiva konkurrensen i Örebro?", answer: "Genom teknisk överlägsenhet och smart sökordsval. Vi identifierar söktermer med hög konvertering men lägre konkurrens, bygger auktoritet systematiskt och levererar en teknisk grund som majoriteten av Örebros hemsidor inte kan matcha." },
    { question: "Erbjuder ni löpande underhåll och support?", answer: "Ja, vi erbjuder flexibla supportavtal med prestandaövervakning, säkerhetsuppdateringar, innehållsändringar och kontinuerlig SEO-optimering. Vi vill vara din långsiktiga digitala partner i Örebro." },
  ],
};

const WebbutvecklingOrebro = () => <LocalLandingPage config={config} />;
export default WebbutvecklingOrebro;
