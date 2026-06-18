import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import AnimatedSection, { FadeIn } from "@/components/AnimatedSection";
import { trackCTAClick } from "@/lib/analytics";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type Plan = {
  name: string;
  price: string;
  unit?: string;
  from?: boolean;
  description: string;
  features: string[];
  popular?: boolean;
};

const websites: Plan[] = [
  {
    name: "Onepager",
    price: "12 000",
    unit: "kr",
    description: "En slagkraftig ensidig webbplats för dig som snabbt vill synas professionellt.",
    features: ["1 sida, responsiv design", "Grundläggande SEO", "Kontaktformulär", "Google Analytics"],
  },
  {
    name: "Bas",
    price: "20 000",
    unit: "kr",
    description: "För företaget som behöver en komplett närvaro med flera sidor.",
    features: [
      "2–5 sidor, responsiv design",
      "Komplett on-page-SEO",
      "Kontaktformulär + kartintegration",
      "Google Analytics + Search Console",
      "1 revideringsrunda",
    ],
    popular: true,
  },
  {
    name: "Tillväxt",
    price: "30 000",
    unit: "kr",
    description: "För dig som vill växa med innehåll, struktur och konvertering i fokus.",
    features: [
      "6–12 sidor, skräddarsydd design",
      "Avancerad SEO-arkitektur",
      "Blogg/nyheter + tjänstesidor",
      "CMS för eget innehåll",
      "Konverteringsoptimering",
    ],
  },
  {
    name: "Skräddarsytt",
    price: "50 000",
    unit: "kr",
    from: true,
    description: "Komplexa projekt med e-handel, bokning eller integrationer.",
    features: [
      "12+ sidor, komplex arkitektur",
      "E-handel, bokning eller API:er",
      "Avancerad SEO-struktur",
      "Dedikerad projektledare",
    ],
  },
];

const seo: Plan[] = [
  {
    name: "Lokal Synlighet",
    price: "8 000",
    unit: "kr / mån",
    description: "Syns lokalt på dina viktigaste sökord i din hemstad.",
    features: [
      "1 tjänst, 1 ort, ca 5 sökord",
      "Optimering av Google Business-profil",
      "On-page-optimering av befintliga sidor",
      "Månatlig ROI-rapport",
      "Konkurrentanalys ingår",
    ],
  },
  {
    name: "Lokal Dominans",
    price: "15 000",
    unit: "kr / mån",
    description: "Ta täten lokalt med innehåll, länkbygge och AI-sökoptimering.",
    features: [
      "Upp till 3 tjänster, 10–15 sökord",
      "AI-SEO / GEO (ChatGPT, Perplexity)",
      "Innehållsproduktion + länkbygge",
      "Schema + teknisk SEO-audit",
      "Kvartalsmöte (60 min)",
    ],
    popular: true,
  },
  {
    name: "Marknadsledare",
    price: "25 000",
    unit: "kr / mån",
    description: "Bredd över flera orter och tjänster med full AI-SEO-strategi.",
    features: [
      "Flera orter, obegränsade sökord",
      "Full AI-SEO / GEO-strategi",
      "10+ texter/sidor per månad",
      "Aktivt länkbygge",
      "Dedikerad kontakt + månadsmöten",
    ],
  },
  {
    name: "Enterprise",
    price: "35 000",
    unit: "kr / mån",
    from: true,
    description: "Region- eller rikstäckande omfattning, anpassat efter dig.",
    features: ["Region/rikstäckande", "Anpassad omfattning", "Prioriterad support", "Kontakta oss för offert"],
  },
];

const ads: Plan[] = [
  {
    name: "Lokal Start",
    price: "2 490",
    unit: "kr / mån",
    description: "För enskilda firmor och lokala företag som vill synas på specifika sökord.",
    features: ["1 fokuserad kampanj", "Grundläggande sökordsanalys", "Månadsvis optimering", "Rapport via e-post"],
  },
  {
    name: "Tillväxt",
    price: "4 900",
    unit: "kr / mån",
    description: "För dig som vill nå fler orter eller marknadsföra flera tjänster.",
    features: [
      "Upp till 3 kampanjer",
      "Djupgående konkurrentanalys",
      "Veckovis optimering & A/B-test",
      "Video-genomgång varje månad",
    ],
    popular: true,
  },
  {
    name: "Marknadsledare",
    price: "8 500",
    unit: "kr / mån",
    description: "Helhetslösning för att dominera din bransch lokalt och regionalt.",
    features: ["Obegränsat antal kampanjer", "Avancerad remarketing", "Optimering i realtid", "Personligt strategimöte"],
  },
];

