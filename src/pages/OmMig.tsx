import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import Contact from "@/components/Contact";
import AnimatedSection, { FadeIn, ScaleIn } from "@/components/AnimatedSection";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const skills = ["React", "TypeScript", "Next.js", "Node.js", "WordPress", "SEO", "Tailwind CSS", "Figma"];

const highlights = [
  "Över 5 års erfarenhet inom webbutveckling och digital strategi",
  "Specialiserad på moderna JavaScript-ramverk som React och Next.js",
  "Djup kunskap inom teknisk SEO och prestandaoptimering",
  "Personlig service med fokus på långsiktiga samarbeten",
  "Baserad i Västmanland – arbetar med kunder i hela Sverige",
];

const OmMig = () => {
  return (
    <div className="min-h-screen">
      <PageHead
        title="Om mig – Webbutvecklare i Västmanland | LRH Konsult"
        description="Lär känna Lucas på LRH Konsult – webbutvecklare och SEO-konsult med 5+ års erfarenhet, baserad i Västmanlands län. Personlig service för företag i Västerås, Köping och Sala."
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-hero text-hero-foreground pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32">
            <div className="grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
              <ScaleIn>
                <div className="flex justify-center">
                  <div className="bg-card rounded-2xl shadow-xl p-8 sm:p-10 text-center max-w-sm w-full border border-border">
                    <div className="mx-auto w-28 h-28 rounded-full bg-primary flex items-center justify-center mb-6">
                      <span className="text-primary-foreground font-serif text-4xl font-bold">LR</span>
                    </div>
                    <h2 className="font-serif font-bold text-xl">Lucas – LRH Konsult</h2>
                    <p className="text-muted-foreground text-sm mt-1">Webbutvecklare & SEO-konsult</p>
                    <p className="text-muted-foreground text-xs mt-1">Västmanlands län, Sverige</p>
                    <div className="flex flex-wrap justify-center gap-2 mt-6">
                      {skills.map((skill) => (
                        <span key={skill} className="px-3 py-1 rounded-full border border-primary/30 text-primary text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScaleIn>

              <AnimatedSection delay={0.2}>
                <span className="text-primary font-medium text-sm tracking-widest uppercase">Om mig</span>
                <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                  Passion för att skapa <span className="text-primary">digitala upplevelser</span>
                </h1>
                <ul className="mt-8 space-y-4">
                  {highlights.map((item, i) => (
                    <FadeIn key={item} delay={0.3 + i * 0.1}>
                      <li className="flex items-center gap-3">
                        <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    </FadeIn>
                  ))}
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-14 sm:py-20 md:py-28 bg-section-alt">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
                Min <span className="text-primary">bakgrund</span>
              </h2>
              <div className="prose prose-invert max-w-none text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  Jag heter Lucas och driver LRH Konsult från Västmanlands län. Med över fem års erfarenhet inom webbutveckling och digital strategi hjälper jag företag och entreprenörer att bygga starka digitala närvaron som konverterar besökare till kunder.
                </p>
                <p>
                  Min resa inom webbutveckling började med en passion för att lösa problem och skapa visuella upplevelser. Genom åren har jag fördjupat mig i moderna teknologier som React, Next.js och TypeScript, och kombinerar detta med en gedigen förståelse för SEO och användarupplevelse. Resultatet är webbplatser som inte bara ser fantastiska ut – de presterar också på toppnivå.
                </p>
                <p>
                  Jag arbetar med företag i Västerås, Köping, Sala och hela Västmanlands län, men tar även uppdrag från kunder över hela Sverige. Min arbetsstil präglas av transparens, tydlig kommunikation och ett genuint engagemang för varje projekt. Jag behandlar varje uppdrag som mitt eget och strävar alltid efter att överträffa förväntningarna.
                </p>
                <p>
                  Oavsett om du behöver en helt ny webbplats, vill förbättra din befintliga sida eller söker hjälp med SEO-optimering – jag är här för att hjälpa. Kontakta mig för ett kostnadsfritt samtal så diskuterar vi hur vi kan ta ditt företag till nästa nivå digitalt.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Services & Links */}
        <section className="py-14 sm:py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-center mb-8">
                Vad jag kan hjälpa dig med
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {[
                  { href: "/tjanster/webbutveckling", label: "Webbutveckling", desc: "Moderna hemsidor i React & Next.js" },
                  { href: "/tjanster/seo-optimering", label: "SEO-optimering", desc: "Ranka högre på Google" },
                  { href: "/tjanster/webbdesign", label: "Webbdesign", desc: "UI/UX som engagerar" },
                  { href: "/tjanster/wordpress-losningar", label: "WordPress", desc: "Snabba WP-lösningar" },
                  { href: "/tjanster/prestanda-optimering", label: "Prestanda", desc: "Optimera Core Web Vitals" },
                  { href: "/tjanster/underhall-support", label: "Underhåll & Support", desc: "Löpande drift och säkerhet" },
                ].map((s) => (
                  <Link key={s.href} to={s.href} className="group bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-md transition-all">
                    <h3 className="font-serif font-bold mb-1 group-hover:text-primary transition-colors">{s.label}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                    <span className="inline-flex items-center gap-1 text-primary text-xs font-medium mt-3 group-hover:gap-2 transition-all">
                      Läs mer om {s.label.toLowerCase()} <ArrowRight size={12} />
                    </span>
                  </Link>
                ))}
              </div>
              <h3 className="text-lg font-bold font-serif text-center mb-4 text-muted-foreground">Verksam lokalt i Västmanland</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { href: "/webbutveckling-vasteras", label: "Webbutveckling Västerås" },
                  { href: "/seo-koping", label: "SEO Köping" },
                  { href: "/hemsidor-sala", label: "Hemsidor Sala" },
                ].map((l) => (
                  <Link key={l.href} to={l.href} className="px-5 py-2.5 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors">
                    {l.label} →
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

export default OmMig;
