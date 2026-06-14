import ServicePageTemplate from "@/components/ServicePageTemplate";
import { UtensilsCrossed } from "lucide-react";

const RestaurantHomePage = () => (
  <ServicePageTemplate
    title="Hemsidor för restaurang"
    metaTitle="Hemsidor restaurang – Bokningar & SEO | LRH Konsult"
    metaDescription="Moderna hemsidor för restauranger i Västmanland. Online-meny, bokningssystem och lokal SEO som fyller borden. 100/100 PageSpeed."
    heroSubheading="Hemsidor restaurang"
    heroHeading="Hemsidor som fyller dina bord – för restauranger i Mälardalen"
    heroDescription="En restaurant hemsida är inte bara en menu – det är ditt viktigaste säljverktyg. Vi bygger blixtsnabba hemsidor med bokningssystem, Google Business-optimering och lokal SEO som direkt ökar antalet gäster."
    whyTitle="Varför restauranger behöver moderna hemsidor"
    whyText="70% av restauranger söks på mobilen. En långsam hemsida utan bokningssystem betyder förlorad affär. Vi bygger hemsidor som laddar under 1 sekund, rangerar högt på Google Maps och öppnar för onlinebokningar dygnet runt."
    icon={UtensilsCrossed}
    breadcrumbLabel="Hemsidor restaurang"
    features={[
      { title: "Onlinebokningssystem", description: "Integrera med Dine, TheFork eller egen bokningslösning. Gäster bokar direkt utan att ringa." },
      { title: "Digital meny", description: "Uppdatera menyn i realtid. Gäster ser aktuella rätter, priser och allergiinformation från sin mobil." },
      { title: "Google Maps & lokal SEO", description: "Ranka högt i Google Maps och lokala sökningar som 'restaurang [stad]' eller 'brunch nära mig'." },
      { title: "Betalning & leveranssystem", description: "För restauranger med take-away: integrera Wolt, Foodora eller eget system för onlinebeställningar." },
      { title: "Mobiloptimerat design", description: "100% responsiv – reservering och betalning fungerar perfekt på alla enheter." },
    ]}
    process={[
      { step: "1", title: "Analys & strategi", description: "Vi kartlägger dina konkurrenter i området, identifierar vilka keywords du behöver ranka för, och designar en hemsida som konverterar besökare till gäster." },
      { step: "2", title: "Design & teknik", description: "Vi skapar en designspecifik för restaurang: smakfull design, god bildhantering av maträtter, och integration med bokningssystem." },
      { step: "3", title: "SEO & Google Maps", description: "Vi optimerar din Google Business-profil, säkerställer rätt NAP-data (namn, adress, telefon) och implementerar lokal schema markup för restauranger." },
      { step: "4", title: "Lansering & support", description: "Vi lanserar hemsidan, tränar ditt personal att uppdatera menyn, och moniterar ranking för lokala sökningar." },
    ]}
    contentSections={[
      {
        title: "Varför restauranger behöver en hemsida 2026",
        paragraphs: [
          "Före en reservering googlar 85% av gäster restaurangen. De kollar: öppettider, meny, recensioner och bokningsalternativ. En hemsida som saknar dessa element förlorar potentiella gäster innan de ens ringer.",
          "En restaurant hemsida bör vara snabb (gäster browsear på mobilen medan de väntar i kön), snygg (matfoton är viktigast), och funktionell (bokningssystem måste fungera felfritt). Vi bygger precis detta.",
          "För restauranger är lokal SEO kritisk. En restaurang i Västerås konkurrerar med 50+ andra restauranger. Google Maps-ranking kan göra skillnaden mellan att vara fulltecknad eller tom.",
        ],
      },
      {
        title: "Så får din restaurang fler bokningar online",
        paragraphs: [
          "Många restauranger har en trogen kundkrets men en föråldrad hemsida som laddar långsamt, saknar uppdaterad meny och inte har någon riktig bokningsfunktion – bara ett kontaktformulär som sällan kollas. Det innebär missade bokningar varje vecka.",
          "Vi bygger moderna restauranghemsidor med levande meny, integrerad bokningsfunktion och aptitliga maträttsfoton. Sidan optimeras för lokala sökningar – som restaurang Västerås eller brunch i centrum – så att hungriga gäster hittar dig i exakt rätt ögonblick.",
          "Med en snabb, mobilanpassad sida och bokning direkt på webben blir det lika lätt för gästen att boka bord som att tänka tanken – vilket gör att fler av besöken på sajten faktiskt blir gäster vid bordet.",
        ],
      },
      {
        title: "Meny-hantering & uppdateringar",
        paragraphs: [
          "Vi bygger alla restaurant-hemsidor med ett enkelt CMS så att du själv kan uppdatera menyn utan teknisk kunskap. Lägg till nya rätter, uppdatera priser, markera allergi-information – allt utan att ringa oss.",
          "Matfoton är kritiska. Vi hjälper dig att ta professionella foton av dina bästa rätter (eller vi hjälper dig hitta en fotograf). Bra maträtter-foton ökar bokningar med 20-30%.",
          "Du kan också sätta 'begränsad meny' på vissa dagar (lunch vs dinner, fredags-specialer osv). Flexibiliteten är viktig för restauranger som ändrar erbjudanden ofta.",
        ],
      },
    ]}
    faqTitle="Vanliga frågor om hemsidor för restauranger"
    faq={[
      { question: "Vilka bokningssystem integrerar ni med?", answer: "Vi integrerar med Dine, TheFork, Instant, Bentobox och andra populära system. Vi kan också bygga en custom bokningslösning om du behöver något speciellt. Vi rekommenderar Dine för de flesta restauranger då det är enkelt att använda och integrar bra med POS-system." },
      { question: "Kan gäster betala online för reservering?", answer: "Ja. Vi kan integrera betalningssystem (Stripe, Klarna osv) så att gäster kan säkra sin reservation med en depå. För take-away-beställningar kan de betala helt online. Det minskar no-shows och aumentar antalet beställningar." },
      { question: "Hur mycket kostar en restaurant-hemsida?", answer: "En restaurant-hemsida med bokningssystem kostar mellan 60-100k kr. Inkluderat är design, booking-integration, 100/100 PageSpeed, mobile-optimization, lokal SEO och 3 månaders support. Många restauranger tjänar tillbaka investeringen inom 2-3 månader genom ökad bokningsvolym." },
      { question: "Kan vi uppdatera menyn själva?", answer: "Ja! Vi bygger ett enkelt admin-gränssnitt där du kan uppdatera menyn, priser, allergi-information och foto utan teknisk kunskap. Du kan också publicera vecko-specialer, happy hour-info och andra uppdateringar direkt." },
      { question: "Behöver vi uppdatera Google Maps regelbundet?", answer: "Ja, det hjälper ranking. Vi sätter upp ett system så du kan lägga upp posts på Google Business-profilen (foto av ny rätt, special menu osv) direkt från ditt telefon. Det tar 30 sekunder och boost din synlighet på Google Maps." },
    ]}
    relatedServices={[
      { label: "SEO-optimering", href: "/tjanster/seo-optimering" },
      { label: "Webbutveckling", href: "/tjanster/webbutveckling" },
      { label: "Google Business", href: "/tjanster/seo-optimering" },
    ]}
  />
);

export default RestaurantHomePage;
