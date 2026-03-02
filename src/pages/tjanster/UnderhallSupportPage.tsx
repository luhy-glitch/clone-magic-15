import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Wrench } from "lucide-react";

const UnderhallSupportPage = () => (
  <ServicePageTemplate
    title="Underhåll & Support"
    metaTitle="Personlig support & underhåll för din hemsida i Västmanland | LRH Konsult"
    metaDescription="Personlig support & underhåll för din hemsida i Västmanland. Vi finns i Västerås för snabb hjälp. Säkerhet, backup och trygghet för lokala företag."
    heroSubheading="Underhåll & Support"
    heroHeading="Underhåll & Support – trygg webbdrift"
    heroDescription="Lämna det tekniska till oss. Vi erbjuder marknadens tryggaste underhåll och support för företag i hela Västmanlands län. Vi ser till att din hemsida alltid är uppdaterad, snabb och skyddad mot digitala hot."
    whyTitle="Din lokala IT-partner i Västerås och Västmanland"
    whyText="Med personlig support i Västerås får du hjälp direkt när du behöver det. Vi övervakar din sajt dygnet runt så att du kan fokusera på att driva din verksamhet i Köping eller Sala."
    icon={Wrench}
    breadcrumbLabel="Underhåll & Support"
    features={[
      { title: "Dagliga backups", description: "Automatiska dagliga backups med snabb återställning om något skulle gå fel." },
      { title: "Säkerhetsuppdateringar", description: "Regelbundna uppdateringar av CMS, plugins och server för att stänga säkerhetshål." },
      { title: "Övervakning dygnet runt", description: "Uptime-monitoring som larmar direkt om din sajt går ner – med snabb åtgärd." },
      { title: "Teknisk support", description: "Snabb hjälp med innehållsuppdateringar, buggfixar och nya funktioner." },
      { title: "Månadsrapport", description: "Tydlig rapport varje månad med status, uppdateringar och rekommendationer." },
    ]}
    faqTitle="Vanliga frågor om webbsupport"
    faq={[
      { question: "Vad händer om min hemsida går ner?", answer: "Vi övervakar sajten dygnet runt och återställer den direkt från våra dagliga backuper om något sker." },
      { question: "Hjälper ni till med e-post och domäner också?", answer: "Ja, vi kan hantera hela din digitala infrastruktur för en krångelfri vardag." },
      { question: "Hur kontaktar jag supporten?", answer: "Du når oss via mejl eller telefon, vi finns lokalt i Västmanland för snabb hantering." },
    ]}
    testimonial={{
      quote: "Vi sover gott om natten nu. Lucas sköter allt tekniskt och vi kan fokusera på våra kunder istället.",
      author: "Peter Nilsson",
      role: "VD, Nilssons Fastigheter",
    }}
    relatedServices={[
      { label: "Prestanda-optimering", href: "/tjanster/prestanda-optimering" },
      { label: "WordPress-lösningar", href: "/tjanster/wordpress-losningar" },
      { label: "Webbutveckling", href: "/tjanster/webbutveckling" },
    ]}
  />
);

export default UnderhallSupportPage;
