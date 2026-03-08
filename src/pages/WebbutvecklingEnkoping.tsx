import { Code2 } from "lucide-react";
import LocalLandingPage from "./LocalLandingPage";

const config = {
  city: "Enköping",
  slug: "webbutveckling-enkoping",
  serviceKeyword: "Webbutveckling",
  metaTitle: "Webbutveckling Enköping - Blixtsnabba Hemsidor & SEO",
  metaDescription: "Maximera din digitala närvaro i Enköping med Next.js och teknisk SEO i världsklass.",
  heroHeading: "Webbutveckling & SEO i Enköping",
  heroDescription: "Att bygga en hemsida i dagens digitala klimat handlar om mycket mer än bara estetik. För företag i Enköping är den tekniska prestandan den enskilt viktigaste faktorn för att synas och konvertera besökare till kunder.",
  icon: Code2,
  benefits: [
    { title: "Nära Enköping", description: "Vi arbetar tätt med företag i Enköping och erbjuder personlig service och lokalkännedom för att förstå din marknad på djupet." },
    { title: "100/100 PageSpeed", description: "Varje hemsida vi bygger är optimerad för maximal hastighet och prestanda, vilket ger dig bättre ranking på Google." },
    { title: "SEO inbyggt från start", description: "Vi integrerar lokal SEO i varje aspekt av din hemsida så att du syns för rätt målgrupp i Enköping och Mälardalen." },
    { title: "Framtidssäker teknik", description: "Med React och TypeScript bygger vi skalbara lösningar som växer med ditt företag utan att behöva byggas om." },
  ],
  bodyTitle: "Din partner för modern webbutveckling i Enköping",
  bodyParagraphs: [
    "Genom att använda moderna ramverk som React och Next.js skapar vi lösningar som inte bara ser fantastiska ut på alla skärmar, utan som också levererar en användarupplevelse i absolut världsklass. När vi pratar om webbutveckling i Enköping menar vi hemsidor som är byggda från grunden med fokus på hastighet, säkerhet och sökmotoroptimering. En snabb hemsida är inte längre en lyx, det är en förutsättning för att lyckas lokalt.",
    "Många företagare i Enköping upplever att deras hemsidor inte rankar trots att de har bra innehåll. Ofta ligger problemet i den tekniska strukturen. Google har gjort Core Web Vitals till en central del av sin rankningsalgoritm, vilket innebär att mätvärden som Largest Contentful Paint (LCP) och First Contentful Paint (FCP) direkt påverkar din position i sökresultaten.",
    "Genom att sikta på 100/100 i Google PageSpeed Insights säkerställer vi att din sida laddar på under en sekund, vilket skapar en enorm konkurrensfördel. I en stad som Enköping, där konkurrensen om kunderna ökar, är varje millisekund av laddningstid en investering i högre konvertering och bättre synlighet.",
  ],
  bodyExtraSections: [
    {
      title: "Strategisk sökmotoroptimering för företag i Enköpingsregionen",
      paragraphs: [
        "SEO i Enköping handlar om att förstå den lokala marknaden och hur kunder söker efter tjänster i sitt närområde. Vi arbetar inte bara med teknisk SEO, utan även med strategiskt innehåll som svarar på dina kunders frågor. Genom att optimera för lokala söktermer och implementera korrekt JSON-LD Schema för lokala företag, gör vi det enkelt för Google att förstå att din verksamhet är det bästa alternativet i Enköping.",
        "Det handlar om att bygga auktoritet över tid. Genom att kombinera blixtsnabb teknik med relevant, djupt innehåll skapar vi en digital närvaro som faktiskt genererar tillväxt och nya affärsmöjligheter för ditt företag.",
      ],
    },
    {
      title: "UX-design och konvertering: Mer än bara en snygg yta",
      paragraphs: [
        "När en besökare landar på din hemsida i Enköping har du bara några sekunder på dig att göra ett intryck. En bra användarupplevelse (UX) börjar med hastighet, men fortsätter med en logisk struktur och tydliga call-to-actions. Vi bygger hemsidor som leder besökaren genom hela köpresan, från det första intresset till den slutgiltiga kontakten.",
        "Genom att eliminera onödig kod och tunga bibliotek behåller vi en ren och effektiv design som fungerar lika bra på mobilen som på datorn. För oss är webbdesign i Enköping en balansgång mellan konst och ingenjörskonst, där slutmålet alltid är att stärka ditt varumärke och öka din försäljning.",
      ],
    },
    {
      title: "Framtidssäker teknik för långsiktig digital framgång",
      paragraphs: [
        "Världen av webbutveckling rör sig snabbt, och för företag i Enköping är det viktigt att inte sitta fast i gamla, långsamma system. Genom att välja en modern arkitektur säkerställer vi att din hemsida är skalbar och enkel att underhålla i många år framöver. Vi använder de senaste metoderna för bildoptimering, såsom AVIF-formatet, och säkerställer att all kod är minifierad och effektiv.",
        "Detta garanterar att din investering i en ny hemsida betalar sig genom både sänkta driftskostnader och ökad organisk trafik. Med LRH Konsult som din partner i Enköping får du tillgång till expertis som prioriterar din affärsnytta genom teknisk perfektion och strategisk rådgivning.",
      ],
    },
  ],
  faq: [
    { question: "Vad kostar en hemsida för företag i Enköping?", answer: "Vi erbjuder paket från 5 000 kr för enklare hemsidor till mer avancerade lösningar från 15 000 kr. Kontakta oss för en kostnadsfri offert anpassad efter dina specifika behov." },
    { question: "Hur lång tid tar det att bygga en hemsida i Enköping?", answer: "En standardhemsida tar vanligtvis 2–4 veckor från start till lansering. Mer komplexa projekt med skräddarsydda funktioner kan ta 6–8 veckor." },
    { question: "Erbjuder ni SEO-tjänster i Enköping?", answer: "Ja, alla våra hemsidor byggs med lokal SEO integrerad. Vi erbjuder även dedikerade SEO-paket för företag som vill öka sin organiska synlighet i Enköping och Mälardalen." },
    { question: "Varför är 100/100 PageSpeed viktigt?", answer: "Google använder Core Web Vitals som rankingfaktor. En hemsida med 100/100 laddar snabbare, rankar högre och konverterar bättre – det är en direkt investering i fler kunder." },
  ],
};

const WebbutvecklingEnkoping = () => <LocalLandingPage config={config} />;
export default WebbutvecklingEnkoping;
