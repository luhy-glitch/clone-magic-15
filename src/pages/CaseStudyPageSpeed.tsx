import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import AnimatedSection from "@/components/AnimatedSection";
import Contact from "@/components/Contact";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const BASE_URL = "https://lrhkonsult.se";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Case: Från 40 till 100 i PageSpeed – En teknisk revolution",
  "author": { "@type": "Person", "name": "Lucas Rosvall" },
  "publisher": { "@type": "Organization", "name": "LRH Konsult" },
  "url": `${BASE_URL}/case-studies/pagespeed-revolution`,
};

const CaseStudyPageSpeed = () => (
  <div className="min-h-screen">
    <PageHead
      title="Case: Från 40 till 100 PageSpeed | LRH Konsult"
      description="Läs hur vi transformerade en hemsida från 40 till 100 i PageSpeed. Teknisk fallstudie med mätbara resultat för företag i Västmanland."
      jsonLd={jsonLd}
    />
    <Navbar />
    <main className="pt-16">
      <section className="relative bg-hero text-hero-foreground py-16 sm:py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-sm text-primary font-medium mb-4">Case Study</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight font-serif">
                Från 40 till 100 i PageSpeed – En teknisk revolution
              </h1>
              <p className="mt-6 text-lg text-hero-muted max-w-2xl leading-relaxed">
                En detaljerad fallstudie om hur vi transformerade en företagshemsida i Västmanland från bottennivå till perfekt 100/100 – och vad det innebar för deras affärsresultat.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-8">Utgångspunkten: En hemsida som halkade efter</h2>
            <div className="space-y-5 text-muted-foreground leading-[1.8] text-base">
              <p>Kunden – ett etablerat tjänsteföretag i Västmanland – kom till oss med ett problem som är vanligare än man tror: deras hemsida såg bra ut men presterade katastrofalt dåligt under huven. Google PageSpeed Insights visade 40 poäng i prestanda på mobil, vilket innebar att sidan tog över fem sekunder att ladda fullständigt. Konsekvensen var dramatisk: 60% av mobilbesökarna lämnade sidan innan den ens hade laddats klart.</p>
              <p>Problemet var inte bara en dålig användarupplevelse – det påverkade direkt deras placering i Googles sökresultat. Med Core Web Vitals som en bekräftad rankningsfaktor innebar den dåliga prestandan att konkurrenter med snabbare sajter konsekvent rankade högre, trots att kundens innehåll och auktoritet var starkare.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-section-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-8">Den tekniska diagnosen</h2>
            <div className="space-y-5 text-muted-foreground leading-[1.8] text-base">
              <p>Vår analys identifierade flera kritiska problemområden. Hemsidan var byggd på en traditionell WordPress-installation med ett tungt tema som laddade över 2 MB JavaScript och 15 externa CSS-filer vid varje sidladdning. Bilderna var i PNG-format utan komprimering, och det saknades helt server-side rendering eller statisk generering.</p>
              <p>Largest Contentful Paint (LCP) låg på 5,2 sekunder – långt över Googles rekommenderade gräns på 2,5 sekunder. Total Blocking Time (TBT) var 890 millisekunder, vilket innebar att sidan frös i nästan en sekund under laddningen. Cumulative Layout Shift (CLS) var 0,35, vilket betydde att sidans innehåll hoppade runt synligt medan resurser laddades in.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-8">Lösningen: En komplett ombyggnad</h2>
            <div className="space-y-5 text-muted-foreground leading-[1.8] text-base">
              <p>Vi beslutade att bygga om hemsidan från grunden med React och Next.js. Den nya arkitekturen använde server-side rendering för kritiska sidor, automatisk koddelning för att minimera JavaScript-payloaden, och statisk generering för sidor med sällan ändrat innehåll. Alla bilder konverterades till AVIF-format med explicita dimensioner för att eliminera layout shifts.</p>
              <p>Vi implementerade Critical CSS Inlining, vilket innebar att den mest nödvändiga designkoden laddades direkt i HTML-dokumentet istället för via externa filer. JavaScript-exekveringen optimerades genom att eliminera render-blockerande skript och använda requestIdleCallback för icke-kritiska komponenter. Resultatet var en TBT på exakt 0 millisekunder.</p>
              <p>Den totala mängden JavaScript som skickades till klienten minskade från 2 MB till 89 KB. LCP förbättrades från 5,2 sekunder till 0,8 sekunder. CLS gick från 0,35 till 0. Och det viktigaste: PageSpeed-poängen gick från 40 till 100 – på alla fyra kategorier.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-section-alt">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif mb-8">Resultaten: Mätbar affärseffekt</h2>
            <div className="space-y-5 text-muted-foreground leading-[1.8] text-base">
              <p>Inom tre månader efter lanseringen av den nya hemsidan såg kunden följande förändringar: organisk trafik ökade med 156%, genomsnittlig tid på sidan ökade med 340%, avhoppsfrekvensen minskade från 60% till 18%, och antalet leads via kontaktformuläret tredubblades.</p>
              <p>Den tekniska förbättringen hade en direkt effekt på sökmotorrankningen. Kunden gick från sida 3 till topp 3 på sina viktigaste sökord i Västmanland, vilket i sin tur drev den kraftiga ökningen i organisk trafik. Det var ett tydligt bevis på att teknisk prestanda inte bara är en fråga om användarupplevelse utan en fundamental SEO-strategi.</p>
              <p>Denna fallstudie visar varför vi på LRH Konsult alltid börjar med den tekniska grunden. En vacker hemsida som laddar långsamt är som en exklusiv butik med låst dörr – dina potentiella kunder ser den men kan aldrig ta sig in. Med 100/100 i PageSpeed öppnar vi dörren på vid gavel.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection>
            <h2 className="text-2xl font-bold font-serif mb-4">Vill du ha liknande resultat?</h2>
            <p className="text-muted-foreground mb-6">Boka en kostnadsfri analys av din hemsida och se hur vi kan hjälpa ditt företag i Västmanland.</p>
            <Link to="/kontakt" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25">
              Boka fri analys <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Contact />
    </main>
    <Footer />
  </div>
);

export default CaseStudyPageSpeed;
