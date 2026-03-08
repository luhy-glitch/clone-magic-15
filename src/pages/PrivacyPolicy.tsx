import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageHead from "@/components/PageHead";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHead
        title="Integritetspolicy | LRH Konsult"
        description="Läs om hur LRH Konsult hanterar dina personuppgifter enligt GDPR. Information om cookies, dataskydd och dina rättigheter."
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={16} /> Tillbaka till startsidan
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">Integritetspolicy</h1>

        <div className="prose prose-neutral max-w-none space-y-6 text-foreground/90 text-sm sm:text-base leading-[1.6]">
          <p>
            LRH Konsult värnar om din integritet. Denna policy beskriver vilka uppgifter vi samlar in, hur de behandlas och dina rättigheter enligt GDPR.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">1. Vilka uppgifter samlar vi in?</h2>
          <p>Vi samlar in uppgifter som du själv lämnar via vårt kontaktformulär:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Namn</li>
            <li>E-postadress</li>
            <li>Ämne och meddelande</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8">2. Varför samlar vi in uppgifterna?</h2>
          <p>Vi behandlar dina personuppgifter för att:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Besvara dina förfrågningar</li>
            <li>Tillhandahålla våra tjänster</li>
            <li>Förbättra vår webbplats</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8">3. Hantering av lead-data (CRM)</h2>
          <p>
            Uppgifter som skickas via kontaktformuläret lagras i vårt interna CRM-system för att möjliggöra uppföljning och ärendehantering. Åtkomsten till detta system är skyddad med sessionsbaserad autentisering och IP-baserad rate-limiting. Endast behörig personal har tillgång till lead-data, och all kommunikation sker via krypterade anslutningar (HTTPS). Data sparas så länge det är nödvändigt för att fullfölja kundrelationen och raderas på begäran.
          </p>

          <h2 className="text-xl font-bold text-foreground mt-8">4. Cookies</h2>
          <p>
            Vår webbplats använder cookies för att förbättra din upplevelse. En cookie är en liten textfil som sparas på din enhet. Vi använder:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Nödvändiga cookies</strong> – krävs för att webbplatsen ska fungera</li>
            <li><strong>Analyscookies</strong> – hjälper oss förstå hur besökare använder sidan</li>
          </ul>
          <p>Du kan när som helst radera cookies via din webbläsares inställningar.</p>

          <h2 className="text-xl font-bold text-foreground mt-8">5. Dina rättigheter</h2>
          <p>Enligt GDPR har du rätt att:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Begära tillgång till dina personuppgifter</li>
            <li>Begära rättelse eller radering</li>
            <li>Invända mot behandling</li>
            <li>Begära dataportabilitet</li>
            <li>Lämna klagomål till Integritetsskyddsmyndigheten (IMY)</li>
          </ul>

          <h2 className="text-xl font-bold text-foreground mt-8">6. Kontakt</h2>
          <p>Har du frågor om hur vi hanterar dina personuppgifter? Kontakta oss:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>E-post: lucas@lrhkonsult.se</li>
            <li>Telefon: 070 460 65 78</li>
          </ul>

          <p className="text-muted-foreground mt-8 text-xs">Senast uppdaterad: mars 2026</p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;