import { Code2, Palette, Search, Settings, Wrench, Zap, Megaphone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection, { FadeIn } from "./AnimatedSection";

const services = [
  {
    icon: Code2,
    title: "Webbutveckling",
    description: "Skräddarsydda webbplatser byggda med modern teknik för optimal prestanda och säkerhet.",
    items: ["React & Next.js", "Responsiv design", "API-integrationer"],
    link: "/tjanster/webbutveckling",
    linkText: "Läs mer om professionell webbutveckling",
  },
  {
    icon: Palette,
    title: "Webbdesign",
    description: "Moderna och användarvänliga designs som speglar ditt varumärke och engagerar besökare.",
    items: ["UI/UX Design", "Varumärkesidentitet", "Prototyper"],
    link: "/tjanster/webbdesign",
    linkText: "Se våra lösningar för webbdesign",
  },
  {
    icon: Search,
    title: "SEO-optimering",
    description: "Öka din synlighet på Google och andra sökmotorer med beprövade strategier.",
    items: ["Teknisk SEO", "Innehållsoptimering", "Lokal SEO"],
    link: "/tjanster/seo-optimering",
    linkText: "Optimera din synlighet med SEO",
  },
  {
    icon: Megaphone,
    title: "Google Ads",
    description: "Syns högst upp på Google direkt. Fasta månadspaket för lokala företag i Mälardalen.",
    items: ["Sökordsannonsering", "Remarketing", "Konverteringsspårning"],
    link: "/tjanster/google-ads",
    linkText: "Läs mer om Google Ads-förvaltning",
  },
  {
    icon: Settings,
    title: "WordPress-lösningar",
    description: "Snabba och kostnadseffektiva WordPress-sajter med anpassade teman och plugins.",
    items: ["Anpassade teman", "WooCommerce", "Plugin-utveckling"],
    link: "/tjanster/wordpress-losningar",
    linkText: "Utforska våra WordPress-lösningar",
  },
  {
    icon: Wrench,
    title: "Underhåll & Support",
    description: "Månatliga supportpaket som säkerställer att din webbplats alltid fungerar optimalt.",
    items: ["Säkerhetsuppdateringar", "Backup-lösningar", "24/7 support"],
    link: "/tjanster/underhall-support",
    linkText: "Läs om vår support och underhåll",
  },
  {
    icon: Zap,
    title: "Prestanda-optimering",
    description: "Snabbare laddtider och bättre användarupplevelse genom teknisk optimering.",
    items: ["Hastighetsoptimering", "Core Web Vitals", "Cachning"],
    link: "/tjanster/prestanda-optimering",
    linkText: "Maxa hastigheten med prestandaoptimering",
  },
];

const Services = () => {
  return (
    <section id="tjanster" className="py-14 sm:py-20 md:py-28 bg-section-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-10 sm:mb-16">
            <span className="text-primary font-medium text-sm tracking-widest uppercase">Tjänster</span>
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-5xl font-bold">
              Allt du behöver för en{" "}
              <span className="text-primary">framgångsrik närvaro online</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Från koncept till lansering – jag erbjuder helhetslösningar som hjälper ditt företag att växa digitalt.
            </p>
          </div>
        </AnimatedSection>

        {/* Grid – top row 3 featured, bottom row 4 compact */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-5 sm:mb-6">
          {services.slice(0, 3).map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.08}>
              <Link
                to={service.link}
                className="group relative bg-card rounded-2xl border border-border/60 p-7 sm:p-8 h-full flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_8px_30px_-8px_hsl(38_92%_50%/0.15)]"
              >
                {/* Glow accent */}
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />

                <div className="relative z-10 flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                    <service.icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-serif">{service.title}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5 relative z-10">{service.description}</p>

                <ul className="space-y-2.5 flex-1 relative z-10">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-foreground/85">
                      <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <span className="mt-6 inline-flex items-center gap-1.5 text-primary text-sm font-medium relative z-10 group-hover:gap-2.5 transition-all">
                  {service.linkText} <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* Bottom row – 4 cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {services.slice(3).map((service, i) => (
            <FadeIn key={service.title} delay={(i + 3) * 0.08}>
              <Link
                to={service.link}
                className="group relative bg-card/70 rounded-xl border border-border/50 p-5 sm:p-6 h-full flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-card hover:shadow-[0_4px_20px_-6px_hsl(38_92%_50%/0.12)]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <service.icon size={18} className="text-primary" />
                  </div>
                  <h3 className="text-base font-bold font-serif">{service.title}</h3>
                </div>

                <p className="text-muted-foreground text-xs leading-relaxed mb-4 flex-1">{service.description}</p>

                <span className="inline-flex items-center gap-1 text-primary text-xs font-medium group-hover:gap-2 transition-all">
                  Läs mer <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
