import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PageHead from "@/components/PageHead";

// Lazy-load everything below the fold
const Services = lazy(() => import("@/components/Services"));
const Pricing = lazy(() => import("@/components/Pricing"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const homeFaqs = [
  { question: "Vad kostar det att bygga en hemsida?", answer: "Priset varierar beroende på projektets storlek och komplexitet. Vi erbjuder tre paket – Bas (5 000 kr), Standard (12 000 kr) och Premium (25 000 kr) – som täcker de flesta behov." },
  { question: "Hur snabb är en hemsida från LRH Konsult?", answer: "Vi siktar alltid på 100/100 i Google PageSpeed Insights för att garantera bästa möjliga användarupplevelse och SEO-rankning." },
  { question: "Hur lång tid tar det att bygga en webbplats?", answer: "Det beror på projektets omfattning. En enkel webbplats kan vara klar inom 1–2 veckor, medan en mer komplex lösning med e-handel kan ta 4–8 veckor." },
  { question: "Hur lång tid tar SEO-optimering?", answer: "De första förbättringarna syns ofta inom 2–3 månader, medan mer konkurrenskraftiga sökord kan ta 6–12 månader att ranka för." },
  { question: "Kan jag uppdatera webbplatsen själv efteråt?", answer: "Absolut! Jag bygger webbplatser med användarvänliga CMS-lösningar så att du enkelt kan uppdatera innehåll utan teknisk kunskap." },
  { question: "Ingår hosting och domän?", answer: "Jag hjälper dig att välja rätt hosting och domänlösning. Dessa kostnader tillkommer separat men jag kan rekommendera pålitliga leverantörer." },
  { question: "Erbjuder du löpande support och underhåll?", answer: "Ja, jag erbjuder löpande support- och underhållsavtal så att din webbplats alltid är uppdaterad, säker och fungerar optimalt." },
  { question: "Vilka företag arbetar du med i Västmanland?", answer: "Jag arbetar med företag av alla storlekar i Västerås, Köping, Sala, Enköping, Eskilstuna, Arboga, Fagersta och hela Västmanlands län." },
  { question: "Finns det några dolda avgifter?", answer: "Nej, vi tror på full transparens. Alla kostnader specificeras tydligt i våra paket och offerter." },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <PageHead
        title="Webbutveckling & SEO i Västmanland | LRH Konsult"
        description="Blixtsnabba hemsidor i Västerås, Köping & Sala. 100/100 PageSpeed för maximal konvertering."
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
              <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-4">Vill du se resultat?</h2>
              <p className="text-muted-foreground mb-6">Se hur vi hjälpt företag i Västmanland att öka sin synlighet och konvertering.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/case" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 min-h-[44px]">Se kundcase</Link>
                <Link to="/gratis-seo-analys" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-border text-foreground font-medium hover:bg-muted/50 transition-colors min-h-[44px]">Gratis SEO-analys</Link>
              </div>
            </div>
          </section>

          {/* Expertis i Mälardalen & Västmanland – lokal SEO-sektion */}
          <section className="py-16 sm:py-20 bg-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-6">Expertis i Mälardalen & Västmanland</h2>
              <p className="text-muted-foreground leading-[1.6] mb-10">
                LRH Konsult är din lokala partner för webbutveckling och sökmotoroptimering i Mälardalsregionen. Vi arbetar nära företag i hela området och förstår den lokala marknaden – från centrala Västerås till Köping, Sala, Enköping, Eskilstuna, Arboga och Fagersta. Oavsett var du befinner dig hjälper vi dig att synas online.
              </p>

              <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary mt-12 mb-4">Webbutveckling i Västerås</h2>
              <p className="text-muted-foreground leading-[1.6] mb-8">
                Västerås är Västmanlands största stad och en viktig marknad för lokala företag. Vi bygger moderna, snabbladdade hemsidor med React och Next.js som hjälper företag i Västerås att sticka ut i konkurrensen. Från restauranger och hantverkare till techbolag – vi skräddarsyr lösningar som konverterar besökare till kunder.{" "}
                <Link to="/webbutveckling-vasteras" className="text-primary hover:underline font-medium">Läs mer om webbutveckling i Västerås</Link>.
              </p>

              <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary mt-12 mb-4">SEO-optimering i Köping</h2>
              <p className="text-muted-foreground leading-[1.6] mb-8">
                Köping har en aktiv företagsscen där lokal synlighet är avgörande. Genom teknisk SEO, Google Business-optimering och innehållsstrategier hjälper vi företag i Köping att ranka högre i sökresultaten och nå fler lokala kunder.{" "}
                <a href="/seo-koping" className="text-primary hover:underline font-medium">Läs mer om SEO i Köping</a>.
              </p>

              <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary mt-12 mb-4">Webbdesign i Sala</h2>
              <p className="text-muted-foreground leading-[1.6] mb-8">
                I Sala kombinerar vi lokal kännedom med modern webbdesign för att skapa hemsidor som verkligen representerar ditt företag. Vi fokuserar på snabb laddningstid, responsiv design och SEO-vänlig struktur som ger resultat.{" "}
                <a href="/hemsidor-sala" className="text-primary hover:underline font-medium">Läs mer om webbdesign i Sala</a>.
              </p>

              <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary mt-12 mb-4">Webbutveckling i Enköping (Uppsala län)</h2>
              <p className="text-muted-foreground leading-[1.6] mb-8">
                Enköping ligger strategiskt i Uppsala län, med närheten till Stockholm och Uppsala som en stor fördel. Vi hjälper företag i Enköping att maximera sin digitala närvaro med blixtsnabba hemsidor och teknisk SEO i världsklass.{" "}
                <a href="/webbutveckling-enkoping" className="text-primary hover:underline font-medium">Läs mer om webbutveckling i Enköping</a>.
              </p>

              <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary mt-12 mb-4">SEO i Eskilstuna (Södermanland)</h2>
              <p className="text-muted-foreground leading-[1.6] mb-8">
                Eskilstuna är en viktig knutpunkt i Södermanland med en snabbt växande företagsscen. Vi hjälper företag i Eskilstuna att dominera lokala sökresultat genom teknisk perfektion och lokal relevans.{" "}
                <a href="/webbutveckling-eskilstuna" className="text-primary hover:underline font-medium">Läs mer om SEO i Eskilstuna</a>.
              </p>

              <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary mt-12 mb-4">Webbutveckling i Arboga</h2>
              <p className="text-muted-foreground leading-[1.6] mb-8">
                Arboga har en rik historia och en framåtblickande företagskultur. Vi hjälper lokala företag att bygga digital auktoritet med moderna, blixtsnabba hemsidor som rankar högt.{" "}
                <a href="/webbutveckling-arboga" className="text-primary hover:underline font-medium">Läs mer om webbutveckling i Arboga</a>.
              </p>

              <h2 className="text-xl sm:text-2xl font-serif font-bold text-primary mt-12 mb-4">Webbdesign i Fagersta</h2>
              <p className="text-muted-foreground leading-[1.6]">
                Fagersta och norra Västmanland förtjänar moderna, snabba hemsidor. Vi hjälper företag i Fagersta att byta från föråldrade system till blixtsnabba lösningar med 100/100 PageSpeed.{" "}
                <a href="/webbutveckling-fagersta" className="text-primary hover:underline font-medium">Läs mer om webbdesign i Fagersta</a>.
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