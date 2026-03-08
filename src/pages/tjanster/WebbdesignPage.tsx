import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Palette } from "lucide-react";

const WebbdesignPage = () => (
  <ServicePageTemplate
    title="Webbdesign"
    metaTitle="Webbdesign Sala - Användarvänliga & Snabba Hemsidor"
    metaDescription="Professionell webbdesign i Sala som engagerar dina besökare. Vi kombinerar estetik med 100/100 prestanda."
    heroSubheading="Webbdesign"
    heroHeading="Webbdesign som engagerar & konverterar"
    heroDescription="Vi levererar modern webbdesign som kombinerar estetik med knivskarp affärsnytta. För företag i Sala, Köping och Västerås skapar vi unika digitala identiteter som stärker varumärket, bygger förtroende och driver konverteringar – allt med 100/100 i PageSpeed."
    whyTitle="Webbdesign som ökar din konvertering i Sala"
    whyText="Vi fokuserar på UX (användarupplevelse) för att säkerställa att din hemsida är lättnavigerad och intuitiv. En bra design ska inte bara vara snygg – den ska leda kunden direkt till köp eller kontakt. Varje designbeslut vi tar är baserat på data och beprövade konverteringsstrategier anpassade för den lokala marknaden."
    icon={Palette}
    breadcrumbLabel="Webbdesign"
    features={[
      { title: "UI/UX Design", description: "Användarvänliga gränssnitt baserade på research, användartester och bästa praxis för maximal konvertering." },
      { title: "Mobile-first approach", description: "Designen börjar med mobilen och skalas upp – för att möta dagens användare där de befinner sig." },
      { title: "Varumärkesidentitet", description: "Konsekvent visuellt språk med färger, typografi och grafik som speglar och förstärker ditt varumärke." },
      { title: "Prototyper & Wireframes", description: "Interaktiva prototyper så att du kan testa och godkänna designen innan en enda rad kod skrivs." },
    ]}
    faqTitle="Vanliga frågor om webbdesign i Sala"
    faq={[
      { question: "Vad är UI/UX-design och varför är det viktigt?", answer: "UI (användargränssnitt) och UX (användarupplevelse) handlar om hur din sajt ser ut och fungerar. En bra design i Sala ser till att besökare enkelt hittar vad de letar efter och konverterar till kunder." },
      { question: "Är alla era webbdesigner mobilanpassade?", answer: "Ja, vi använder en mobile-first-strategi för att säkerställa att din hemsida ser fantastisk ut på både smartphones, surfplattor och datorer." },
      { question: "Vad kostar en professionell webbdesign?", answer: "Priset varierar beroende på omfattning och komplexitet. Vi erbjuder alltid skräddarsydda offerter anpassade för småföretag i Västmanland, med transparenta priser utan dolda kostnader." },
      { question: "Hur gör ni hemsidan säljande?", answer: "Genom strategisk placering av Call-to-Action-knappar, en konverteringsoptimerad struktur som guidar besökaren rätt, och en design som bygger förtroende och reducerar friktion." },
      { question: "Är designen unik för mitt företag?", answer: "Ja, vi arbetar aldrig med färdiga mallar. Varje pixel är anpassad efter din specifika verksamhet, målgrupp och varumärkesidentitet." },
      { question: "Hur lång tid tar en designprocess?", answer: "En komplett designprocess tar vanligtvis 2–4 veckor, beroende på projektets omfattning. Du får löpande presentationer och möjlighet att ge feedback." },
    ]}
    testimonial={{
      quote: "Den nya designen har gett oss 40% fler förfrågningar. Kunderna säger att sidan känns proffsig och trovärdig.",
      author: "Anna Lindström",
      role: "Marknadschef, Sala Bygg AB",
    }}
    contentSections={[
      {
        title: "Kundcase: Ny digital identitet för lokal byrå i Sala",
        paragraphs: [
          "En etablerad redovisningsbyrå behövde en ny webbplats som speglade deras professionalism och byggde förtroende hos potentiella kunder i Sala och omnejd. Den gamla sajten var föråldrad, långsam och saknade en tydlig struktur som ledde besökare till kontakt.",
          "Vi genomförde en komplett designprocess med research, wireframes och prototyper innan vi gick in i utvecklingsfasen. Genom att analysera byråns målgrupp och lokala konkurrenter identifierade vi de viktigaste konverteringspunkterna och designade en användarresa som ledde besökare naturligt mot kontaktformuläret.",
          "Den nya designen fokuserade på tydliga call-to-actions, en varm men professionell färgpalett och en mobilanpassad layout som fungerade felfritt på alla enheter. Resultatet blev en 55 % ökning av kontaktförfrågningar och en avhoppsfrekvens som sjönk med 30 % under de första två månaderna.",
        ],
      },
      {
        title: "Designprinciper som driver konvertering",
        paragraphs: [
          "Professionell webbdesign handlar inte bara om estetik – det handlar om att förstå hur människor interagerar med digitala gränssnitt. Vi bygger varje design på beprövade UX-principer som Hick's Law (färre val = snabbare beslut), visuell hierarki och Fitts lag för optimal knappstorlek och placering. Dessa principer är universella men särskilt viktiga för lokala företag i Sala som behöver maximera konverteringen från varje besökare.",
          "Färgval spelar en avgörande roll för konvertering. Vi väljer färgpaletter som inte bara matchar ditt varumärke utan som också skapar rätt emotionell respons hos dina besökare. Kontrastfärger för CTA-knappar leder ögat till den viktigaste handlingen, lugnande bakgrundstoner bygger förtroende och strategisk användning av negativt utrymme skapar andrum för ögat.",
          "Typography är designens ryggrad. Vi parar ihop läsbara brödtexttypsnitt med karaktärsfulla rubrikfonter som ger din sajt personlighet utan att offra läsbarheten. Rätt typografisk hierarki gör det enkelt för besökare att scanna sidan och hitta det de söker på sekunder – avgörande i en värld där uppmärksamheten är en bristvara.",
        ],
      },
      {
        title: "Prestanda-first design för 100/100 PageSpeed",
        paragraphs: [
          "Vacker design behöver inte vara långsam. Vi designar med prestanda som en grundläggande begränsning, inte som en eftertanke. Varje designbeslut utvärderas utifrån dess påverkan på laddningstider och Core Web Vitals. Vi använder moderna bildformat som AVIF, optimerar typsnittsladdning med font-display: swap och minimerar CSS genom att använda ett väl definierat designsystem.",
          "Resultatet är webbplatser som inte bara ser fantastiska ut utan som konsekvent uppnår 100/100 i Google PageSpeed Insights. För företag i Sala innebär detta en dubbel fördel: en design som imponerar på besökare och en teknisk prestanda som imponerar på Google. Den kombinationen av estetik och hastighet är vad som skapar en verklig konkurrensfördel i dagens digitala landskap.",
        ],
      },
      {
        title: "Vanliga frågor om webbdesign",
        paragraphs: [
          "Hur skiljer sig bra design från dålig design? Bra webbdesign guidar besökarens öga, skapar förtroende och gör det enkelt att ta nästa steg – oavsett om det är att fylla i ett formulär eller ringa ett samtal. Dålig design skapar förvirring, saknar tydliga call-to-actions och ger ett oprofessionellt intryck som driver bort potentiella kunder.",
          "Kan ni jobba med min befintliga grafiska profil? Absolut. Vi utgår alltid från ditt befintliga varumärke och bygger vidare på det. Om du saknar en grafisk profil kan vi hjälpa dig att ta fram en komplett visuell identitet som fungerar både digitalt och i tryck – logotyp, färgpalett, typografi och bildspråk som kommunicerar ditt varumärkes värden.",
        ],
      },
    ]}
    relatedServices={[
      { label: "Webbutveckling", href: "/tjanster/webbutveckling" },
      { label: "WordPress-lösningar", href: "/tjanster/wordpress-losningar" },
      { label: "SEO-optimering", href: "/tjanster/seo-optimering" },
    ]}
  />
);

export default WebbdesignPage;
