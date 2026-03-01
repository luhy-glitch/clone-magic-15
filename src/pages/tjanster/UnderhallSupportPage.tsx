import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Wrench } from "lucide-react";

const UnderhallSupportPage = () => (
  <ServicePageTemplate
    title="Underhåll & Support"
    metaTitle="Underhåll & Support för webbplatser | Trygg webbdrift | LRH Konsult"
    metaDescription="Löpande underhåll, säkerhetsuppdateringar och teknisk support för din webbplats. Dagliga backups och snabb hjälp när du behöver det."
    heroSubheading="Underhåll & Support"
    heroHeading="Underhåll & Support – trygg webbdrift"
    heroDescription="En webbplats kräver löpande underhåll för att vara säker och prestera. Med mitt supportpaket får du lugn och ro – jag tar hand om allt tekniskt så att du kan fokusera på din verksamhet."
    whyTitle="Varför behöver din webbplats löpande underhåll?"
    whyText="En ovårdad webbplats är en säkerhetsrisk. Uppdateringar som missas kan leda till hackade sajter, dålig prestanda och förlorade kunder. Med ett proaktivt underhållsavtal övervakar jag din webbplats dygnet runt, säkerställer dagliga backups och åtgärdar problem innan de påverkar dina besökare."
    icon={Wrench}
    breadcrumbLabel="Underhåll & Support"
    features={[
      { title: "Dagliga backups", description: "Automatiska dagliga backups med snabb återställning om något skulle gå fel." },
      { title: "Säkerhetsuppdateringar", description: "Regelbundna uppdateringar av CMS, plugins och server för att stänga säkerhetshål." },
      { title: "Övervakning dygnet runt", description: "Uptime-monitoring som larmar direkt om din sajt går ner – med snabb åtgärd." },
      { title: "Teknisk support", description: "Snabb hjälp med innehållsuppdateringar, buggfixar och nya funktioner." },
      { title: "Månadsrapport", description: "Tydlig rapport varje månad med status, uppdateringar och rekommendationer." },
    ]}
    testimonial={{
      quote: "Vi sover gott om natten nu. Lucas sköter allt tekniskt och vi kan fokusera på våra kunder istället.",
      author: "Peter Nilsson",
      role: "VD, Nilssons Fastigheter",
    }}
    relatedServices={[
      { label: "Prestanda-optimering", href: "/tjanster/prestanda-optimering" },
      { label: "WordPress-lösningar", href: "/tjanster/wordpress" },
      { label: "Webbutveckling", href: "/tjanster/webbutveckling" },
    ]}
  />
);

export default UnderhallSupportPage;