const PlanCard = ({ plan, ctaTo, ctaLabel }: { plan: Plan; ctaTo: string; ctaLabel: string }) => (
  <div
    className={`relative rounded-2xl border p-6 sm:p-8 flex flex-col h-full transition-shadow ${
      plan.popular ? "border-primary bg-card shadow-lg shadow-primary/10" : "border-border bg-card hover:shadow-md"
    }`}
  >
    {plan.popular && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
        Populärast
      </span>
    )}
    <div className="mb-5">
      <h3 className="text-lg font-bold text-foreground">{plan.name}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
    </div>
    <div className="mb-6">
      {plan.from && <span className="text-sm text-muted-foreground mr-1">från</span>}
      <span className="text-3xl sm:text-4xl font-bold text-foreground">{plan.price}</span>
      <span className="text-muted-foreground ml-1 text-sm">{plan.unit}</span>
    </div>
    <ul className="space-y-3 mb-8 flex-1">
      {plan.features.map((f) => (
        <li key={f} className="flex items-start gap-3 text-sm text-foreground">
          <Check size={16} className="text-primary mt-0.5 shrink-0" />
          {f}
        </li>
      ))}
    </ul>
    <Link
      to={ctaTo}
      onClick={() => trackCTAClick(`priser-${plan.name.toLowerCase().replace(/\s+/g, "-")}`, "priser")}
      className={`w-full text-center py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2 ${
        plan.popular
          ? "bg-primary text-primary-foreground hover:bg-primary/90"
          : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
      }`}
    >
      {ctaLabel} <ArrowRight size={16} />
    </Link>
  </div>
);

const PriceSection = ({
  id,
  eyebrow,
  title,
  intro,
  plans,
  cols,
  ctaTo,
  ctaLabel,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  plans: Plan[];
  cols: string;
  ctaTo: string;
  ctaLabel: string;
}) => (
  <section id={id} className="py-14 sm:py-20 border-t border-border first:border-t-0">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <AnimatedSection>
        <div className="max-w-2xl mb-10 sm:mb-12">
          <span className="text-primary font-medium text-sm tracking-widest uppercase">{eyebrow}</span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">{title}</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">{intro}</p>
        </div>
      </AnimatedSection>
      <div className={`grid gap-6 sm:gap-8 ${cols}`}>
        {plans.map((plan, i) => (
          <FadeIn key={plan.name} delay={Math.min(i, 4) * 0.06}>
            <PlanCard plan={plan} ctaTo={ctaTo} ctaLabel={ctaLabel} />
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

const toPrice = (p: string) => p.replace(/\s/g, "");
const makeOffers = (plans: Plan[], category: string, recurring: boolean) =>
  plans.map((p) => ({
    "@type": "Offer",
    name: `${category} – ${p.name}`,
    priceCurrency: "SEK",
    price: toPrice(p.price),
    url: "https://www.lrhkonsult.se/priser",
    ...(recurring
      ? {
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: toPrice(p.price),
            priceCurrency: "SEK",
            referenceQuantity: { "@type": "QuantitativeValue", value: 1, unitCode: "MON" },
          },
        }
      : {}),
  }));

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.lrhkonsult.se" },
        { "@type": "ListItem", position: 2, name: "Priser", item: "https://www.lrhkonsult.se/priser" },
      ],
    },
    {
      "@type": "OfferCatalog",
      name: "Priser – Hemsida, SEO & Google Ads | LRH Konsult",
      url: "https://www.lrhkonsult.se/priser",
      itemListElement: [
        ...makeOffers(websites, "Hemsida", false),
        ...makeOffers(seo, "SEO", true),
        ...makeOffers(ads, "Google Ads", true),
      ],
    },
  ],
};

