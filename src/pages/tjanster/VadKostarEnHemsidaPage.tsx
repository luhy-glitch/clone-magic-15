import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import AnimatedSection from "@/components/AnimatedSection";
import Contact from "@/components/Contact";
import { Link } from "react-router-dom";
import { ArrowRight, DollarSign } from "lucide-react";
import { SITE_URL as BASE_URL } from "@/lib/constants";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "Vad kostar en hemsida i Sverige 2026?",
      "description": "En komplett guide till priser för hemsidor 2026 – från DIY till skräddarsydd React/Next.js-utveckling.",
      "url": `${BASE_URL}/tjanster/vad-kostar-en-hemsida-2026`,
      "image": {
        "@type": "ImageObject",
        "url": `${BASE_URL}/og-image.jpg`,
        "width": 1200,
        "height": 630,
      },
      "datePublished": "2026-01-15",
      "dateModified": "2026-06-14",
      "author": { "@type": "Person", "name": "Lucas Rosvall", "url": `${BASE_URL}/om-mig` },
      "publisher": {
        "@type": "Organization",
        "name": "LRH Konsult",
        "url": BASE_URL,
        "logo": {
          "@type": "ImageObject",
          "url": `${BASE_URL}/og-image.jpg`,
          "width": 1200,
          "height": 630,
        },
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Vad kostar det att bygga en hemsida själv?", "acceptedAnswer": { "@type": "Answer", "text": "Gör-det-själv-plattformar som Wix eller Squarespace kostar från några hundralappar i månaden, men begränsar din prestanda och SEO." } },
        { "@type": "Question", "name": "Vad kostar en WordPress-hemsida?", "acceptedAnswer": { "@type": "Answer", "text": "En professionell WordPress-hemsida kostar 2026 mellan 15 000 kr och 45 000 kr beroende på design och funktioner." } },
        { "@type": "Question", "name": "Vad kostar skräddarsydd webbutveckling i React/Next.js?", "acceptedAnswer": { "@type": "Answer", "text": "En skräddarsydd lösning börjar ofta från 50 000 kr och uppåt, men ger 100/100 PageSpeed och högre konverteringsgrad." } },
      ],
    },
  ],
};

