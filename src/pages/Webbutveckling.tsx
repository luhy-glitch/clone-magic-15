import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import Contact from "@/components/Contact";
import AnimatedSection, { FadeIn } from "@/components/AnimatedSection";
import { Code2, Zap, Shield, Smartphone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: Code2, title: "React & Next.js", desc: "Moderna ramverk som ger snabba, interaktiva webbplatser med optimal prestanda." },
  { icon: Zap, title: "Blixtsnabb prestanda", desc: "Core Web Vitals-optimerade sidor som rankar högt och konverterar besökare." },
  { icon: Shield, title: "Säker & skalbar", desc: "SSL, säkra API:er och arkitektur som växer med ditt företag." },
  { icon: Smartphone, title: "Mobile-first design", desc: "Responsiva lösningar som fungerar perfekt på alla enheter och skärmstorlekar." },
];

const Webbutveckling = () => {
  return (
    <div className="min-h-screen">
      <PageHead
        title="Webbutveckling i Västmanland – React & Next.js | LRH Konsult"
        description="Professionell webbutveckling i Västerås, Köping och Sala. Skräddarsydda webbplatser i React & Next.js med fokus på prestanda och SEO. Boka fri konsultation!"
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-hero text-hero-foreground pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32">
            <AnimatedSection>
              <span className="text-primary font-medium text-sm tracking-widest uppercase">Webbutveckling</span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
                Skräddarsydda <span className="text-primary">webbplatser</span> som levererar resultat
              </h1>
              <p className="mt-6 text-lg text-hero-muted max-w-2xl">
                Jag skapar moderna, snabba och sökmotoroptimerade webbplatser i React och Next.js för företag i Västerås, Köping, Sala och hela Västmanlands län.
              </p>
              <Link
                to="/kontakt"
                className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Boka fri konsultation <ArrowRight size={18} />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* Features grid */}
        <section className="py-14 sm:py-20 md:py-28 bg-section-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <FadeIn key={f.title} delay={i * 0.1}>
                  <div className="bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <f.icon size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold font-serif mb-3">{f.title}</h3>
                    <p className="text-muted-foreground">{f.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Content section */}
        <section className="py-14 sm:py-20 md:py-28 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
                Varför välja <span className="text-primary">professionell webbutveckling?</span>
              </h2>
              <div className="prose prose-invert max-w-none text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  I dagens digitala landskap är din webbplats ofta det första intrycket potentiella kunder får av ditt företag. En professionellt byggd webbplats i React eller Next.js erbjuder inte bara en fantastisk användarupplevelse – den hjälper dig också att ranka högre på Google och konvertera fler besökare till betalande kunder.
                </p>
                <p>
                  Som webbutvecklare baserad i Västmanland har jag hjälpt företag i Västerås, Köping och Sala att skapa hemsidor som verkligen gör skillnad. Jag bygger skräddarsydda webblösningar med modern teknik som React och Next.js – ramverk som används av världens största företag för sin hastighet och skalbarhet.
                </p>
                <p>
                  Varje projekt börjar med en grundlig analys av dina behov och mål. Jag fokuserar på att skapa en responsiv, mobilvänlig design som ser fantastisk ut på alla enheter. Genom att optimera laddtider och Core Web Vitals säkerställer jag att din webbplats inte bara ser bra ut, utan också presterar på toppnivå i sökmotorerna.
                </p>
                <p>
                  Behöver du en enkel företagssida, en avancerad webbapplikation eller en e-handelslösning? Oavsett projektets storlek erbjuder jag personlig service och transparent kommunikation genom hela processen. Kontakta mig idag för en kostnadsfri konsultation så diskuterar vi hur jag kan hjälpa ditt företag att växa online.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Webbutveckling;
