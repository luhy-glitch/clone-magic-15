import { Code2 } from "lucide-react";
import LocalLandingPage from "./LocalLandingPage";

const config = {
  city: "Arboga",
  slug: "webbutveckling-arboga",
  serviceKeyword: "Webbutveckling",
  metaTitle: "Webbutveckling Arboga | Moderna Hemsidor",
  metaDescription: "Webbutveckling i Arboga med fokus på prestanda och lokal SEO. React-sajter med 100/100 PageSpeed. Boka fri analys!",
  heroHeading: "Webbutveckling i Arboga",
  heroDescription: "Arboga har en rik historia och en framåtblickande företagskultur. Vi hjälper lokala företag att ta steget in i den digitala framtiden med moderna, snabba och sökmotoroptimerade hemsidor.",
  icon: Code2,
  benefits: [
    { title: "Lokalt engagemang", description: "Vi arbetar nära företag i Arboga och förstår den lokala marknadens unika förutsättningar och möjligheter." },
    { title: "Blixtsnabb prestanda", description: "Alla våra hemsidor optimeras för 100/100 i PageSpeed, vilket ger dig en tydlig fördel gentemot konkurrenter med långsamma sajter." },
    { title: "Sökmotoroptimerat", description: "Från metadata och strukturerad data till bildoptimering – varje teknisk detalj är finslipiad för att maximera din synlighet på Google." },
    { title: "Skräddarsytt för dig", description: "Vi bygger unika lösningar anpassade efter din verksamhet i Arboga – inga generiska mallar eller begränsande plattformar." },
  ],
  bodyTitle: "Professionella hemsidor för Arbogas företag",
  bodyParagraphs: [
    "Arboga må vara en mindre stad, men den digitala världen känner inga geografiska gränser. Med en professionell hemsida kan ditt företag nå kunder inte bara i Arboga utan i hela Västmanland och Mälardalen. Problemet är att många lokala företag fortfarande förlitar sig på föråldrade hemsidor som laddar långsamt och inte är optimerade för mobila enheter eller sökmotorer.",
    "På LRH Konsult bygger vi hemsidor som är designade för att prestera. Vi använder React och Next.js – samma tekniker som globala teknikjättar – för att skapa webbplatser som laddar omedelbart, ser fantastiska ut på alla skärmstorlekar och rankar högt i Google. För ett företag i Arboga innebär detta att du kan konkurrera på samma villkor som större aktörer i regionen.",
    "Vi tror att varje företag i Arboga förtjänar en digital närvaro som speglar kvaliteten på deras produkter och tjänster. Oavsett om du driver en restaurang vid torget, en mekanisk verkstad eller en konsultfirma kan vi skapa en hemsida som berättar din historia och attraherar nya kunder genom organisk söktrafik.",
  ],
  bodyExtraSections: [
    {
      title: "Arboga i den digitala eran",
      paragraphs: [
        "Den digitala mognaden bland företag i Västmanland ökar stadigt, och Arboga är inget undantag. Fler och fler konsumenter söker efter lokala tjänster online, och de företag som har en snabb, professionell hemsida fångar upp dessa kunder. Enligt Google överger 53% av mobilanvändare en sida som tar mer än tre sekunder att ladda – en statistik som visar vikten av prestanda.",
        "Vi tar ett helhetsgrepp kring din digitala närvaro. Det handlar inte bara om att bygga en snygg hemsida utan om att skapa en komplett digital strategi som inkluderar lokal SEO, strukturerad data och konverteringsoptimerad design. Allt detta paketeras i en hemsida som laddar på under en sekund.",
        "Genom att investera i en modern hemsida investerar du i ditt företags framtid. En välbyggd webbplats är inte en kostnad utan en tillgång som genererar leads, bygger förtroende och stärker ditt varumärke i Arboga och hela Västmanland.",
      ],
    },
    {
      title: "Så samarbetar vi med företag i Arboga",
      paragraphs: [
        "Vårt samarbete börjar alltid med ett kostnadsfritt möte där vi lyssnar på dina behov, kartlägger dina mål och analyserar din befintliga digitala närvaro. Utifrån denna analys skapar vi en skräddarsydd plan som beskriver vad vi ska bygga, hur lång tid det tar och vad det kostar – inga överraskningar.",
        "Under utvecklingen har du full insyn i processen. Vi använder ett agilt arbetssätt där du får se och testa din hemsida i olika stadier. Efter lanseringen erbjuder vi löpande support och optimering för att säkerställa att din investering fortsätter att ge avkastning.",
      ],
    },
  ],
  faq: [
    { question: "Behöver mitt företag i Arboga verkligen en ny hemsida?", answer: "Om din nuvarande hemsida är långsam, inte mobilanpassad eller inte rankar på Google – ja. En modern hemsida kan dramatiskt öka din synlighet och kundtillströmning." },
    { question: "Vad kostar en hemsida för företag i Arboga?", answer: "Vi erbjuder paket från 5 000 kr. Priset baseras på projektets omfattning och dina specifika behov. Kontakta oss för en kostnadsfri offert." },
    { question: "Hur snabbt kan min nya hemsida vara klar?", answer: "En standardhemsida tar 2–4 veckor. Vi prioriterar kvalitet och prestanda i varje steg av processen." },
    { question: "Arbetar ni med företag utanför Arboga?", answer: "Ja, vi hjälper företag i hela Västmanland och Mälardalen. Vi erbjuder både fysiska och digitala möten beroende på vad som passar bäst." },
  ],
};

const WebbutvecklingArboga = () => <LocalLandingPage config={config} />;
export default WebbutvecklingArboga;
