import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import AnimatedSection from "@/components/AnimatedSection";
import Contact from "@/components/Contact";
import { Link } from "react-router-dom";
import { ArrowRight, UtensilsCrossed } from "lucide-react";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Hemsida för restauranger i Sala",
      "provider": {
        "@type": "ProfessionalService",
        "name": "LRH Konsult",
        "telephone": "+46704606578",
        "email": "lucas@lrhkonsult.se",
      },
      "areaServed": { "@type": "City", "name": "Sala" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Vad kostar en hemsida för en restaurang i Sala?", "acceptedAnswer": { "@type": "Answer", "text": "Vi erbjuder paket från 5 000 kr anpassade för restaurangbranschen. Kontakta oss för en skräddarsydd offert." } },
        { "@type": "Question", "name": "Kan ni integrera ett bokningssystem?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, vi integrerar bokningssystem, menyer och öppettider direkt i din hemsida för maximal konvertering." } },
      ],
    },
  ],
};

const RestaurangerSala = () => (
  <div className="min-h-screen">
    <PageHead
      title="Hemsida för Restauranger i Sala | LRH Konsult"
      description="Snabba hemsidor för restauranger och caféer i Sala. Mobilanpassad design, lokal SEO och bordsbokningar som ökar din omsättning."
      jsonLd={jsonLd}
    />
    <Navbar />
    <main className="pt-16">
      <section className="relative bg-hero text-hero-foreground py-16 sm:py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <UtensilsCrossed size={28} className="text-primary" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight font-serif">
                Hemsida för restauranger i Sala
              </h1>
              <p className="mt-6 text-lg text-hero-muted max-w-2xl leading-relaxed">
                Fyll fler bord med en blixtsnabb hemsida som visar din meny, dina öppettider och gör det enkelt att boka – allt optimerat för att rankas högst på Google i Sala.
              </p>
              <Link to="/gratis-seo-analys" className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25">
                Få en gratis SEO-analys <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-primary mt-12 mb-4">Blixtsnabb laddningstid ger fler bordsbokningar i Sala</h2>
            <div className="space-y-5 text-muted-foreground leading-[1.6] text-base">
              <p>När en hungrig kund i Sala söker efter en restaurang har du bara bråkdelen av en sekund på dig att fånga deras intresse. Om din hemsida är långsam riskerar du att kunden tröttnar och väljer en konkurrent istället. Genom att nå 100/100 i PageSpeed säkerställer vi att din restaurangsida laddar blixtsnabbt, oavsett om gästen sitter på tåget eller promenerar på Stora Torget.</p>
              <p>En snabb webbplats med en LCP under 1.5 sekunder är avgörande för din SEO-ranking, då Google premierar sidor som ger en sömlös användarupplevelse. För LRH Konsult är prestanda kärnan i varje projekt, eftersom vi vet att snabbhet direkt korrelerar med fler nöjda gäster och högre omsättning.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-section-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-primary mt-12 mb-4">Meny-optimering och mobilvänlig design för Salas krogar</h2>
            <div className="space-y-5 text-muted-foreground leading-[1.6] text-base">
              <p>Det absolut viktigaste på en restaurangs hemsida är menyn, men många i Sala använder fortfarande svårlästa PDF-filer som kräver att gästen zoomar och skrollar. Vi bygger istället responsiva menyer direkt i koden, vilket gör dem läsbara på alla skärmar och dessutom sökbara för Google.</p>
              <p>Genom att optimera din design för mobila enheter gör vi det enkelt för gästen att hitta dagens lunch, se priser och klicka på ditt telefonnummer för att boka bord. En genomtänkt UX-design minskar friktionen i köpresan och säkerställer att din restaurang i Sala framstår som det självklara valet för både lunchgäster och festsällskap.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-primary mt-12 mb-4">Lokal SEO: Att synas när hungriga kunder söker i Sala</h2>
            <div className="space-y-5 text-muted-foreground leading-[1.6] text-base">
              <p>Lokal sökmotoroptimering är hemligheten bakom att dyka upp överst när någon söker på "restaurang Sala" eller "lunch Sala". Vi implementerar avancerad Schema Markup som talar om för Google exakt vad din restaurang erbjuder, vilka omdömen ni har och var ni ligger i Sala.</p>
              <p>Genom att skapa unikt innehåll på över 800 ord som lyfter fram din expertis och dina lokala råvaror, bygger vi den digitala auktoritet som krävs för att du ska äga sökresultaten i regionen. Detta ger din restaurang i Sala en långsiktig fördel som inte kräver dyra annonskostnader varje månad.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-section-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-primary mt-12 mb-4">Framtidssäker teknik med Next.js för restaurangbranschen</h2>
            <div className="space-y-5 text-muted-foreground leading-[1.6] text-base">
              <p>För att ge din restaurang i Sala de bästa förutsättningarna använder vi modern teknik som Next.js och React. Dessa ramverk tillåter oss att bygga sidor som är extremt snabba och säkra, utan de tunga tillägg och säkerhetshål som ofta plågar äldre system som WordPress.</p>
              <p>Denna typ av skräddarsydd webbutveckling gör att din hemsida är redo för framtidens krav på prestanda och tillgänglighet. Med LRH Konsult får du en digital partner som kombinerar din passion för matlagning med vår passion för teknisk perfektion i Västmanland.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-background text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-4">Boka en gratis analys för din restaurang i Sala</h2>
          <p className="text-muted-foreground mb-6">Vi granskar din sajts hastighet, synlighet och konverteringsmöjligheter – helt gratis.</p>
          <Link
            to="/gratis-seo-analys"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 min-h-[44px]"
          >
            Få en gratis SEO-analys <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Contact />
    </main>
    <Footer />
  </div>
);

export default RestaurangerSala;
