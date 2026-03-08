import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PageHead from "@/components/PageHead";
import { ArrowRight } from "lucide-react";
import { siteWideFaqs } from "@/data/faqData";
import { ALL_CITIES } from "@/data/cities";

// Lazy-load everything below the fold
const Services = lazy(() => import("@/components/Services"));
const About = lazy(() => import("@/components/About"));
const Pricing = lazy(() => import("@/components/Pricing"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const homeFaqs = siteWideFaqs;

const Index = () => {
  return (
    <div className="min-h-screen">
      <PageHead
        title="Webbutveckling & SEO i Västmanland | LRH Konsult"
        description="Blixtsnabba hemsidor i Västerås, Köping & Sala. 100/100 PageSpeed för maximal konvertering."
        breadcrumbs={[{ name: "Hem", url: "https://lrhkonsult.se" }]}
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "ProfessionalService",
              "name": "LRH Konsult",
              "url": "https://lrhkonsult.se",
              "telephone": "+46704606578",
              "email": "lucas@lrhkonsult.se",
              "image": "https://lrhkonsult.se/assets/og/lrh-konsult-sharing-image.png",
              "description": "Blixtsnabba hemsidor i Västerås, Köping & Sala. 100/100 PageSpeed för maximal konvertering.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Västerås",
                "addressRegion": "Västmanlands län",
                "addressCountry": "SE"
              },
              "areaServed": [
                { "@type": "City", "name": "Västerås" },
                { "@type": "City", "name": "Köping" },
                { "@type": "City", "name": "Sala" },
                { "@type": "City", "name": "Enköping" },
                { "@type": "City", "name": "Eskilstuna" },
                { "@type": "City", "name": "Arboga" },
                { "@type": "City", "name": "Fagersta" },
                { "@type": "City", "name": "Hallstahammar" },
                { "@type": "City", "name": "Kungsör" },
                { "@type": "City", "name": "Surahammar" },
                { "@type": "City", "name": "Heby" },
                { "@type": "City", "name": "Norberg" },
                { "@type": "City", "name": "Skinnskatteberg" },
                { "@type": "City", "name": "Uppsala" },
                { "@type": "City", "name": "Örebro" },
                { "@type": "State", "name": "Västmanland" },
                { "@type": "State", "name": "Södermanland" },
                { "@type": "State", "name": "Uppsala län" },
                { "@type": "State", "name": "Örebro län" }
              ],
              "priceRange": "$$",
              "sameAs": ["https://www.linkedin.com/in/lucasrosvall/"]
            },
            {
              "@type": "WebSite",
              "name": "LRH Konsult",
              "url": "https://lrhkonsult.se"
            },
            {
              "@type": "FAQPage",
              "mainEntity": homeFaqs.map(f => ({
                "@type": "Question",
                "name": f.question,
                "acceptedAnswer": { "@type": "Answer", "text": f.answer }
              }))
            }
          ]
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <Services />

          {/* Mid-page CTA */}
          <section className="py-12 sm:py-16 bg-section-alt text-center">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-4">Få fler kunder – börja med en gratis analys</h2>
              <p className="text-muted-foreground mb-6">Vi analyserar din sajt kostnadsfritt och visar exakt vad som krävs för att ranka högre och konvertera mer.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/gratis-seo-analys" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 min-h-[44px] animate-cta-pulse">Få gratis SEO-analys</Link>
                <Link to="/case" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-border text-foreground font-medium hover:bg-muted/50 transition-colors min-h-[44px]">Se kundcase</Link>
              </div>
            </div>
          </section>

          <About />

          {/* Expertis i Mälardalen & Västmanland – all 15 cities */}
          <section className="py-16 sm:py-20 bg-section-alt">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-6">Expertis i Mälardalen & Västmanland</h2>
              <p className="text-muted-foreground leading-[1.6] mb-10">
                LRH Konsult är din lokala partner för webbutveckling och sökmotoroptimering i Mälardalsregionen. Vi arbetar nära företag i hela området och förstår den lokala marknaden – från centrala Västerås till Köping, Sala, Enköping, Eskilstuna, Arboga, Fagersta, Hallstahammar, Kungsör, Surahammar, Heby, Norberg, Skinnskatteberg, Uppsala och Örebro. Oavsett var du befinner dig hjälper vi dig att synas online.
              </p>

              {/* City links – all 15 */}
              <div className="flex flex-wrap gap-3 mb-12">
                {ALL_CITIES.map(c => (
                  <Link
                    key={c.to}
                    to={c.to}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card text-sm text-foreground hover:bg-primary/10 hover:border-primary/30 transition-colors"
                  >
                    {c.label} <ArrowRight size={14} className="text-primary" />
                  </Link>
                ))}
              </div>

              <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary mt-12 mb-4">Webbutveckling i Västerås</h2>
              <p className="text-muted-foreground leading-[1.6] mb-8">
                Västerås är Västmanlands största stad och en viktig marknad för lokala företag. Vi bygger moderna, snabbladdade hemsidor med React och Next.js som hjälper företag i Västerås att sticka ut i konkurrensen. Från restauranger och hantverkare till techbolag – vi skräddarsyr lösningar som konverterar besökare till kunder.{" "}
                <Link to="/webbutveckling-vasteras" className="text-primary hover:underline font-medium">Läs mer om webbutveckling i Västerås</Link>.
              </p>

              <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary mt-12 mb-4">SEO-optimering i Köping</h2>
              <p className="text-muted-foreground leading-[1.6] mb-8">
                Köping har en aktiv företagsscen där lokal synlighet är avgörande. Genom teknisk SEO, Google Business-optimering och innehållsstrategier hjälper vi företag i Köping att ranka högre i sökresultaten och nå fler lokala kunder.{" "}
                <Link to="/seo-koping" className="text-primary hover:underline font-medium">Läs mer om SEO i Köping</Link>.
              </p>

              <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary mt-12 mb-4">Webbdesign i Sala</h2>
              <p className="text-muted-foreground leading-[1.6] mb-8">
                I Sala kombinerar vi lokal kännedom med modern webbdesign för att skapa hemsidor som verkligen representerar ditt företag. Vi fokuserar på snabb laddningstid, responsiv design och SEO-vänlig struktur som ger resultat.{" "}
                <Link to="/hemsidor-sala" className="text-primary hover:underline font-medium">Läs mer om webbdesign i Sala</Link>.
              </p>

              <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary mt-12 mb-4">Webbutveckling i Enköping (Uppsala län)</h2>
              <p className="text-muted-foreground leading-[1.6] mb-8">
                Enköping ligger strategiskt i Uppsala län, med närheten till Stockholm och Uppsala som en stor fördel. Vi hjälper företag i Enköping att maximera sin digitala närvaro med blixtsnabba hemsidor och teknisk SEO i världsklass.{" "}
                <Link to="/webbutveckling-enkoping" className="text-primary hover:underline font-medium">Läs mer om webbutveckling i Enköping</Link>.
              </p>

              <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary mt-12 mb-4">SEO i Eskilstuna (Södermanland)</h2>
              <p className="text-muted-foreground leading-[1.6] mb-8">
                Eskilstuna är en viktig knutpunkt i Södermanland med en snabbt växande företagsscen. Vi hjälper företag i Eskilstuna att dominera lokala sökresultat genom teknisk perfektion och lokal relevans.{" "}
                <Link to="/webbutveckling-eskilstuna" className="text-primary hover:underline font-medium">Läs mer om SEO i Eskilstuna</Link>.
              </p>

              <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary mt-12 mb-4">Webbutveckling i Arboga</h2>
              <p className="text-muted-foreground leading-[1.6] mb-8">
                Arboga har en rik historia och en framåtblickande företagskultur. Vi hjälper lokala företag att bygga digital auktoritet med moderna, blixtsnabba hemsidor som rankar högt.{" "}
                <Link to="/webbutveckling-arboga" className="text-primary hover:underline font-medium">Läs mer om webbutveckling i Arboga</Link>.
              </p>

              <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary mt-12 mb-4">Webbdesign i Fagersta</h2>
              <p className="text-muted-foreground leading-[1.6]">
                Fagersta och norra Västmanland förtjänar moderna, snabba hemsidor. Vi hjälper företag i Fagersta att byta från föråldrade system till blixtsnabba lösningar med 100/100 PageSpeed.{" "}
                <Link to="/webbutveckling-fagersta" className="text-primary hover:underline font-medium">Läs mer om webbdesign i Fagersta</Link>.
              </p>
            </div>
          </section>

          <Pricing />
          <Testimonials />
          <FAQ />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
