import { Code2 } from "lucide-react";
import LocalLandingPage from "./LocalLandingPage";

const config = {
  city: "Sala",
  slug: "hemsidor-sala",
  serviceKeyword: "Hemsidor",
  metaTitle: "Hemsidor Sala | Modern webbyrå | LRH Konsult",
  metaDescription: "Ska du bygga hemsida i Sala? Vi skapar moderna, mobilanpassade webbplatser med fokus på prestanda, design och konvertering. Boka fri konsultation!",
  heroHeading: "Moderna och Snabba Hemsidor i Sala",
  heroDescription: "Din webbplats är ditt digitala skyltfönster. För företag i Sala erbjuder vi kompletta lösningar för att bygga hemsidor som är lika visuellt tilltalande som de är tekniskt fulländade – optimerade för att ranka högt och konvertera besökare.",
  icon: Code2,
  benefits: [
    { title: "Anpassat för Sala", description: "Vi förstår den lokala marknaden i Sala och skapar hemsidor som tilltalar dina kunder med relevant innehåll och lokal SEO." },
    { title: "Modern teknik", description: "React och Next.js ger blixtsnabba hemsidor med server-side rendering som rankar högt på Google." },
    { title: "Allt-i-ett-lösning", description: "Design, utveckling, SEO och support – allt du behöver för att lyckas digitalt i Sala, samlat hos en leverantör." },
    { title: "Personlig service", description: "Nära samarbete med personliga möten och direkt kontakt genom hela projektet. Inga mellanhänder." },
  ],
  bodyTitle: "Mobilanpassade hemsidor för företag i Sala",
  bodyParagraphs: [
    "Majoriteten av dina besökare surfar via mobilen. Därför designar och utvecklar vi alltid med ett mobile-first-fokus, vilket garanterar en perfekt och snabb upplevelse oavsett skärmstorlek. För företag i Sala innebär det att dina kunder får en sömlös upplevelse vare sig de sitter vid datorn på kontoret eller scrollar på telefonen i väntrummet.",
    "En professionell hemsida bygger förtroende. I en liten stad som Sala är ryktet allt, och din webbplats är ofta det första intrycket en potentiell kund får av ditt företag. Vi ser till att det intrycket är modernt, snabbt och professionellt – med tydliga kontaktvägar och en design som speglar din verksamhets kvalitet.",
    "Vi använder moderna bildformat som AVIF och WebP för att minimera filstorlekar utan att tumma på bildkvaliteten. Kombinerat med smart lazy-loading och optimerad kodstruktur ger det hemsidor som laddar blixtsnabbt även på enklare mobila enheter och långsammare nätverk.",
  ],
  bodyExtraSections: [
    {
      title: "Från idé till färdig webbplats i Sala",
      paragraphs: [
        "Vi hanterar hela processen, från den allra första skissen till lansering och drift. Processen börjar med ett kostnadsfritt möte där vi kartlägger dina mål, din målgrupp och dina önskemål. Därefter tar vi fram wireframes och designförslag som du godkänner innan utvecklingen påbörjas.",
        "Under utvecklingsfasen använder vi agila metoder som innebär att du löpande kan följa framstegen och ge feedback. Du får tillgång till en testversion av din hemsida där du kan klicka runt och säkerställa att allt ser ut och fungerar precis som du vill innan vi lanserar.",
        "Efter lanseringen erbjuder vi support och underhåll så att din hemsida alltid är uppdaterad, säker och presterar på topp. Vi ser oss som en långsiktig partner för ditt företag i Sala – inte bara en leverantör som försvinner efter projektet.",
      ],
    },
    {
      title: "SEO och synlighet för företag i Sala",
      paragraphs: [
        "Det räcker inte att ha en snygg hemsida – den måste också hittas. Vi integrerar lokal SEO i varje hemsida vi bygger i Sala, med rätt metadata, strukturerad data och innehåll optimerat för de sökord som dina potentiella kunder faktiskt använder.",
        "Genom att kombinera teknisk excellens med strategiskt innehåll hjälper vi företag i Sala att synas i sökresultaten och på Google Maps. Det innebär fler besökare, fler förfrågningar och i slutändan fler kunder för ditt företag.",
      ],
    },
  ],
  faq: [
    { question: "Vad kostar en hemsida i Sala?", answer: "Vi erbjuder paket från 5 000 kr till 25 000 kr beroende på projektets storlek och komplexitet. Kontakta oss för en offert anpassad för ditt företag i Sala." },
    { question: "Kan ni hjälpa med SEO för företag i Sala?", answer: "Absolut! Alla hemsidor vi bygger är SEO-optimerade från grunden med rätt metadata, strukturerad data och lokal optimering. Vi erbjuder även dedikerade SEO-tjänster." },
    { question: "Hur snabbt kan ni leverera en hemsida i Sala?", answer: "En enkel hemsida kan vara klar inom 1–2 veckor. Mer komplexa projekt med e-handel eller skräddarsydda funktioner tar 4–8 veckor." },
    { question: "Inkluderar ni hosting och domän?", answer: "Vi kan hjälpa till med allt det tekniska, inklusive domänregistrering och hosting-konfiguration, så att du kan fokusera på din kärnverksamhet." },
  ],
};

const HemsidorSala = () => <LocalLandingPage config={config} />;
export default HemsidorSala;
