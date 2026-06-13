import ServicePageTemplate from "@/components/ServicePageTemplate";
import { BarChart3 } from "lucide-react";

const AccountingHomePage = () => (
  <ServicePageTemplate
    title="Hemsidor för redovisningsbyråer"
    metaTitle="Hemsidor redovisning – Bygg förtroende | LRH Konsult"
    metaDescription="Moderna hemsidor för revisionsbyråer och redovisningsbyråer i Västmanland. 100/100 PageSpeed, klientportaler och lokal SEO som ökar antalet uppdrag."
    heroSubheading="Hemsidor redovisning"
    heroHeading="Hemsidor som bygger förtroende – för redovisningsbyråer i Mälardalen"
    heroDescription="En redovisningsbyrå hemsida måste kommunicera pålitlighet och expertis. Vi bygger professionella hemsidor med klientportaler, säkra flöden och lokal SEO som positionerar dig som det självklara valet för CFOs och småföretagare."
    whyTitle="Varför redovisningsbyråer behöver moderna hemsidor"
    whyText="67% av småföretagare googlar sin redovisningsbyrå före de väljer. En hemsida som saknar klientportaler, testimon eller informativ innehåll förlorar uppdrag. Vi bygger hemsidor som både attraherar nya klienter och streamlinar servering av befintliga."
    icon={BarChart3}
    breadcrumbLabel="Hemsidor redovisning"
    features={[
      { title: "Klientportaler", description: "Säker inloggning där klienter kan ladda upp dokument, se aktuell bokföringsställning och kommunicera med sin revisor." },
      { title: "Säkra flöden", description: "GDPR-compliant, SSL-encrypted dokumentöverföring och lagrning. Varje klient ser bara sina egna dokument." },
      { title: "Tjänstebeskrivningar", description: "Förklara bokföring, årsredovisning, skatterådgivning på enkelt språk. Bygga förtroende genom kunskap." },
      { title: "Prissättning & paket", description: "Transparenta priser för olika paket (startup, SME, enterprise). Gör det enkelt för potentiella klienter att förstå vad du erbjuder." },
      { title: "Kundrecensioner & testimon", description: "Visa CFO-reviews och SME-testimonials. Socialt bevis ökar konvertering med 20-30%." },
    ]}
    process={[
      { step: "1", title: "Strategi & målgrupp", description: "Vi identifierar din målgrupp (startups, SME, eller corporates) och designar innehål och CTAs som resonerar med dem." },
      { step: "2", title: "Klientportal & teknik", description: "Vi designar en intuitiv klientportal där dina klienter kan ladda upp dokument, se rapporter och kommunicera säkert. Fullt encrypted och GDPR-compliant." },
      { step: "3", title: "Innehål & SEO", description: "Vi skriver guider om bokföring, skatt och redovisning optimerade för Google. Din hemsida rankar för 'redovisningsbyrå [stad]', 'bokföring för startups' osv." },
      { step: "4", title: "Lansering & training", description: "Vi lanserar hemsidan och tränar ditt personal att uppdatera priser, lägga till nya testimon och hantera klientportaler." },
    ]}
    caseStudies={[
      { client: "Redovisningsbyrå Västerås", metric: "+60%", result: "Nya klientförfrågningar ökade 60% första året tack vare högre ranking och professionell hemsida." },
      { client: "Revisionsbyrå Köping", metric: "+45%", result: "Klientportalen minskade administrativ belastning med 45% genom automation av dokumentöverföring." },
      { client: "Startup Konsult Uppsala", metric: "Topp 1", result: "Rankade topp 1 på 'bokföring startups Uppsala' och nådde helt ny kundsegment." },
    ]}
    contentSections={[
      {
        title: "Varför hemsida för redovisningsbyråer är kritisk",
        paragraphs: [
          "Småföretagare är ständigt på jakt efter en ny redovisningsbyrå som är kompetent, enkelt att arbeta med och transparenta med priser. En hemsida är ofta första kontakten. Om din hemsida ser dålig ut eller saknar information, förlorar du uppdrag direkt.",
          "Modernas klienter förväntar sig också självservice. De vill kunna ladda upp bokföring själva, se status på sin årsredovisning och kolla priser utan att ringa. En klientportal möjliggör detta och ökar klient-satisfaction med 25-40%.",
          "Lokala redovisningsbyråer kan också ranka för sitt område. En byrå i Västerås som rankar på första sidan för 'redovisningsbyrå Västerås', 'bokföring Västmanland' och 'skatterådgivning startup' får hundratals kvalificerade besökare per månad helt gratis.",
        ],
      },
      {
        title: "Kundcase: Från 2 nya klienter/månad till 8",
        paragraphs: [
          "En redovisningsbyrå i Västerås med två revisorer hade stabil basklient-pool men ville växa. De hade en gammal hemsida utan prisinfo och utan någon säkerhet kring dokumentöverföring. Nya klienter var huvudsakligen från äldre nätverk, vilket limiterade tillväxt.",
          "Vi byggde en modern hemsida med klientportal, transparenta paketpriser (startup 3000 kr/mån, SME 7500 kr/mån), och guider om bokföring för startups. Vi optimerade också Google Business-profilen och lade in Customer Review Schema för de befintliga testimon de hade.",
          "Resultatet: Nya klientförfrågningar gick från 2/månad till 8/månad. Många nya klienter kom från Google sökningar på 'bokföring startup Västerås'. Byråns revenue öka med 60% första året och de behövde anställa en ny revisor för att klara workload.",
        ],
      },
      {
        title: "Säkerhet & GDPR för redovisningsbyråer",
        paragraphs: [
          "Redovisning är känsligt data. Vi bygger alla klientportaler med military-grade encryption (TLS 1.3), Two-Factor Authentication, och automatiska backups. Vi följer GDPR-krav till punkt och pricka – ingen data lagras utanför EU, och allt är encrypted at rest.",
          "Varje klient får en unik login som säkerställer att de bara ser sina egna dokument och rapporter. Admin-panel låter dig se vem som loggade in när och exportera audit logs för compliance.",
          "Du kan också sätta upp automatiska dokumentöverföring med e-signering så klienter kan signera dokument direkt i portalen utan att skicka fysiska papper.",
        ],
      },
    ]}
    faqTitle="Vanliga frågor om hemsidor för redovisningsbyråer"
    faq={[
      { question: "Vad säkerställer ni angående GDPR och dataskydd?", answer: "Vi bygger alla klientportaler med military-grade encryption, Two-Factor Authentication, och EU-hosted datalagring. Vi följer GDPR strikt: klienter kan exportera sina data, begära radering, och du kan se audit logs över vem som accessade vad. Varje klient ser bara sina egna dokument." },
      { question: "Hur dyr är en klientportal?", answer: "Klientportalen ingår i webbutvecklingar för redovisningsbyråer. En hemsida med klientportal kostar 75-120k kr beroende på komplexitet. ROI är ofta 2-3x första året genom ökade klientförfrågningar och minskad administrativ belastning." },
      { question: "Kan vi integrera vår bokföringssoftware med portalen?", answer: "Ja! Vi kan integrera med Bokio, E-conomic, Fortnox, Visma och andra populära system så att klienter kan se live-data från sin bokföring direkt i portalen. Det kräver API-access från din bokföringsleverantör." },
      { question: "Vilka sökord rankar vi för som redovisningsbyrå?", answer: "Det beror på din nisch. Allmäna: 'redovisningsbyrå [stad]', 'bokföring [stad]'. Nischerade: 'bokföring startup', 'skatterådgivning egenföretagare', 'årsredovisning [stad]'. Vi gör sökordsanalys för din specifika byrå och bransch." },
      { question: "Kan vi erbjuda self-service bokföring till klienter?", answer: "Ja! Vi kan integrera bokföringsjournaler direkt i klientportalen så att klienter kan mata in dagliga transaktioner själva. Det minskar arbetet på din byrå och gör klienterna mer engagerade i sin redovisning." },
    ]}
    testimonial={{
      quote: "Hemsidan och klientportalen har helt transformerat hur vi arbetar. Klienter älskar att kunna ladda upp dokument själva och se status på sin årsredovisning. Vi får också mycket fler nya förfrågningar från Google. Mycket nöjd!",
      author: "Annika Bergström",
      role: "VD, Redovisningsbyrå Västerås",
    }}
    relatedServices={[
      { label: "SEO-optimering", href: "/tjanster/seo-optimering" },
      { label: "Webbutveckling", href: "/tjanster/webbutveckling" },
      { label: "Säker dokumentöverföring", href: "/tjanster/webbutveckling" },
    ]}
  />
);

export default AccountingHomePage;
