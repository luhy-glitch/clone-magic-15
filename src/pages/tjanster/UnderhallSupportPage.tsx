import ServicePageTemplate from "@/components/ServicePageTemplate";
import { Wrench } from "lucide-react";

const UnderhallSupportPage = () => (
  <ServicePageTemplate
    title="Underhåll & Support"
    metaTitle="Webbunderhåll & support Västmanland | LRH Konsult"
    metaDescription="Personlig webbsupport och underhåll i Västmanland. Dagliga backuper, säkerhetsuppdateringar och dygnet-runt-övervakning för företag i Västerås."
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
    contentSections={[
      {
        title: "Kundcase: Trygg drift för fastighetsbolag",
        paragraphs: [
          "Ett fastighetsbolag i Västerås med flera hundra hyresgäster förlitade sig på sin webbplats för felanmälningar, kontaktformulär och information. När sajten gick ner under en helg förlorade de viktiga felanmälningar och fick hantera frustrerade hyresgäster via telefon under måndagen.",
          "Vi tog över driften och implementerade ett komplett övervaknings- och backupsystem. Sajten övervakas nu dygnet runt med automatiska larm vid driftstörningar, dagliga backuper med möjlighet till återställning inom 15 minuter, samt månatliga säkerhetsuppdateringar. Sedan vi tog över har sajten haft 99,98 % upptid och bolaget har inte missat en enda felanmälan.",
        ],
      },
      {
        title: "Vanliga frågor om underhåll och support",
        paragraphs: [
          "Vad ingår i ett månadsavtal för webbunderhåll? Våra månadsavtal inkluderar dagliga backuper, säkerhetsuppdateringar, uptime-övervakning, teknisk support via mejl och telefon, samt en månadsrapport med status och rekommendationer. Vi anpassar alltid paketet efter din verksamhets behov och budget.",
          "Kan ni ta över driften av en sajt som någon annan har byggt? Ja, vi tar regelbundet över webbplatser som byggts av andra byråer eller frilansare. Vi börjar alltid med en teknisk genomgång för att identifiera eventuella problem och säkerställa att vi har full kontroll över alla system innan vi lägger in sajten i vårt övervakningssystem.",
        ],
      },
    ]}
    relatedServices={[
      { label: "Prestanda-optimering", href: "/tjanster/prestanda-optimering" },
      { label: "WordPress-lösningar", href: "/tjanster/wordpress-losningar" },
      { label: "Webbutveckling", href: "/tjanster/webbutveckling" },
    ]}
  />
);

export default UnderhallSupportPage;
