import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Case = () => {
  return (
    <div className="min-h-screen">
      <PageHead
        title="Kundcase & Referenser | LRH Konsult"
        description="Så arbetar vi med webbutveckling och lokal SEO för företag i Västmanland – blixtsnabba hemsidor med 100/100 PageSpeed och tydlig konverteringsstruktur."
        noindex
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Kundcase & Referenser",
          "description": "Så arbetar LRH Konsult med webbutveckling och lokal SEO i Västmanland.",
          "url": "https://www.lrhkonsult.se/case",
        }}
      />
      <Navbar />
      <main className="pt-16">
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight mb-8">
              Kundcase &amp; Referenser
            </h1>
            <p className="text-muted-foreground leading-[1.6] mb-6">
              Vi bygger för närvarande upp vår publika samling av kundcase. Vi väljer att bara
              publicera resultat vi har kundens uttryckliga tillåtelse att dela – med riktiga
              siffror, inte uppskattningar. Tills dess berättar vi gärna mer om hur vi arbetar och
              vad du kan förvänta dig.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-primary mt-12 mb-4">
              Vad du kan förvänta dig av ett projekt
            </h2>
            <p className="text-muted-foreground leading-[1.6] mb-4">
              Oavsett bransch är målet detsamma: en blixtsnabb hemsida som rankar lokalt och
              omvandlar besökare till kunder. Vi bygger i modern teknik som React och Next.js,
              siktar konsekvent på 100/100 i Google PageSpeed och arbetar metodiskt med teknisk
              SEO, lokal optimering och en tydlig konverteringsstruktur.
            </p>
            <p className="text-muted-foreground leading-[1.6] mb-8">
              Vill du se konkret vad det skulle innebära för just ditt företag? Börja med en
              kostnadsfri SEO-analys så går vi igenom din nuvarande situation och var de största
              möjligheterna finns – helt utan förpliktelser. Läs mer om vår{" "}
              <Link to="/tjanster/webbutveckling" className="text-primary hover:underline font-medium">webbutveckling</Link>{" "}
              och{" "}
              <Link to="/tjanster/seo-optimering" className="text-primary hover:underline font-medium">SEO-optimering</Link>.
            </p>

            <Link
              to="/gratis-seo-analys"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 min-h-[44px]"
            >
              Få en gratis SEO-analys <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Case;
