import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Palette } from "lucide-react";

const WebbdesignPage = () => (
  <ServicePageTemplate
    title="Webbdesign"
    metaTitle="Webbdesign i Västerås & Västmanland | UI/UX & Varumärke | LRH Konsult"
    metaDescription="Professionell webbdesign med fokus på UI/UX, mobile-first och varumärkesidentitet för företag i Västmanland. Skapa engagerande digitala upplevelser."
    heroSubheading="Webbdesign"
    heroHeading="Webbdesign som engagerar & konverterar"
    heroDescription="Din webbplats är ditt digitala skyltfönster. Jag skapar moderna, användarvänliga designs som stärker ditt varumärke och omvandlar besökare till kunder – med mobile-first som grund."
    whyTitle="Varför är bra webbdesign avgörande?"
    whyText="Första intrycket avgör. 94% av användarna bedömer ett företag utifrån dess webbdesign. Med genomtänkt UI/UX-design skapar jag en visuell upplevelse som bygger förtroende, guidar besökaren och driver konvertering. Varje designbeslut baseras på beprövade principer och din målgrupps beteende."
    icon={Palette}
    breadcrumbLabel="Webbdesign"
    features={[
      { title: "UI/UX Design", description: "Användarvänliga gränssnitt baserade på research och bästa praxis för maximal konvertering." },
      { title: "Mobile-first approach", description: "Designen börjar med mobilen och skalas upp – för att möta dagens användare där de är." },
      { title: "Varumärkesidentitet", description: "Konsekvent visuellt språk med färger, typografi och grafik som speglar ditt varumärke." },
      { title: "Prototyper & Wireframes", description: "Interaktiva prototyper så att du kan testa och godkänna designen innan utvecklingen börjar." },
    ]}
    testimonial={{
      quote: "Den nya designen har gett oss 40% fler förfrågningar. Kunderna säger att sidan känns proffsig och trovärdig.",
      author: "Anna Lindström",
      role: "Marknadschef, Sala Bygg AB",
    }}
    relatedServices={[
      { label: "Webbutveckling", href: "/tjanster/webbutveckling" },
      { label: "WordPress-lösningar", href: "/tjanster/wordpress" },
      { label: "SEO-optimering", href: "/tjanster/seo-optimering" },
    ]}
  />
);

export default WebbdesignPage;
