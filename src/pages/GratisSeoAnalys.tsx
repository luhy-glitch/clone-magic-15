import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import Contact from "@/components/Contact";
import { ArrowRight, Download, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const SeoRoiCalculator = lazy(() => import("@/components/SeoRoiCalculator"));

const pdfGuideSteps = [
  { title: "Optimera bilder med AVIF & WebP", desc: "Minska bildvikten med upp till 80 % utan kvalitetsförlust." },
  { title: "Välj rätt teknikstack", desc: "React & Next.js för förrenderade, blixtsnabba sidor." },
  { title: "Eliminera JavaScript-blockeringar", desc: "Nå 0ms TBT genom smart code-splitting." },
  { title: "Prioritera Core Web Vitals", desc: "Fixa CLS, LCP och FID för bättre ranking." },
  { title: "Implementera strukturerad data", desc: "FAQ-schema och JSON-LD för rika sökresultat." },
];

const GratisSeoAnalys = () => {
  return (
    <div className="min-h-screen">
      <PageHead
        title="Gratis SEO-analys | LRH Konsult"
        description="Få en kostnadsfri SEO-analys av din hemsida. Se hur mycket mer trafik och intäkter du kan generera med rätt optimering."
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "name": "Gratis SEO-analys",
              "description": "Kostnadsfri SEO-analys för företag i Västmanland och Mälardalen.",
              "url": "https://www.lrhkonsult.se/gratis-seo-analys",
              "provider": {
                "@type": "ProfessionalService",
        "address": { "@type": "PostalAddress", "addressLocality": "Västerås", "addressRegion": "Västmanland", "addressCountry": "SE" },
                "name": "LRH Konsult",
                "url": "https://www.lrhkonsult.se",
              },
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                { "@type": "Question", "name": "Vad ingår i den gratis SEO-analysen?", "acceptedAnswer": { "@type": "Answer", "text": "Vi granskar din hemsidas tekniska prestanda, laddningstider, Core Web Vitals, lokal SEO och ger konkreta rekommendationer." } },
                { "@type": "Question", "name": "Hur lång tid tar analysen?", "acceptedAnswer": { "@type": "Answer", "text": "Vi återkommer med din personliga analys inom 24 timmar efter att du skickat in formuläret." } },
                { "@type": "Question", "name": "Kostar det något?", "acceptedAnswer": { "@type": "Answer", "text": "Nej, analysen är helt kostnadsfri och utan förpliktelser." } },
                { "@type": "Question", "name": "Vilka områden täcker analysen?", "acceptedAnswer": { "@type": "Answer", "text": "Vi analyserar teknisk SEO, sidprestanda, mobilanpassning, lokal synlighet och innehållsoptimering." } },
                { "@type": "Question", "name": "Kan jag få hjälp att implementera förbättringarna?", "acceptedAnswer": { "@type": "Answer", "text": "Absolut! Vi erbjuder paket för att implementera alla rekommenderade förbättringar." } },
              ],
            },
          ],
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
              Vill du veta hur din hemsida presterar i sökresultaten? Vi erbjuder en kostnadsfri{" "}
              <Link to="/tjanster/seo-optimering" className="text-primary hover:underline font-medium">SEO-analys</Link>{" "}
              där vi identifierar förbättringsområden och ger konkreta rekommendationer för att öka din organiska trafik och synlighet.
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-primary mt-12 mb-4">
              Vad ingår i analysen?
            </h2>
            <p className="text-muted-foreground leading-[1.6] mb-4">
              Vår SEO-analys täcker de viktigaste aspekterna av din digitala närvaro. Vi granskar din hemsidas tekniska{" "}
              <Link to="/tjanster/prestanda-optimering" className="text-primary hover:underline font-medium">prestanda</Link>,{" "}
              inklusive laddningstider och Core Web Vitals, samt hur väl din sajt är optimerad för lokala sökningar i ditt område.
            </p>
            <p className="text-muted-foreground leading-[1.6] mb-8">
              Du får en tydlig rapport med prioriterade åtgärder som kan ge dig fler besökare, bättre ranking och i slutändan fler kunder. Behöver du en helt ny sajt? Vi erbjuder{" "}
              <Link to="/tjanster/webbutveckling" className="text-primary hover:underline font-medium">professionell webbutveckling</Link>{" "}
              och{" "}
              <Link to="/tjanster/webbdesign" className="text-primary hover:underline font-medium">webbdesign</Link>{" "}
              som är optimerade för konvertering från dag ett.
            </p>

            {/* PDF Guide Lead Magnet */}
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-primary mt-12 mb-4">
              Gratis guide: 5 steg till en blixtsnabb hemsida
            </h2>
            <p className="text-muted-foreground leading-[1.6] mb-6">
              I dagens digitala landskap är hastighet inte längre en lyx – det är en absolut nödvändighet. Genom att optimera din sajt för 100/100 i PageSpeed säkerställer du att du behåller besökare och konverterar dem till kunder i{" "}
              <Link to="/webbutveckling-vasteras" className="text-primary hover:underline font-medium">Västerås</Link>,{" "}
              <Link to="/hemsidor-sala" className="text-primary hover:underline font-medium">Sala</Link> och{" "}
              <Link to="/seo-koping" className="text-primary hover:underline font-medium">Köping</Link>.
            </p>

            <div className="space-y-4 mb-8">
              {pdfGuideSteps.map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Steg {i + 1}: {step.title}</p>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground leading-[1.6] mb-8">
              Fyll i formuläret nedan för att få din gratis SEO-analys – och som bonus skickar vi med vår kompletta guide med alla fem stegen i detalj. Vill du veta mer om vad vi kan göra för ditt företag? Kolla in våra{" "}
              <Link to="/tjanster/google-ads" className="text-primary hover:underline font-medium">Google Ads-lösningar</Link>{" "}
              eller läs om{" "}
              <Link to="/tjanster/underhall-support" className="text-primary hover:underline font-medium">löpande underhåll och support</Link>.
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
            <p className="text-muted-foreground leading-[1.6] mb-4">
              Fyll i formuläret nedan så återkommer vi med din personliga SEO-analys inom 24 timmar. Helt utan kostnad eller förpliktelser.
            </p>
            <p className="text-sm text-primary font-medium mb-8 flex items-center justify-center gap-2">
              <Download size={16} />
              Bonus: Du får även vår PDF-guide "5 steg till en blixtsnabb hemsida"
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
