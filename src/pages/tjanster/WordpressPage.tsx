import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Settings } from "lucide-react";

const WordpressPage = () => (
  <ServicePageTemplate
    title="WordPress-lösningar"
    metaTitle="WordPress-hemsidor Västerås | LRH Konsult"
    metaDescription="Snabba och säkra WordPress-hemsidor för företag i Västerås och Västmanland. Anpassade teman, WooCommerce, säkerhet och prestandaoptimering."
    heroSubheading="WordPress"
    heroHeading="WordPress-lösningar för ditt företag"
    heroDescription="WordPress är ett kraftfullt verktyg när det hanteras av experter. Vi bygger skräddarsydda WordPress-lösningar för företag i Västmanland som kräver en stabil, snabb och lätthanterlig plattform för sin digitala tillväxt."
    whyTitle="Säker WordPress-utveckling för företag i Sala och Köping"
    whyText="Vi ser till att din WordPress-sajt är befriad från tunga plugins och säkerhetsluckor. Våra installationer är optimerade för hastighet, vilket är avgörande för din lokala ranking."
    icon={Settings}
    breadcrumbLabel="WordPress-lösningar"
    features={[
      { title: "Anpassade teman", description: "Skräddarsydda teman som matchar ditt varumärke – inga generiska templates." },
      { title: "WooCommerce", description: "Komplett e-handelslösning med säker betalning, lagerhantering och frakt." },
      { title: "Säkerhet & Skydd", description: "Härdad WordPress-installation med brandvägg, malware-scanning och SSL." },
      { title: "Hög prestanda", description: "Avancerad cachning, bildoptimering och CDN för blixtsnabba laddtider." },
    ]}
    faqTitle="Vanliga frågor om WordPress"
    faq={[
      { question: "Varför är min WordPress-sida långsam?", answer: "Ofta beror det på för många plugins eller dåliga teman. Vi rensar och optimerar din sajt för topprestanda." },
      { question: "Hur ofta behöver WordPress uppdateras?", answer: "Vi rekommenderar månatliga uppdateringar av kärna och tillägg för att bibehålla maximal säkerhet." },
      { question: "Kan jag byta från WordPress till Next.js senare?", answer: "Ja, vi kan hjälpa dig med en smidig migration när ditt företag växer och behöver mer kraft." },
    ]}
    testimonial={{
      quote: "Äntligen en WordPress-sajt som känns snabb och säker. Lucas fixade allt vi behövde och mer därtill.",
      author: "Sofia Berg",
      role: "Grundare, Bergström Design",
    }}
    contentSections={[
      {
        title: "Kundcase: Säkerhetsöversyn och prestandalyft för WordPress",
        paragraphs: [
          "Ett medelstort företag i Köping hade en WordPress-sajt som drabbats av upprepade säkerhetsincidenter och hade laddningstider på över sex sekunder. Deras befintliga webbyrå hade staplat plugin på plugin utan att tänka på helheten, vilket resulterade i en instabil och sårbar plattform.",
          "Vi genomförde en total genomgång av installationen: tog bort 15 onödiga plugins, bytte till ett lättviktstema, implementerade server-side cachning och härdade hela WordPress-kärnan. Laddningstiden sjönk till under 1,5 sekunder och sajten har varit fri från säkerhetsincidenter i över 12 månader. Dessutom förbättrades den organiska trafiken med 35 % tack vare snabbare sidladdning.",
        ],
      },
      {
        title: "Vanliga frågor om WordPress",
        paragraphs: [
          "Är WordPress fortfarande relevant jämfört med moderna ramverk? Ja, WordPress driver fortfarande över 40 % av alla webbplatser globalt och är ett utmärkt val för innehållstunga sajter, bloggar och e-handel. Nyckeln är att ha en expert som konfigurerar det korrekt – utan onödiga plugins och med fokus på prestanda.",
          "Hur skyddar ni min WordPress-sajt mot hackare? Vi implementerar en flerlagersäkerhet som inkluderar brandvägg på servernivå, tvåfaktorsautentisering, begränsade inloggningsförsök, automatiska säkerhetsuppdateringar och dagliga backuper. Vi övervakar även sajten löpande för att upptäcka och åtgärda hot i realtid.",
        ],
      },
    ]}
    relatedServices={[
      { label: "Underhåll & Support", href: "/tjanster/underhall-support" },
      { label: "SEO-optimering", href: "/tjanster/seo-optimering" },
      { label: "Webbdesign", href: "/tjanster/webbdesign" },
    ]}
  />
);

export default WordpressPage;
