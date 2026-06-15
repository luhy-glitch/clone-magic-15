import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection, { FadeIn } from "./AnimatedSection";
import { trackCTAClick } from "@/lib/analytics";

const plans = [
  {
    name: "Onepager",
    price: "12 000",
    description: "En slagkraftig ensidig webbplats för dig som snabbt vill synas professionellt.",
    features: [
      "1 sida, responsiv design",
      "Grundläggande SEO",
      "Kontaktformulär",
      "Google Analytics",
    ],
    popular: false,
  },
  {
    name: "Bas",
    price: "20 000",
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
    description: "För dig som vill växa med innehåll, struktur och konvertering i fokus.",
    features: [
      "6–12 sidor, skräddarsydd design",
      "Avancerad SEO-arkitektur",
      "Blogg/nyheter + tjänstesidor",
      "CMS för eget innehåll",
      "Konverteringsoptimering",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="priser" className="py-14 sm:py-20 md:py-28 bg-section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-primary font-medium text-sm tracking-widest uppercase">
              Priser
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
              Välj det paket som <span className="text-primary">passar dig</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Transparenta priser utan dolda kostnader. Alla paket inkluderar personlig service och kvalitetsgaranti.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={0.1 + i * 0.15}>
              <div
                className={`relative rounded-2xl border p-6 sm:p-8 flex flex-col h-full transition-shadow ${
                  plan.popular
                    ? "border-primary bg-card shadow-lg shadow-primary/10 scale-[1.02]"
                    : "border-border bg-card hover:shadow-md"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full" aria-label="Mest populära paketet">
                    Populärast
                  </span>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
                </div>
                <div className="mb-6">
                  <span className="text-3xl sm:text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">kr</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-foreground">
                      <Check size={16} className="text-primary mt-0.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/gratis-seo-analys"
                  onClick={() => trackCTAClick(`pricing-${plan.name.toLowerCase()}-cta`, "pricing")}
                  className={`w-full text-center py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2 ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90 animate-cta-pulse"
                      : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  Kom igång <ArrowRight size={16} />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <Link
            to="/priser"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Se alla priser – hemsida, SEO &amp; Google Ads <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
