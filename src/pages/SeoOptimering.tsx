import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import Contact from "@/components/Contact";
import AnimatedSection, { FadeIn } from "@/components/AnimatedSection";
import { Search, BarChart3, MapPin, Globe, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  { icon: Search, title: "Teknisk SEO", desc: "Optimering av webbplatsstruktur, hastighet och crawlbarhet för bättre indexering." },
  { icon: BarChart3, title: "Innehållsstrategi", desc: "Sökordsanalys och innehållsoptimering som driver organisk trafik." },
  { icon: MapPin, title: "Lokal SEO", desc: "Synas när kunder i Västerås, Köping och Sala söker efter dina tjänster." },
  { icon: Globe, title: "On-page optimering", desc: "Metadata, rubriker, interna länkar och strukturerad data för toppresultat." },
];

const SeoOptimering = () => {
  return (
    <div className="min-h-screen">
      <PageHead
        title="SEO-optimering Västmanland | Ranka #1 | LRH Konsult"
        description="Professionell SEO för företag i Västerås, Köping och Sala. Teknisk SEO, lokal sökmotoroptimering och innehållsstrategi som ökar din Google-synlighet."
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "name": "SEO-optimering i Västmanland",
              "description": "Professionell sökmotoroptimering för företag i Västerås, Köping och Sala.",
              "url": "https://lrhkonsult.se/seo-optimering",
              "provider": {
                "@type": "ProfessionalService",
                "name": "LRH Konsult",
                "url": "https://lrhkonsult.se",
                "telephone": "+46704606578",
                "email": "lucas@lrhkonsult.se",
                "address": { "@type": "PostalAddress", "addressLocality": "Västerås", "addressRegion": "Västmanlands län", "addressCountry": "SE" }
              },
              "areaServed": [
                { "@type": "City", "name": "Västerås" },
                { "@type": "City", "name": "Köping" },
                { "@type": "City", "name": "Sala" }
              ]
            }
          ]
        }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-hero text-hero-foreground pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32">
            <AnimatedSection>
              <span className="text-primary font-medium text-sm tracking-widest uppercase">SEO-optimering</span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
                Ranka högre på <span className="text-primary">Google</span> i Västmanland
              </h1>
              <p className="mt-6 text-lg text-hero-muted max-w-2xl">
                Jag hjälper företag i Västerås, Köping och Sala att öka sin synlighet på Google genom beprövade SEO-strategier som ger mätbara resultat.
              </p>
              <Link
                to="/kontakt"
                className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Boka SEO-analys <ArrowRight size={18} />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* Services grid */}
        <section className="py-14 sm:py-20 md:py-28 bg-section-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((s, i) => (
                <FadeIn key={s.title} delay={i * 0.1}>
                  <div className="bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <s.icon size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold font-serif mb-3">{s.title}</h3>
                    <p className="text-muted-foreground">{s.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-14 sm:py-20 md:py-28 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
                Hur lång tid tar <span className="text-primary">SEO-optimering?</span>
              </h2>
              <div className="prose prose-invert max-w-none text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  Sökmotoroptimering är en långsiktig investering som ger bestående resultat. Till skillnad från betald annonsering bygger SEO upp en organisk synlighet som fortsätter att leverera trafik och leads över tid. De första förbättringarna syns ofta inom 2–3 månader, medan mer konkurrenskraftiga sökord kan ta 6–12 månader att ranka för.
                </p>
                <p>
                  Som SEO-konsult i Västmanland fokuserar jag på att hjälpa lokala företag i Västerås, Köping och Sala att synas för relevanta sökningar. Lokal SEO är särskilt kraftfullt för tjänsteföretag – genom att optimera din Google Business-profil, bygga lokala citeringar och skapa innehåll riktat mot ditt geografiska område kan du dominera de lokala sökresultaten.
                </p>
                <p>
                  Min SEO-process börjar alltid med en grundlig teknisk analys av din webbplats. Jag identifierar och åtgärdar tekniska problem som påverkar indexering, optimerar sidans laddtider och säkerställer att din webbplats är mobilvänlig. Därefter fokuserar jag på on-page-optimering: sökord, metadata, rubrikstruktur och intern länkning.
                </p>
                <p>
                  Vill du att ditt företag ska ranka högre på Google? Boka en kostnadsfri SEO-analys så visar jag konkret vilka förbättringar som kan göras och vilken potential din webbplats har. Jag erbjuder skräddarsydda SEO-paket anpassade efter din budget och dina mål – oavsett om du vill synas lokalt i Västmanland eller nå en bredare publik nationellt.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Related links */}
        <section className="py-12 sm:py-16 bg-section-alt border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <h2 className="text-xl sm:text-2xl font-bold font-serif mb-6 text-center">
                SEO-optimering nära dig
              </h2>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {[
                  { href: "/seo-koping", label: "SEO i Köping" },
                  { href: "/webbutveckling-vasteras", label: "Webbutveckling i Västerås" },
                  { href: "/hemsidor-sala", label: "Hemsidor i Sala" },
                ].map((l) => (
                  <Link key={l.href} to={l.href} className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card text-foreground font-medium hover:bg-primary/10 hover:border-primary/30 transition-colors">
                    {l.label} <ArrowRight size={16} className="text-primary" />
                  </Link>
                ))}
              </div>
              <h3 className="text-lg font-bold font-serif mb-4 text-center text-muted-foreground">Se även</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { href: "/tjanster/webbutveckling", label: "Webbutveckling" },
                  { href: "/tjanster/webbdesign", label: "Webbdesign" },
                  { href: "/tjanster/prestanda-optimering", label: "Prestandaoptimering" },
                  { href: "/blogg", label: "Blogg" },
                ].map((s) => (
                  <Link key={s.href} to={s.href} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors">
                    {s.label} <ArrowRight size={14} className="text-primary" />
                  </Link>
                ))}
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

export default SeoOptimering;
