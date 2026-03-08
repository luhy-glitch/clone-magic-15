import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import Contact from "@/components/Contact";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SeoRoiCalculator = lazy(() => import("@/components/SeoRoiCalculator"));

const GratisSeoAnalys = () => {
  return (
    <div className="min-h-screen">
      <PageHead
        title="Gratis SEO-analys | LRH Konsult"
        description="Få en kostnadsfri SEO-analys av din hemsida. Se hur mycket mer trafik och intäkter du kan generera med rätt optimering."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Gratis SEO-analys",
          "description": "Kostnadsfri SEO-analys för företag i Västmanland och Mälardalen.",
          "url": "https://lrhkonsult.se/gratis-seo-analys",
          "provider": {
            "@type": "ProfessionalService",
            "name": "LRH Konsult",
            "url": "https://lrhkonsult.se",
          },
        }}
      />
      <Navbar />
      <main className="pt-16">
        <section className="py-16 sm:py-24 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-tight mb-8">
              Gratis SEO-analys för ditt företag
            </h1>
            <p className="text-muted-foreground leading-[1.6] mb-8">
              Vill du veta hur din hemsida presterar i sökresultaten? Vi erbjuder en kostnadsfri SEO-analys där vi identifierar förbättringsområden och ger konkreta rekommendationer för att öka din organiska trafik och synlighet.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-primary mt-12 mb-4">
              Vad ingår i analysen?
            </h2>
            <p className="text-muted-foreground leading-[1.6] mb-4">
              Vår SEO-analys täcker de viktigaste aspekterna av din digitala närvaro. Vi granskar din hemsidas tekniska prestanda, inklusive laddningstider och Core Web Vitals, samt hur väl din sajt är optimerad för lokala sökningar i ditt område.
            </p>
            <p className="text-muted-foreground leading-[1.6] mb-8">
              Du får en tydlig rapport med prioriterade åtgärder som kan ge dig fler besökare, bättre ranking och i slutändan fler kunder. Allt presenterat på ett sätt som är lätt att förstå, oavsett teknisk bakgrund.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-primary mt-12 mb-4">
              Beräkna din potentiella SEO-avkastning
            </h2>
            <p className="text-muted-foreground leading-[1.6] mb-4">
              Använd vår kalkylator nedan för att se hur mycket mer intäkter din verksamhet kan generera med ökad organisk trafik. Fyll i dina nuvarande siffror och se den potentiella tillväxten.
            </p>
          </div>
        </section>

        <Suspense fallback={null}>
          <SeoRoiCalculator />
        </Suspense>

        <section className="py-12 sm:py-16 bg-background text-center">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-primary mb-6">
              Boka din kostnadsfria analys idag
            </h2>
            <p className="text-muted-foreground leading-[1.6] mb-8">
              Fyll i formuläret nedan så återkommer vi med din personliga SEO-analys inom 24 timmar. Helt utan kostnad eller förpliktelser.
            </p>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default GratisSeoAnalys;
