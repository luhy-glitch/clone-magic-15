import { UtensilsCrossed } from "lucide-react";
import LocalLandingPage from "./LocalLandingPage";

const config = {
  city: "Sala",
  slug: "restauranger-sala",
  serviceKeyword: "Hemsidor för restauranger",
  metaTitle: "Hemsida för Restauranger i Sala – Fyll Fler Bord | LRH Konsult",
  metaDescription: "Snabba hemsidor för restauranger och caféer i Sala. Mobilanpassad design med menyvisning, bordsbokningar och lokal SEO som fyller dina bord.",
  heroHeading: "Hemsidor som fyller borden för restauranger i Sala",
  heroDescription: "Hungriga kunder i Sala söker på Google efter lunch och middag – och de väljer den restaurang som dyker upp först med en inbjudande meny och enkel bokning. Vi bygger blixtsnabba hemsidor som gör din restaurang till det självklara valet.",
  icon: UtensilsCrossed,
  heroFacts: [
    "100/100 PageSpeed – snabbast bland Salas restaurangsidor",
    "Responsiva menyer direkt i HTML – inga PDF-filer",
    "JSON-LD Restaurant-schema med öppettider och meny",
    "Bordsbokningar direkt via hemsidan utan tredjepartsavgifter",
  ],
  benefits: [
    { title: "Menyvisning i ren HTML", description: "Vi bygger responsiva menyer direkt i koden – läsbara på alla skärmar och sökbara för Google, till skillnad från PDF-filer som kräver zoom." },
    { title: "Bokningssystem utan provision", description: "Integrera direktbokningar på din hemsida och slipp 15–20 procent i provisioner till plattformar som TheFork." },
    { title: "Lokal SEO för matgäster", description: "Vi optimerar för söktermer som 'lunch Sala', 'restaurang nära mig' och 'boka bord Sala' med JSON-LD Restaurant-schema." },
    { title: "Daglig lunchmeny-uppdatering", description: "En enkel lösning som gör det möjligt att uppdatera dagens lunch snabbt, så att 'lunch Sala'-sökningar alltid visar aktuell meny." },
  ],
  bodyTitle: "Blixtsnabb laddningstid ger fler bordsbokningar i Sala",
  bodyParagraphs: [
    "När en hungrig kund i Sala söker efter en restaurang har du bara bråkdelen av en sekund på dig att fånga deras intresse. Studier visar att 53 procent av mobilanvändare lämnar en sida som tar mer än tre sekunder att ladda – och för en restaurang innebär varje tappad besökare ett tomt bord. Genom att nå 100/100 i PageSpeed säkerställer vi att din restaurangsida laddar omedelbart, oavsett om gästen sitter på tåget eller promenerar på Stora Torget i Sala.",
    "En snabb webbplats med en LCP under 1,2 sekunder är avgörande för din SEO-ranking, då Google premierar sidor som ger en sömlös användarupplevelse. Vi bygger inte WordPress-sidor med tunga bildspel – vi skapar optimerade React-applikationer där varje bild serveras i AVIF-format med exakta dimensioner, lazy-loading och responsiva srcset-attribut. Resultatet är en hemsida som visar din mat i bästa möjliga kvalitet utan att kompromissa med laddningstiden.",
    "Sala har ett rikt utbud av restauranger, caféer och lunchställen – från Stora Torget till de mysiga gatorna kring Aguélimuseet. Den restaurang som syns överst på Google när en hungrig kund söker är den som fyller sina bord. Vi ser till att det blir din restaurang.",
  ],
  bodyExtraSections: [
    {
      title: "Menyoptimering och mobilvänlig design för Salas krogar",
      paragraphs: [
        "Det absolut viktigaste på en restaurangs hemsida är menyn, men många restauranger i Sala använder fortfarande svårlästa PDF-filer som kräver att gästen zoomar och scrollar. PDF-menyer indexeras dessutom dåligt av Google, vilket innebär att dina rätter och priser aldrig dyker upp i sökresultaten. Vi bygger istället responsiva menyer direkt i HTML-koden, vilket gör dem läsbara på alla skärmar och fullt sökbara.",
        "Genom att strukturera menyn med semantisk HTML och JSON-LD Menu-schema berättar vi för Google exakt vilka rätter du serverar, till vilka priser och under vilka tider. En sökning på 'pizza Sala' eller 'thai lunch Sala' kan leda direkt till din menysektion – något som aldrig händer med en PDF-meny.",
        "Vi designar mobilupplevelsen med en tumregel: allt en hungrig kund behöver ska vara tillgängligt inom tre tryck. Menyn, öppettider, telefonnummer och bokningsknapp är alltid synliga utan att scrolla. Click-to-call fungerar omedelbart på mobilen, och kartan visar exakt var din restaurang i Sala ligger med Google Maps-integration.",
      ],
    },
    {
      title: "Lokal SEO: Att synas när hungriga kunder söker i Sala",
      paragraphs: [
        "Lokal sökmotoroptimering är hemligheten bakom att dyka upp överst när någon söker på 'restaurang Sala', 'lunch Sala' eller 'bästa middagen i Sala'. Vi implementerar avancerad JSON-LD Restaurant-schema som talar om för Google exakt vilken typ av restaurang du driver, vilka omdömen ni har, era öppettider, prisintervall och var ni ligger.",
        "Google Business-profilen är ofta det första en potentiell gäst ser. Vi optimerar din profil med professionella matbilder, korrekta öppettider, en komplett menylänk och en aktiv strategi för att bygga autentiska kundrecensioner. En väloptimerad Google Business-profil kan ensam stå för majoriteten av dina nya gäster i Sala.",
        "Vi skapar dessutom säsongsanpassat innehåll som matchar Salas lokala evenemang och traditioner. Valborgsfirande, sommarterrassen, julbordet – genom att publicera relevant innehåll vid rätt tidpunkt fångar vi upp säsongsspecifika sökningar och håller din hemsida aktuell och relevant året runt.",
      ],
    },
    {
      title: "Framtidssäker restaurangteknik utan tunga plattformar",
      paragraphs: [
        "Många restauranger i Sala betalar för dyra plattformslösningar med månatliga avgifter, begränsade designmöjligheter och tredjepartsprovisioner på varje bokning. Vi erbjuder ett alternativ: en skräddarsydd React-hemsida som du äger fullt ut, utan löpande plattformsavgifter och med en prestanda som ingen mallbaserad lösning kan matcha.",
        "Din restaurangs hemsida ska spegla den omsorg du lägger på maten. En generisk mall kommunicerar det motsatta – att det är 'good enough'. Vi designar varje hemsida för restauranger i Sala med en unik visuell identitet som fångar din restaurangs personlighet, från färgpaletten till typografin och bildbehandlingen.",
        "Med React som grund kan din hemsida enkelt vidareutvecklas: online-beställningar, lojalitetsprogram, presentkort eller catering-formulär. Du betalar bara för det du behöver, när du behöver det – utan att vara låst till en plattforms funktionslista eller prissättning.",
      ],
    },
  ],
  caseStudy: {
    title: "Projektinsikt: Lunchrestaurang i Sala gick från tomma bord till reservation",
    problem: "En lunchrestaurang på Stora Torget i Sala med daglig husmanskost hade ingen hemsida och förlitade sig helt på en sporadiskt uppdaterad Facebook-sida. De rankade inte alls för 'lunch Sala', 'restaurang Sala' eller 'dagens rätt Sala' och missade dagligen kunder som sökte efter lunch via Google istället för sociala medier.",
    solution: "Vi skapade en visuellt tilltalande React-hemsida med dagens lunch som uppdaterades dagligen via ett enkelt gränssnitt, komplett meny, kontaktinformation och vägbeskrivning med Google Maps. JSON-LD Restaurant-schema implementerades med öppettider, prisintervall och servesMeny. Vi skapade även blogginnehåll om 'Veckans lunch i Sala' optimerat för lokala söktermer.",
    result: "Hemsidan rankade topp 1 för 'lunch Sala' och 'restaurang Sala' inom sex veckor. Nya gäster som hittade restaurangen via Google ökade med över 200 procent under de första tre månaderna. Lunchserveringen gick från att ha lediga bord till att kräva reservation på populära dagar.",
  },
  faq: [
    { question: "Vad kostar en hemsida för en restaurang i Sala?", answer: "Vi erbjuder restaurangpaket från 5 000 kr som inkluderar responsiv menyvisning, Google Maps-integration, kontaktformulär och fullständig SEO-optimering med JSON-LD Restaurant-schema. Lösningar med bokningssystem prissätts individuellt." },
    { question: "Kan jag själv uppdatera dagens lunch på hemsidan?", answer: "Ja, vi bygger en enkel uppdateringslösning där du snabbt kan ändra dagens meny. Det tar bara en minut att uppdatera, och ändringen syns omedelbart på hemsidan utan att påverka prestandan." },
    { question: "Kan ni integrera ett online-bokningssystem?", answer: "Ja, vi bygger skräddarsydda bokningslösningar direkt i din hemsida. Till skillnad från TheFork eller andra plattformar slipper du provisioner per bokning – du äger hela systemet och kundrelationen." },
    { question: "Hur snabbt kan hemsidan vara klar?", answer: "En restauranghemsida med meny, bokning och SEO-optimering tar normalt 2–3 veckor. Om du behöver avancerade funktioner som online-beställning eller catering-formulär kan det ta 4–6 veckor." },
    { question: "Behöver jag professionella matbilder?", answer: "Bra bilder gör stor skillnad för konvertering. Vi kan rekommendera lokala fotografer i Sala, och vi optimerar alla bilder i AVIF-format med responsiva storlekar för perfekt visning utan att påverka laddningstiden." },
    { question: "Hur hjälper ni med Google Business-profilen?", answer: "Vi optimerar din profil med rätt restaurangkategori, professionella bilder, komplett menylänk, korrekta öppettider och en strategi för att bygga autentiska kundrecensioner som stärker din lokala synlighet." },
    { question: "Kan jag sluta använda Facebook som enda kanal?", answer: "En egen hemsida ger dig kontroll som Facebook aldrig erbjuder: du äger datan, Google indexerar ditt innehåll, och du slipper algoritmförändringar som minskar din räckvidd. Facebook blir ett komplement, inte din enda närvaro." },
  ],
};

const RestaurangerSala = () => <LocalLandingPage config={config} />;
export default RestaurangerSala;
