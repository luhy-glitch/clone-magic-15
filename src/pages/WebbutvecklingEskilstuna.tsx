import { Code2 } from "lucide-react";
import LocalLandingPage from "./LocalLandingPage";

const config = {
  city: "Eskilstuna",
  slug: "webbutveckling-eskilstuna",
  serviceKeyword: "Webbutveckling",
  metaTitle: "Webbutveckling Eskilstuna | LRH Konsult",
  metaDescription: "Webbutveckling i Eskilstuna med React & Next.js. 100/100 PageSpeed, lokal SEO och modern design. Boka gratis konsultation!",
  heroHeading: "Webbutveckling i Eskilstuna",
  heroDescription: "Eskilstuna är en av Sörmlands mest dynamiska städer, och ditt företag förtjänar en hemsida som matchar ambitionsnivån. Vi bygger skräddarsydda, blixtsnabba webbplatser som driver tillväxt och konverteringar.",
  icon: Code2,
  benefits: [
    { title: "Regional expertis", description: "Vi förstår den lokala marknaden i Eskilstuna och Sörmland och bygger hemsidor som talar direkt till din målgrupp." },
    { title: "Prestanda i världsklass", description: "Våra hemsidor når konsekvent 100/100 i Google PageSpeed, vilket ger dig en avgörande fördel i sökresultaten." },
    { title: "Modern teknikstack", description: "React, Next.js och TypeScript ger dig en skalbar och framtidssäker plattform som växer med ditt företag." },
    { title: "Konverteringsoptimerad", description: "Vi designar med konvertering i fokus – varje element på din hemsida har ett syfte och driver besökare mot handling." },
  ],
  bodyTitle: "Din digitala partner i Eskilstuna",
  bodyParagraphs: [
    "Eskilstuna har genomgått en imponerande digital transformation under de senaste åren, och allt fler företag i staden inser värdet av en professionell digital närvaro. Men att bara ha en hemsida räcker inte längre – den måste vara snabb, sökmotoroptimerad och designad för att konvertera besökare till kunder. Det är precis vad vi på LRH Konsult levererar.",
    "Vi har arbetat med företag i hela Mälardalen och förstår de unika utmaningarna och möjligheterna som den lokala marknaden erbjuder. Eskilstuna, med sin starka industritradition och växande tjänstesektor, är en stad där digital synlighet kan göra enorm skillnad för din verksamhet. Genom att investera i en modern hemsida positionerar du dig inte bara mot lokala konkurrenter utan öppnar också dörren till kunder i hela regionen.",
    "Vår approach till webbutveckling är datadriven och resultatorienterad. Vi börjar alltid med att förstå dina affärsmål innan vi skriver en enda rad kod. Vilka söker dina potentiella kunder efter? Vilka sidor besöker de? Var tappar du besökare? Genom att svara på dessa frågor skapar vi en hemsida som inte bara imponerar visuellt utan som faktiskt driver din verksamhet framåt.",
  ],
  bodyExtraSections: [
    {
      title: "Lokal SEO som sätter Eskilstuna på kartan",
      paragraphs: [
        "Lokal SEO är avgörande för företag i Eskilstuna som vill fånga upp kunder i sitt närområde. Vi implementerar strukturerad data, optimerade metataggar och lokalt relevant innehåll som hjälper Google att förstå att din verksamhet betjänar Eskilstuna och Sörmland.",
        "Genom att kombinera teknisk SEO med lokal optimering skapar vi en digital närvaro som rankar för de sökord som betyder mest för ditt företag. Oavsett om du driver en restaurang, en advokatbyrå eller en hantverksfirma i Eskilstuna kan vi hjälpa dig att bli synlig för de kunder som aktivt söker efter dina tjänster.",
        "Vår erfarenhet visar att företag som investerar i en tekniskt optimerad hemsida med lokal SEO ofta ser en markant ökning i organisk trafik inom 3–6 månader. Det handlar inte om snabba fixes utan om att bygga en hållbar digital grund som ger resultat månad efter månad.",
      ],
    },
    {
      title: "Från Eskilstuna till hela Mälardalen",
      paragraphs: [
        "En stark digital närvaro i Eskilstuna öppnar dörrar långt bortom stadsgränsen. Med rätt hemsida och SEO-strategi kan ditt företag nå kunder i hela Mälardalen – från Strängnäs och Katrineholm till Västerås och Stockholm. Vi bygger hemsidor som är optimerade för att växa med din verksamhet.",
        "Vår utvecklingsprocess är agil och transparent. Du får löpande demos, kan ge feedback direkt och ser din hemsida ta form steg för steg. När vi är klara har du inte bara en vacker hemsida utan en kraftfull digital marknadsföringsplattform som arbetar för dig dygnet runt.",
      ],
    },
  ],
  faq: [
    { question: "Vad kostar webbutveckling i Eskilstuna?", answer: "Våra paket börjar från 5 000 kr för enklare hemsidor. Mer avancerade lösningar med skräddarsydda funktioner prissätts utifrån projektets omfattning. Kontakta oss för en fri offert." },
    { question: "Kan ni hjälpa företag i Eskilstuna med SEO?", answer: "Absolut. Lokal SEO är en central del av vår tjänst. Vi optimerar din hemsida för att ranka på relevanta sökord i Eskilstuna och hela Sörmland." },
    { question: "Hur skiljer sig era hemsidor från mallbaserade lösningar?", answer: "Till skillnad från WordPress-mallar eller Wix bygger vi din hemsida från grunden med React/Next.js. Det ger dig unik design, överlägsen prestanda och full kontroll utan månatliga licensavgifter." },
    { question: "Erbjuder ni support efter lansering?", answer: "Ja, vi erbjuder löpande underhåll, säkerhetsuppdateringar och vidareutveckling så att din hemsida alltid presterar optimalt." },
  ],
};

const WebbutvecklingEskilstuna = () => <LocalLandingPage config={config} />;
export default WebbutvecklingEskilstuna;
