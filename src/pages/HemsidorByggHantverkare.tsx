import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import AnimatedSection from "@/components/AnimatedSection";
import Contact from "@/components/Contact";
import { Link } from "react-router-dom";
import { ArrowRight, Hammer } from "lucide-react";

const BASE_URL = "https://lrhkonsult.se";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Hemsidor för Bygg & Hantverkare i Västmanland",
      "provider": {
        "@type": "ProfessionalService",
        "name": "LRH Konsult",
        "telephone": "+46704606578",
        "email": "lucas@lrhkonsult.se",
      },
      "areaServed": [
        { "@type": "City", "name": "Västerås" },
        { "@type": "City", "name": "Köping" },
        { "@type": "City", "name": "Sala" },
        { "@type": "State", "name": "Västmanland" },
      ],
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Behöver hantverkare verkligen en hemsida?", "acceptedAnswer": { "@type": "Answer", "text": "Ja, 97% av konsumenterna söker efter lokala tjänster online. En professionell hemsida är ditt viktigaste verktyg för att fånga nya kunder." } },
        { "@type": "Question", "name": "Vad kostar en hemsida för ett byggföretag?", "acceptedAnswer": { "@type": "Answer", "text": "Vi erbjuder paket från 5 000 kr anpassade för bygg- och hantverksbranschen. Kontakta oss för en skräddarsydd offert." } },
      ],
    },
  ],
};

const HemsidorByggHantverkare = () => (
  <div className="min-h-screen">
    <PageHead
      title="Hemsidor för Bygg & Hantverkare | LRH Konsult"
      description="Professionella hemsidor för byggföretag och hantverkare i Västmanland. 100/100 PageSpeed, lokal SEO och konverteringsoptimerad design."
      jsonLd={jsonLd}
    />
    <Navbar />
    <main className="pt-16">
      <section className="relative bg-hero text-hero-foreground py-16 sm:py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-3xl">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Hammer size={28} className="text-primary" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight font-serif">
                Hemsidor för Bygg &amp; Hantverkare
              </h1>
              <p className="mt-6 text-lg text-hero-muted max-w-2xl leading-relaxed">
                Dina kunder söker redan efter dig online. Med en professionell, blixtsnabb hemsida fångar du upp fler uppdrag i Västmanland – utan att behöva tänka på tekniken.
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif mb-8">Varför hantverkare behöver en professionell hemsida</h2>
            <div className="space-y-5 text-muted-foreground leading-[1.8] text-base">
              <p>Bygg- och hantverksbranschen i Västmanland är starkt konkurrensutsatt. Oavsett om du är elektriker, snickare, målare eller rörmokare söker dina potentiella kunder efter dig på Google innan de lyfter luren. Faktum är att 97% av konsumenterna söker efter lokala tjänster online, och de företag som syns högst i sökresultaten får flest förfrågningar.</p>
              <p>Problemet är att många hantverkare och byggföretag antingen saknar en hemsida helt eller har en föråldrad sajt som laddar långsamt och inte är anpassad för mobila enheter. I en bransch där förtroende är allt kan en dålig hemsida kosta dig fler kunder än du tror. En snabb, professionell hemsida signalerar kvalitet och seriositet redan innan kunden har kontaktat dig.</p>
              <p>Vi på LRH Konsult specialiserar oss på att bygga hemsidor för hantverkare och byggföretag i Västmanland. Vi förstår branschens behov: du behöver visa upp dina projekt, presentera dina tjänster och göra det enkelt för kunder att kontakta dig. Allt detta paketerar vi i en hemsida som laddar på under en sekund och rankar högt i lokala sökresultat.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-section-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif mb-8">Funktioner anpassade för byggbranschen</h2>
            <div className="space-y-5 text-muted-foreground leading-[1.8] text-base">
              <p>Din hemsida ska vara mer än ett digitalt visitkort. Vi bygger funktioner som är specifikt utformade för bygg- och hantverksbranschen: projektgallerier som visar upp dina bästa arbeten, kontaktformulär som gör det enkelt att begära offerter, och referenssektioner som bygger förtroende hos nya kunder.</p>
              <p>Alla våra hemsidor för hantverkare är mobilanpassade med en "mobile-first"-strategi. Det innebär att din sajt ser lika professionell ut på en smartphone som på en dator – avgörande när de flesta av dina potentiella kunder söker från sin mobil på byggarbetsplatsen eller hemma i soffan.</p>
              <p>Vi integrerar lokal SEO direkt i din hemsida. Det innebär att vi optimerar för söktermer som "elektriker Västerås", "snickare Köping" eller "byggfirma Sala" så att du dyker upp när dina potentiella kunder aktivt söker efter de tjänster du erbjuder. Kombinerat med Google Business Profile-optimering och strukturerad data skapar vi en digital närvaro som konsekvent genererar nya förfrågningar.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif mb-8">Vanliga frågor</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-serif font-bold text-lg mb-2">Behöver hantverkare verkligen en hemsida?</h3>
                <p className="text-muted-foreground leading-relaxed">Ja, 97% av konsumenterna söker efter lokala tjänster online. En professionell hemsida är ditt viktigaste verktyg för att fånga nya kunder och bygga förtroende i Västmanland.</p>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg mb-2">Vad kostar en hemsida för ett byggföretag?</h3>
                <p className="text-muted-foreground leading-relaxed">Vi erbjuder paket från 5 000 kr anpassade för bygg- och hantverksbranschen. Kontakta oss för en skräddarsydd offert baserad på dina specifika behov.</p>
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg mb-2">Kan ni visa mina projekt på hemsidan?</h3>
                <p className="text-muted-foreground leading-relaxed">Absolut. Vi skapar professionella projektgallerier med optimerade bilder som visar upp dina bästa arbeten och bygger förtroende hos potentiella kunder.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Contact />
    </main>
    <Footer />
  </div>
);

export default HemsidorByggHantverkare;
