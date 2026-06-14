import ServicePageTemplate from "@/components/ServicePageTemplate";
import { ShoppingCart } from "lucide-react";

const EcommerceHomePage = () => (
  <ServicePageTemplate
    title="E-handelslösningar"
    metaTitle="E-handelslösningar – Webshop design & SEO | LRH Konsult"
    metaDescription="E-handelslösningar för Västmanland. Snabba webshop med checkout, SEO och Google Shopping. 100/100 PageSpeed och mobile-optimerad design som ökar försäljning."
    heroSubheading="E-handelslösningar"
    heroHeading="Webshop som säljer – moderna e-handelslösningar för Mälardalen"
    heroDescription="En webshop utan försäljning är bara en brochure. Vi bygger e-handelslösningar optimerade för konvertering: snabb checkout, Google Shopping-integration, lokal leverans och SEO som gör att kunderna hittar dina produkter."
    whyTitle="Varför e-handel behöver en modern hemsida"
    whyText="Genomsnittlig konverteringsgrad på webshop är 2%. Vi bygber webshop med 4-6% konvertering genom snabb teknik, säker checkout och smart produktrekomendation. Det betyder dubbla försäljning från samma trafik."
    icon={ShoppingCart}
    breadcrumbLabel="E-handelslösningar"
    features={[
      { title: "Snabb checkout", description: "Säker betaling via Stripe, Klarna, PayPal. 1-click checkout för återkommande kunder. Minska avhopp med 40% genom enkel process." },
      { title: "Google Shopping", description: "Dina produkter syns direkt i Google Shopping när folk söker. Högre konvertering än Google Ads eftersom folk redan letar efter din produkttyp." },
      { title: "Lager & inventering", description: "Automatisk uppdatering av lagerstatus. Begränsa antal produkter, visa 'slutsålda', eller sätt upp backorder-system. Allt realtid." },
      { title: "Produktrekommendation", description: "Visa 'ofta köpt tillsammans', 'andra såg på', 'toppsäljare'. Öka genomsnittligt ordervärde med 20-30%." },
      { title: "SEO för e-handel", description: "Ranka för produktsökningar lokalt och nationellt. 'Träningssko Västerås', 'underkläder online', 'möbler nära mig' osv." },
    ]}
    process={[
      { step: "1", title: "Strategi & produktanalys", description: "Vi analyserar dina produkter, dina konkurrenter, och identifierar vilka sökord som driver försäljning. Vi designar webshopen för att optimera dessa sökvägar." },
      { step: "2", title: "Design & UX", description: "Vi skapar en intuitiv webshop med snabbt produktfilter, bra foton, detaljbeskrivningar och säker checkout. Varje steg testats för konvertering." },
      { step: "3", title: "Integrationer", description: "Vi integrerar Stripe, Klarna, PayPal för betalning. Vi länkar Google Shopping feed. Vi sätter upp automatisk lagerspegla från ditt POS-system eller leverantör." },
      { step: "4", title: "Lansering & optimering", description: "Vi lanserar webshopen, sätter upp Google Analytics 4, och monitorer konverteringsgrad. Vi optimerar kontinuerligt baserat på data." },
    ]}
    contentSections={[
      {
        title: "Varför e-handel är framtiden för kleinbutiker",
        paragraphs: [
          "En trafikant går in i en fysisk butik, ser en produkt han är intresserad av, men återvänder senare för att köpa online. Om du inte har en webshop förlorar du denna försäljning. E-handel öppnar upp försäljning 24/7, utan att du behöver anställa ytterligare personal på butiken.",
          "E-handel öppnar också upp regionala och nationella marknader. En liten butik i Västerås kan nå kunder från Stockholm, Malmö eller Norge utan att öppna nya fysiska butiker. Det är den mest kostnadseffektiva vägen till tillväxt.",
          "Modern e-handel är inte bara en website – det är ett helt system: automatisk lagerspegla, betalningshantering, Google Shopping-integration och kundkommunikation. Vi bygger allt detta för dig så du kan fokusera på att välja rätt produkter.",
        ],
      },
      {
        title: "Så bygger vi en webshop som säljer",
        paragraphs: [
          "Många lokala butiker har stabil försäljning i den fysiska butiken men saknar online-närvaro – och ser samtidigt hur konkurrenter växer genom e-handel. Steget till en egen webshop behöver inte vara komplicerat, men det måste göras rätt för att faktiskt generera försäljning.",
          "Vi bygger professionella webshoppar med tydlig kategorifiltrering, detaljerade produktbeskrivningar, snygga produktfoton och en enkel, snabb checkout. Vi integrerar Google Shopping och funktioner som bevakningslistor så att kunder får notis när nya produkter kommer in.",
          "Lika viktigt som butiken är logistiken och betalflödet. Vi hjälper dig sätta upp smidiga fraktlösningar – från lokal hämtning till nationell frakt – och betalmetoder som Klarna och Swish, så att kunderna kan handla utan friktion oavsett enhet.",
        ],
      },
      {
        title: "Google Shopping – ditt viktigaste säljverktyg",
        paragraphs: [
          "Google Shopping visar dina produkter överst i sökresultaten när folk söker. En person som söker 'träningskläder' ser Google Shopping resultat före de organiska resultaten. Det betyder högre synlighet och högre konvertering än Google Ads.",
          "Vi sätter upp din Google Shopping feed automatiskt så att alla dina produkter, priser, lager och bilder är aktuella. Vi optimerar produkttitlar och beskrivningar så att de rankar för rätta sökord. Vi moniterer också Google Shopping-trafik och konvertering så vi kan se vilka produkter som säljer bäst.",
          "Google Shopping är också lägre kostnad än Google Ads för många produkttyper. Du betalar bara per klick som resulterar i en order, inte per impression. Det gör det perfekt för kleinbutiker med begränsat marknadsföringsbudget.",
        ],
      },
    ]}
    faqTitle="Vanliga frågor om e-handelslösningar"
    faq={[
      { question: "Vad är kostnaden för en webshop?", answer: "En webshop för 100-500 produkter kostar 80-150k kr. Priset beror på komplexitet (behöver du lagerspegla från POS? frakt-integration? avancerad produktfiltrering?). ROI är ofta 2-4x första året genom ökad försäljning." },
      { question: "Vilka betalningssätt integrerar ni?", answer: "Vi integrerar Stripe, Klarna, PayPal och Swish. Vi kan också integrera andra gateways. Vi rekommenderar Klarna för svenska webshops då det ökar konvertering med 15-25% genom att ge kunder möjlighet att 'köp nu, betala senare'." },
      { question: "Hur kopplar vi Google Shopping?", answer: "Vi sätter upp en automatisk produktfeed som uppdateras dagligen med dina produkter, priser och lager från ditt POS-system eller från en CSV-fil. Google hämtar denna feed och visar dina produkter i Google Shopping. Vi optimerar feed för högre visibility." },
      { question: "Kan vi lagerspegla från vårt POS-system?", answer: "Ja! Vi integrerar med Lightspeed, Square, Shopify POS och andra system. Lagerstatus uppdateras automatiskt på webshopen när du säljer i butiken. Det minskar risken för överförsäljning och gör inventeringen enklare." },
      { question: "Hur höjer vi konverteringsgrad på webshopen?", answer: "Vi optimerar genom: snabb checkout (1-click), Klarna-integration, bra produktfoton och beskrivningar, kundrecensioner, 'ofta köpt tillsammans' rekommendationer, och A/B-testning av call-to-actions. Genomsnittlig förbättring: 2% → 4-5% konverteringsgrad." },
    ]}
    relatedServices={[
      { label: "SEO-optimering", href: "/tjanster/seo-optimering" },
      { label: "Webbutveckling", href: "/tjanster/webbutveckling" },
      { label: "Google Shopping", href: "/tjanster/seo-optimering" },
    ]}
  />
);

export default EcommerceHomePage;