const Priser = () => {
  return (
    <div className="min-h-screen">
      <PageHead
        title="Priser – Hemsida, SEO & Google Ads | LRH Konsult"
        description="Transparenta priser i Västmanland. Hemsida från 12 000 kr, SEO från 8 000 kr/mån, Google Ads från 2 490 kr/mån. Fasta paket, inga dolda avgifter."
        jsonLd={jsonLd}
      />
      <Navbar />
      <main className="pt-16">
        {/* Breadcrumbs */}
        <nav className="bg-section-alt border-b border-border" aria-label="Brödsmulor">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link to="/">Hem</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Priser</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </nav>

        {/* Hero */}
        <section className="bg-hero text-hero-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
            <AnimatedSection>
              <span className="text-primary font-medium text-sm tracking-widest uppercase">Priser</span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
                Transparenta priser för <span className="text-primary">hemsida, SEO &amp; Google Ads</span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-hero-muted max-w-2xl">
                Fasta paket utan dolda avgifter — för företag i Västerås och hela Västmanland. Osäker på vad som passar
                dig? Boka en kostnadsfri analys så tar vi fram rätt nivå tillsammans.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#hemsidor" className="px-5 py-2.5 rounded-full bg-card border border-border text-sm font-medium hover:border-primary/40 transition-colors">Hemsidor</a>
                <a href="#seo" className="px-5 py-2.5 rounded-full bg-card border border-border text-sm font-medium hover:border-primary/40 transition-colors">SEO</a>
                <a href="#ads" className="px-5 py-2.5 rounded-full bg-card border border-border text-sm font-medium hover:border-primary/40 transition-colors">Google Ads</a>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <PriceSection
          id="hemsidor"
          eyebrow="Hemsidor"
          title="Webbplats – engångskostnad"
          intro="Snabba, sökmotoroptimerade hemsidor byggda för att konvertera. Engångspris per projekt."
          plans={websites}
          cols="sm:grid-cols-2 lg:grid-cols-4"
          ctaTo="/kontakt"
          ctaLabel="Få offert"
        />

        <PriceSection
          id="seo"
          eyebrow="Sökmotoroptimering"
          title="SEO – löpande per månad"
          intro="Långsiktig synlighet på Google (och i AI-sök som ChatGPT). Ingen bindningstid på prislistan — vi sätter rätt nivå efter dina mål."
          plans={seo}
          cols="sm:grid-cols-2 lg:grid-cols-4"
          ctaTo="/gratis-seo-analys"
          ctaLabel="Boka gratis analys"
        />

        <PriceSection
          id="ads"
          eyebrow="Google Ads"
          title="Google Ads – löpande per månad"
          intro="Synlighet direkt högst upp på Google. Fast månadskostnad för förvaltningen — annonsbudgeten betalar du separat till Google."
          plans={ads}
          cols="sm:grid-cols-3"
          ctaTo="/gratis-seo-analys"
          ctaLabel="Boka gratis analys"
        />

        {/* Notes */}
        <section className="pb-16 sm:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
              <h2 className="text-lg font-bold mb-4">Bra att veta</h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3"><Check size={16} className="text-primary mt-0.5 shrink-0" />Alla priser anges <strong className="text-foreground">exklusive moms</strong>.</li>
                <li className="flex items-start gap-3"><Check size={16} className="text-primary mt-0.5 shrink-0" />Hosting/drift tillkommer och faktureras separat.</li>
                <li className="flex items-start gap-3"><Check size={16} className="text-primary mt-0.5 shrink-0" />Google Ads: en startavgift på <strong className="text-foreground">3 500 kr</strong> tillkommer för uppsättning av konto, spårning och analys. Annonsbudgeten betalas separat till Google.</li>
                <li className="flex items-start gap-3"><Check size={16} className="text-primary mt-0.5 shrink-0" /><strong className="text-foreground">50% rabatt på hemsidan</strong> vid tecknande av 12-månaders SEO-avtal (Lokal Dominans eller Marknadsledare).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 bg-section-alt text-center" aria-labelledby="priser-cta">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <h2 id="priser-cta" className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
                Osäker på vad du behöver?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                Boka en kostnadsfri analys så går vi igenom din nuvarande synlighet och föreslår rätt paket för dina mål
                och din budget — utan förpliktelser.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/gratis-seo-analys"
                  onClick={() => trackCTAClick("priser-cta-analys", "priser")}
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-primary text-primary-foreground font-medium text-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                >
                  Få gratis analys <ArrowRight size={20} />
                </Link>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-border text-foreground font-medium hover:bg-muted/50 transition-colors"
                >
                  Kontakta oss <ArrowRight size={18} />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Priser;
