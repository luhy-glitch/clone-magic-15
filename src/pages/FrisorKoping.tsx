import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import AnimatedSection from "@/components/AnimatedSection";
import Contact from "@/components/Contact";
import { Link } from "react-router-dom";
import { ArrowRight, Scissors } from "lucide-react";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Lokal SEO för frisörer i Köping",
      "provider": {
        "@type": "ProfessionalService",
        "name": "LRH Konsult",
        "telephone": "+46704606578",
        "email": "lucas@lrhkonsult.se",
      },
      "areaServed": { "@type": "City", "name": "Köping" },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Vad kostar en hemsida för en frisörsalong i Köping?", "acceptedAnswer": { "@type": "Answer", "text": "Vi erbjuder paket från 5 000 kr anpassade för skönhetsbranschen. Kontakta oss för en skräddarsydd offert." } },
        { "@type": "Question", "name": "Kan ni integrera mitt bokningssystem?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, vi integrerar populära bokningssystem direkt i din hemsida för en sömlös kundupplevelse." } },
      ],
    },
  ],
};

const FrisorKoping = () => (
  <div className="min-h-screen">
    <PageHead
      title="Hemsida & SEO för Frisörer i Köping | LRH Konsult"
      description="Lokal SEO och moderna hemsidor för frisörsalonger i Köping. Dominera Google och fyll din bokningskalender."
      jsonLd={jsonLd}
    />
    <Navbar />
    <main className="pt-16">
      <section className="relative bg-hero text-hero-foreground py-16 sm:py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Scissors size={28} className="text-primary" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight font-serif">
                Lokal SEO för frisörer i Köping
              </h1>
              <p className="mt-6 text-lg text-hero-muted max-w-2xl leading-relaxed">
                Dominera sökresultaten i Köping och fyll din bokningskalender med en blixtsnabb hemsida och lokal SEO i världsklass.
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-primary mt-12 mb-4">Varför hastighet och mobilvänlighet avgör din ranking</h2>
            <div className="space-y-5 text-muted-foreground leading-[1.6] text-base">
              <p>De flesta som söker efter en frisör i Köping gör det direkt i farten via sin smartphone, vilket ställer extremt höga krav på din hemsidas hastighet. Genom att optimera din sajt till 100/100 i PageSpeed ser vi till att dina kunder aldrig behöver vänta på att din meny eller dina priser ska laddas.</p>
              <p>En långsam sida skapar irritation och leder ofta till att kunden väljer en annan salong i Köping som har en mer lättillgänglig webbplats. Med en LCP under 1.5 sekunder garanterar vi en sömlös användarupplevelse som Google premierar med högre placeringar i sökresultaten, vilket direkt ökar antalet bokade tider för din verksamhet.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-section-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-primary mt-12 mb-4">Optimering för Google Business Profile i Köping</h2>
            <div className="space-y-5 text-muted-foreground leading-[1.6] text-base">
              <p>För lokala tjänsteföretag som frisörer är integrationen mellan din hemsida och din Google Business Profile (GBP) helt avgörande. Vi ser till att din salong i Köping visas med korrekta öppettider, adress och fina bilder direkt i Google Maps när någon befinner sig i närområdet.</p>
              <p>Genom att använda strategisk Schema Markup på din webbplats kan vi dessutom visa dina kundrecensioner och ditt betyg direkt i sökresultatet, vilket skapar ett omedelbart förtroende. Lokal SEO för frisörer i Köping handlar om att äga hela sökupplevelsen så att du blir det självklara valet för alla som behöver en klippning eller färgning.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-primary mt-12 mb-4">Innehåll som konverterar besökare till lojala kunder</h2>
            <div className="space-y-5 text-muted-foreground leading-[1.6] text-base">
              <p>En bra hemsida för en frisör i Köping ska inte bara vara tekniskt perfekt, den måste också sälja din expertis genom relevant innehåll. Vi producerar djupa texter på över 800 ord som svarar på kundernas vanligaste frågor om hårvård och trender, vilket bygger din auktoritet som expert i regionen.</p>
              <p>Genom att använda tydliga Call-To-Action (CTA) punkter som "Boka tid" eller "Se våra priser" guidar vi besökaren genom hela bokningsprocessen utan friktion. Detta fokus på konverteringsdesign gör att din investering i SEO ger en direkt avkastning genom fler nya kunder till salongen i Köping.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-section-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-primary mt-12 mb-4">Framtidssäker teknik för skönhetsbranschen i Mälardalen</h2>
            <div className="space-y-5 text-muted-foreground leading-[1.6] text-base">
              <p>När du anlitar LRH Konsult får du tillgång till samma moderna teknik som används av de största globala varumärkena, inklusive React och Next.js. Denna arkitektur gör din hemsida för salongen i Köping betydligt säkrare och snabbare än traditionella lösningar som WordPress.</p>
              <p>Med vår skräddarsydda utveckling kan vi eliminera onödig kod och bygga en plattform som är optimerad för framtidens krav på digital synlighet och prestanda. Vi är din digitala partner i Västmanland som förstår att din framgång bygger på en kombination av hantverksskicklighet och en tekniskt fulländad digital närvaro.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-background text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-4">Få en kostnadsfri SEO-analys för din salong i Köping</h2>
          <p className="text-muted-foreground mb-6">Vi granskar din prestanda, dina placeringar och ger dig konkreta tips på fler bokningar.</p>
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

export default FrisorKoping;
