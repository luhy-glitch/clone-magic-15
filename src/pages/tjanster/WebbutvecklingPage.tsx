import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Code2 } from "lucide-react";

const WebbutvecklingPage = () => (
  <ServicePageTemplate
    title="Webbutveckling"
    metaTitle="Professionell webbutveckling React & Next.js | LRH Konsult"
    metaDescription="Skräddarsydd webbutveckling i React och Next.js för företag i Västmanland. Blixtsnabba sajter med SEO, API-integrationer och e-handel."
    heroSubheading="Webbutveckling"
    heroHeading="Webbutveckling i Västerås & Västmanland"
    heroDescription="LRH Konsult är din ledande partner för professionell webbutveckling i Västerås och övriga Västmanland. Vi bygger inte bara hemsidor; vi skapar högpresterande digitala verktyg i Next.js och React som är optimerade för att konvertera besökare till betalande kunder i Mälardalen."
    whyTitle="Webbutveckling i Västerås med fokus på Next.js"
    whyText="Genom att använda världsledande teknik ser vi till att ditt företag får en teknisk fördel. Våra lösningar laddar på under en sekund, vilket är ett krav för att nå förstaplatsen på Google under 2026."
    icon={Code2}
    breadcrumbLabel="Webbutveckling"
    features={[
      { title: "React & Next.js", description: "Moderna ramverk som levererar snabba, interaktiva webbplatser med server-side rendering för bästa SEO." },
      { title: "Responsiv design", description: "Pixel-perfekt upplevelse på alla skärmstorlekar – från mobil till desktop." },
      { title: "API-integrationer", description: "Sömlös koppling till betalningssystem, CRM, bokningssystem och andra tredjepartstjänster." },
      { title: "E-handelslösningar", description: "Skräddarsydda webshop-lösningar med säker betalning och smidig orderhantering." },
      { title: "Prestanda & Säkerhet", description: "Optimerad kod, HTTPS, CSP-headers och regelbundna säkerhetsgranskningar ingår som standard." },
    ]}
    process={[
      { step: "1", title: "Behovsanalys & strategi", description: "Vi börjar med att förstå ditt företag, era mål och er målgrupp i Västmanland. Tillsammans tar vi fram en strategi och en tydlig projektplan." },
      { step: "2", title: "Design & prototyp", description: "Vi skapar wireframes och interaktiva prototyper som du kan testa innan en enda rad kod skrivs. Du godkänner designen innan vi går vidare." },
      { step: "3", title: "Utveckling & optimering", description: "Vi bygger din hemsida i React/Next.js med fokus på prestanda, tillgänglighet och SEO. Varje sida optimeras för snabbast möjliga laddtid." },
      { step: "4", title: "Lansering & uppföljning", description: "Vi lanserar din nya sajt, konfigurerar analytics och ger dig en genomgång. Efter lansering följer vi upp med support och justeringar." },
    ]}
    caseStudies={[
      { client: "TechStart Västerås", metric: "+65%", result: "Ökning i organisk trafik inom 3 månader efter lansering av ny Next.js-sajt." },
      { client: "Bygg & Design AB", metric: "0.8s", result: "Laddtid på startsidan efter optimering – ner från 4.2 sekunder." },
      { client: "Sala Restaurang", metric: "+40%", result: "Fler kontaktförfrågningar efter lansering av mobilanpassad hemsida." },
    ]}
    contentSections={[
      {
        title: "Kundcase: Modernisering av lokal e-handel",
        paragraphs: [
          "Vi hjälpte ett lokalt företag i Västmanland att migrera från en tung WordPress-sajt till en blixtsnabb Next.js-lösning. Resultatet blev en 40 % minskning av laddningstiden och en mätbar ökning av konverteringsgraden med 15 % under de första tre månaderna. Genom att fokusera på användarupplevelse och ren kod skapade vi en plattform som är redo att växa i takt med företaget.",
        ],
      },
      {
        title: "Vanliga frågor om webbutveckling",
        paragraphs: [
          "Hur lång tid tar det att bygga en ny hemsida? Det beror på projektets omfattning, men en standardwebbplats för ett mindre till medelstort företag tar vanligtvis mellan 4 och 8 veckor från första möte till lansering. Vi arbetar agilt och håller dig uppdaterad genom hela processen.",
          "Varför använder ni React och Next.js? Vi väljer modern teknik för att ge våra kunder bästa möjliga prestanda och säkerhet. Next.js tillåter oss att bygga sidor som laddar omedelbart, vilket är en av de viktigaste rankingfaktorerna hos Google idag.",
        ],
      },
    ]}
    faqTitle="Vanliga frågor om webbutveckling i Västmanland"
    faq={[
      { question: "Vilken teknik är bäst för SEO 2026?", answer: "Next.js är det överlägsna valet då det kombinerar blixtsnabb laddning med perfekt indexering för Google." },
      { question: "Kan ni hjälpa företag i hela Västmanlands län?", answer: "Ja, vi arbetar tätt med lokala företag i Västerås, Köping, Sala och Hallstahammar." },
      { question: "Ingår mobiloptimering i er webbutveckling?", answer: "Självklart, alla våra projekt bygger på en mobil-först-strategi för maximal räckvidd." },
      { question: "Hur ser er process ut för ett webbutvecklingsprojekt?", answer: "Vi arbetar i fyra steg: behovsanalys, design/prototyp, utveckling/optimering och lansering/uppföljning. Du är involverad i varje fas." },
    ]}
    testimonial={{
      quote: "Lucas levererade en webbplats som överträffade alla våra förväntningar. Snabb, modern och enkel att uppdatera.",
      author: "Erik Johansson",
      role: "VD, TechStart Västerås",
    }}
    relatedServices={[
      { label: "Webbdesign", href: "/tjanster/webbdesign" },
      { label: "Prestanda-optimering", href: "/tjanster/prestanda-optimering" },
      { label: "SEO-optimering", href: "/tjanster/seo-optimering" },
    ]}
  />
);

export default WebbutvecklingPage;
