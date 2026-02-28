import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Settings } from "lucide-react";

const WordpressPage = () => (
  <ServicePageTemplate
    title="WordPress-lösningar"
    metaTitle="WordPress-lösningar i Västmanland | Säkra & Snabba WP-sajter | LRH Konsult"
    metaDescription="Professionella WordPress-lösningar med anpassade teman, WooCommerce och hög säkerhet. WordPress-utvecklare i Västerås och Västmanland."
    heroSubheading="WordPress"
    heroHeading="WordPress-lösningar för ditt företag"
    heroDescription="WordPress driver över 40% av alla webbplatser på nätet. Jag bygger säkra, snabba och anpassade WordPress-sajter som är enkla att hantera och som ger ditt företag en professionell närvaro."
    whyTitle="Varför välja WordPress?"
    whyText="WordPress är världens mest använda CMS av goda skäl – det är flexibelt, kostnadseffektivt och har ett enormt ekosystem av plugins och teman. Men utan rätt konfiguration kan det bli långsamt och sårbart. Jag ser till att din WordPress-sajt är optimerad för hastighet, säkerhet och sökmotorer från dag ett."
    icon={Settings}
    breadcrumbLabel="WordPress-lösningar"
    features={[
      { title: "Anpassade teman", description: "Skräddarsydda teman som matchar ditt varumärke – inga generiska templates." },
      { title: "WooCommerce", description: "Komplett e-handelslösning med säker betalning, lagerhantering och frakt." },
      { title: "Säkerhet & Skydd", description: "Härdad WordPress-installation med brandvägg, malware-scanning och SSL." },
      { title: "Hög prestanda", description: "Avancerad cachning, bildoptimering och CDN för blixtsnabba laddtider." },
    ]}
    testimonial={{
      quote: "Äntligen en WordPress-sajt som känns snabb och säker. Lucas fixade allt vi behövde och mer därtill.",
      author: "Sofia Berg",
      role: "Grundare, Bergström Design",
    }}
  />
);

export default WordpressPage;