const VadKostarEnHemsida = () => (
  <div className="min-h-screen">
    <PageHead
      title="Vad kostar en hemsida 2026? Komplett prisguide | LRH Konsult"
      description="Komplett guide till priser för hemsidor i Sverige 2026. Jämför DIY, WordPress och skräddarsydd React/Next.js-utveckling."
      jsonLd={jsonLd}
    />
    <Navbar />
    <main className="pt-16">
      <section className="relative bg-hero text-hero-foreground py-16 sm:py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <DollarSign size={28} className="text-primary" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight font-serif">
                Vad kostar en hemsida i Sverige 2026?
              </h1>
              <p className="mt-6 text-lg text-hero-muted max-w-2xl leading-relaxed">
                En komplett guide till priser för hemsidor 2026 – från gör-det-själv till skräddarsydda lösningar som dominerar Google.
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-primary mt-12 mb-4">En komplett guide till priser för hemsidor 2026</h2>
            <div className="space-y-5 text-muted-foreground leading-[1.6] text-base">
              <p>Att investera i en ny hemsida är ett av de viktigaste besluten för ett företag som vill växa digitalt. Priset för en hemsida i Sverige 2026 varierar kraftigt beroende på om du väljer en enkel mall, en WordPress-lösning eller en skräddarsydd applikation byggd i React eller Next.js. I den här guiden går vi igenom vad som faktiskt påverkar kostnaden och varför en billig lösning ofta blir dyr i längden på grund av dålig prestanda och låg ranking på Google.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-section-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-primary mt-12 mb-4">Pris för att bygga hemsidan själv</h2>
            <div className="space-y-5 text-muted-foreground leading-[1.6] text-base">
              <p>För nystartade småföretag kan gör-det-själv-plattformar som Wix eller Squarespace verka lockande med priser från några hundralappar i månaden. Problemet med dessa tjänster är ofta den tekniska begränsningen; de lider ofta av tunga scripts som gör det omöjligt att nå 100/100 i PageSpeed. Detta innebär att din sajt laddar långsammare än konkurrenternas, vilket direkt straffar din SEO och gör det svårare att attrahera kunder i <Link to="/webbutveckling-vasteras" className="text-primary hover:underline font-medium">Västerås</Link>, <Link to="/seo-koping" className="text-primary hover:underline font-medium">Köping</Link> eller <Link to="/hemsidor-sala" className="text-primary hover:underline font-medium">Sala</Link>.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-primary mt-12 mb-4">Kostnad för WordPress-hemsidor hos en webbyrå</h2>
            <div className="space-y-5 text-muted-foreground leading-[1.6] text-base">
              <p>En standardhemsida byggd i WordPress av en professionell konsult eller byrå brukar 2026 kosta mellan 15 000 kr och 45 000 kr. Här betalar du för design, installation av nödvändiga plugins och en grundläggande SEO-optimering. WordPress är ett flexibelt system, men det kräver löpande underhåll och säkerhetsuppdateringar för att inte bli långsamt över tid. För företag som kräver extrem snabbhet och vill dominera sökresultaten är detta ofta ett mellansteg snarare än slutdestinationen.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-section-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-primary mt-12 mb-4">Priset för skräddarsydd webbutveckling (Next.js & React)</h2>
            <div className="space-y-5 text-muted-foreground leading-[1.6] text-base">
              <p>För företag som ser sin hemsida som en affärskritisk motor ligger investeringen för en skräddarsydd lösning ofta från 50 000 kr och uppåt. Genom att använda tekniker som React och Next.js eliminerar vi "code bloat" och levererar en sajt som når 100/100 PageSpeed och har en LCP under 1.5 sekunder. Denna investering betalar sig genom högre konverteringsgrad, bättre synlighet på Google och en framtidssäker plattform som inte kräver dyra licenser eller tunga plugins.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-primary mt-12 mb-4">Faktorer som driver upp kostnaden</h2>
            <div className="space-y-5 text-muted-foreground leading-[1.6] text-base">
              <p>Det är inte bara antalet sidor som avgör priset. Funktioner som avancerade formulär, integrationer med CRM-system, e-handelslösningar och flerspråkigt stöd ökar komplexiteten. Den största kostnaden ligger dock ofta i det strategiska arbetet: att skapa innehåll som faktiskt konverterar besökare till leads. En tekniskt perfekt sida på 800+ ord per undersida kräver expertis inom både kodning och copywriting för att nå önskat resultat.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-section-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-primary mt-12 mb-4">Löpande kostnader att räkna med</h2>
            <div className="space-y-5 text-muted-foreground leading-[1.6] text-base">
              <p>Engångskostnaden för att bygga sajten är bara en del av bilden. För att din hemsida ska fortsätta vara snabb, säker och synlig behöver du räkna med några löpande kostnader: domännamn (några hundralappar per år), webbhotell eller hosting (från ett par hundra kronor i månaden beroende på lösning) samt löpande underhåll och säkerhetsuppdateringar.</p>
              <p>För en WordPress-sajt tillkommer ofta licenser för premium-plugins och ett underhållsavtal, eftersom plattformen kräver regelbundna uppdateringar för att förbli säker. En modern, skräddarsydd lösning i React eller Next.js har oftast lägre löpande kostnader eftersom den inte är beroende av en flora av plugins – men kräver fortfarande hosting och tillsyn. Vi är alltid transparenta med vad som ingår och vad som tillkommer, så att du slipper överraskningar längre fram.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-primary mt-12 mb-4">ROI: Varför prestanda är din bästa investering</h2>
            <div className="space-y-5 text-muted-foreground leading-[1.6] text-base">
              <p>En hemsida som kostar 10 000 kr men inte genererar några leads är en ren förlust. En hemsida som kostar mer men kraftigt ökar din organiska trafik och dina förfrågningar är i stället en vinstmaskin. Genom att fokusera på Core Web Vitals och lokal SEO i Mälardalen säkerställer vi att din digitala närvaro blir en lönsam del av ditt företag snarare än en kostnad.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-12 sm:py-16 bg-background text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-4">Osäker på vad din hemsida behöver?</h2>
          <p className="text-muted-foreground mb-6">Vi analyserar din nuvarande sajt helt gratis och ger dig konkreta rekommendationer.</p>
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

export default VadKostarEnHemsida;
