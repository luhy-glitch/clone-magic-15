import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Palette } from "lucide-react";

const WebbdesignPage = () => (
  <ServicePageTemplate
    title="Webbdesign"
    metaTitle="Säljande webbdesign i Västerås, Köping & Sala | LRH Konsult"
    metaDescription="Säljande webbdesign i Västerås, Köping & Sala. Vi skapar moderna hemsidor som konverterar. Mobilvänlig design för lokala företag i Västmanland."
    heroSubheading="Webbdesign"
    heroHeading="Webbdesign som engagerar & konverterar"
    heroDescription="Vi levererar modern webbdesign som kombinerar estetik med knivskarp affärsnytta. För företag i Köping, Sala och Västerås skapar vi unika digitala identiteter som stärker varumärket och ökar förtroendet hos lokala kunder."
    whyTitle="Webbdesign som ökar din konvertering i Västmanland"
    whyText="Vi fokuserar på UX (användarupplevelse) för att säkerställa att din hemsida är lättnavigerad. En bra design i Västmanland ska inte bara vara snygg, den ska leda kunden direkt till köp eller kontakt."
    icon={Palette}
    breadcrumbLabel="Webbdesign"
    features={[
      { title: "UI/UX Design", description: "Användarvänliga gränssnitt baserade på research och bästa praxis för maximal konvertering." },
      { title: "Mobile-first approach", description: "Designen börjar med mobilen och skalas upp – för att möta dagens användare där de är." },
      { title: "Varumärkesidentitet", description: "Konsekvent visuellt språk med färger, typografi och grafik som speglar ditt varumärke." },
      { title: "Prototyper & Wireframes", description: "Interaktiva prototyper så att du kan testa och godkänna designen innan utvecklingen börjar." },
    ]}
    faqTitle="Vanliga frågor om lokal webbdesign"
    faq={[
      { question: "Vad kostar en professionell webbdesign?", answer: "Priset varierar beroende på omfattning, men vi erbjuder alltid skräddarsydda offerter anpassade för småföretag i Västmanland." },
      { question: "Hur gör ni hemsidan säljande?", answer: "Genom strategisk placering av Call-to-Action (CTA) och en struktur som guidar besökaren rätt." },
      { question: "Är designen unik för mitt företag?", answer: "Ja, vi arbetar aldrig med färdiga mallar. Varje pixel är anpassad efter din specifika verksamhet." },
    ]}
    testimonial={{
      quote: "Den nya designen har gett oss 40% fler förfrågningar. Kunderna säger att sidan känns proffsig och trovärdig.",
      author: "Anna Lindström",
      role: "Marknadschef, Sala Bygg AB",
    }}
    relatedServices={[
      { label: "Webbutveckling", href: "/tjanster/webbutveckling" },
      { label: "WordPress-lösningar", href: "/tjanster/wordpress-losningar" },
      { label: "SEO-optimering", href: "/tjanster/seo-optimering" },
    ]}
  />
);

export default WebbdesignPage;
