import { useState } from "react";
import { Mail, Phone, MapPin, Star, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import LrhLogo from "@/components/LrhLogo";
import { trackCTAClick } from "@/lib/analytics";
import { GOOGLE_REVIEW_URL } from "@/lib/constants";

const colHeading =
  "text-xs font-semibold uppercase tracking-[0.14em] text-foreground/60";
const navLink =
  "text-sm text-muted-foreground hover:text-primary transition-colors";

type FooterLink = { to: string; label: string; track?: string };

const services: FooterLink[] = [
  { to: "/tjanster/webbutveckling", label: "Webbutveckling" },
  { to: "/tjanster/seo-optimering", label: "SEO-optimering" },
  { to: "/tjanster/webbdesign", label: "Webbdesign" },
  { to: "/tjanster/google-ads", label: "Google Ads" },
  { to: "/tjanster/wordpress-losningar", label: "WordPress-lösningar" },
  { to: "/tjanster/underhall-support", label: "Underhåll & Support" },
  { to: "/tjanster/prestanda-optimering", label: "Prestandaoptimering" },
  { to: "/tjanster/vad-kostar-en-hemsida-2026", label: "Vad kostar en hemsida?" },
];

const cities: FooterLink[] = [
  { to: "/webbutveckling-vasteras", label: "Västerås" },
  { to: "/webbutveckling-enkoping", label: "Enköping" },
  { to: "/webbutveckling-eskilstuna", label: "Eskilstuna" },
  { to: "/webbutveckling-arboga", label: "Arboga" },
  { to: "/webbutveckling-fagersta", label: "Fagersta" },
  { to: "/webbutveckling-hallstahammar", label: "Hallstahammar" },
  { to: "/webbutveckling-kungsor", label: "Kungsör" },
  { to: "/webbutveckling-surahammar", label: "Surahammar" },
  { to: "/webbutveckling-heby", label: "Heby" },
  { to: "/webbutveckling-norberg", label: "Norberg" },
  { to: "/webbutveckling-skinnskatteberg", label: "Skinnskatteberg" },
  { to: "/webbutveckling-uppsala", label: "Uppsala" },
  { to: "/webbutveckling-orebro", label: "Örebro" },
];

const industries: FooterLink[] = [
  { to: "/hemsidor-restaurang", label: "Hemsidor restaurang" },
  { to: "/hemsidor-redovisning", label: "Hemsidor redovisning" },
  { to: "/hemsidor-ehandel", label: "E-handel hemsida" },
  { to: "/hemsidor-bygg-hantverkare", label: "Bygg & Hantverkare" },
  { to: "/hemsidor-sala", label: "Hemsidor Sala" },
  { to: "/seo-vasteras", label: "SEO Västerås" },
  { to: "/seo-eskilstuna", label: "SEO Eskilstuna" },
  { to: "/seo-koping", label: "SEO Köping" },
  { to: "/frisor-koping", label: "Frisör Köping" },
  { to: "/restauranger-sala", label: "Restauranger Sala" },
  { to: "/digital-marknadsforing-butiker", label: "Digital marknadsföring" },
  { to: "/designbyra-vasteras", label: "Designbyrå Västerås" },
];

const other: FooterLink[] = [
  { to: "/om-mig", label: "Om mig" },
  { to: "/case", label: "Kundcase" },
  { to: "/kontakt", label: "Kontakt" },
  { to: "/gratis-seo-analys", label: "Gratis SEO-analys", track: "footer-nav-seo-analys" },
  { to: "/integritetspolicy", label: "Integritetspolicy" },
];

const guides: FooterLink[] = [
  { to: "/blogg", label: "Alla artiklar" },
  { to: "/blogg/seo-vasteras-guide", label: "SEO-guide småföretag" },
  { to: "/blogg/lokal-seo-smaforetag", label: "Skapa hemsida guide" },
  { to: "/blogg/oka-hemsidans-hastighet", label: "Öka hemsidans hastighet" },
  { to: "/blogg/react-vs-wordpress", label: "React vs WordPress" },
  { to: "/blogg/google-business-profil-guide", label: "Google Business-guide" },
  { to: "/blogg/resan-till-100-pagespeed", label: "Nå 100/100 PageSpeed" },
  { to: "/blogg/core-web-vitals-vastmanland", label: "Core Web Vitals guide" },
  { to: "/blogg/hur-vanja-seo-byra", label: "Välja SEO-byrå 2026" },
  { to: "/blogg/billig-vs-professionell-hemsida", label: "Billig vs proffs hemsida" },
  { to: "/blogg/seo-priser-vad-kostar-seo", label: "SEO-priser 2026" },
];

const renderLink = (l: FooterLink) => (
  <Link
    to={l.to}
    onClick={l.track ? () => trackCTAClick(l.track!, "footer-nav") : undefined}
    className={navLink}
  >
    {l.label}
  </Link>
);

// Collapsible on mobile (tap to expand), static column on lg+.
// Links always stay in the DOM (CSS-toggled, never unmounted) so crawlers see them.
const FooterSection = ({
  title,
  links,
  isOpen,
  onToggle,
  className = "",
}: {
  title: string;
  links: FooterLink[];
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}) => (
  <div className={`border-t border-border lg:border-t-0 ${className}`}>
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-label={title}
      className="flex w-full items-center justify-between gap-2 py-4 lg:py-0 lg:mb-4 lg:pointer-events-none lg:cursor-default"
    >
      <span className={colHeading}>{title}</span>
      <ChevronDown
        size={16}
        className={`shrink-0 text-muted-foreground transition-transform lg:hidden ${isOpen ? "rotate-180" : ""}`}
      />
    </button>
    <ul className={`space-y-2.5 pb-5 lg:pb-0 ${isOpen ? "block" : "hidden"} lg:block`}>
      {links.map((l) => (
        <li key={l.to}>{renderLink(l)}</li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const toggle = (t: string) =>
    setOpenSection((cur) => (cur === t ? null : t));

  return (
    <footer className="bg-card">
      {/* Subtle gold hairline accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Brand + link sections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-0 lg:gap-y-10">
          {/* Brand + NAP — always visible */}
          <div className="lg:col-span-4 pb-8 lg:pb-0">
            <LrhLogo variant="white" className="h-11 w-auto" width={180} height={45} />
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Din lokala partner för webbutveckling &amp; SEO i Västmanland.
            </p>
            <address className="not-italic mt-5 space-y-2.5 text-sm text-muted-foreground">
              <p className="flex items-center gap-2.5">
                <MapPin size={15} className="shrink-0 text-primary/80" />
                Västerås, Västmanlands län
              </p>
              <p>
                <a href="tel:+46704606578" className="flex items-center gap-2.5 hover:text-primary transition-colors">
                  <Phone size={15} className="shrink-0 text-primary/80" />
                  070 460 65 78
                </a>
              </p>
              <p>
                <a href="mailto:lucas@lrhkonsult.se" className="flex items-center gap-2.5 hover:text-primary transition-colors">
                  <Mail size={15} className="shrink-0 text-primary/80" />
                  lucas@lrhkonsult.se
                </a>
              </p>
            </address>

            {/* Review CTA (only when a Google review link is configured) */}
            {GOOGLE_REVIEW_URL && (
              <a
                href={GOOGLE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackCTAClick("footer-google-review", "footer")}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-foreground hover:bg-primary/20 transition-colors"
              >
                <Star size={15} className="text-primary" fill="currentColor" />
                Lämna en recension på Google
              </a>
            )}
          </div>

          <FooterSection title="Tjänster" links={services} isOpen={openSection === "Tjänster"} onToggle={() => toggle("Tjänster")} className="lg:col-span-2" />
          <FooterSection title="Städer" links={cities} isOpen={openSection === "Städer"} onToggle={() => toggle("Städer")} className="lg:col-span-2" />
          <FooterSection title="Branscher" links={industries} isOpen={openSection === "Branscher"} onToggle={() => toggle("Branscher")} className="lg:col-span-2" />
          <FooterSection title="Övrigt" links={other} isOpen={openSection === "Övrigt"} onToggle={() => toggle("Övrigt")} className="lg:col-span-2" />
        </div>

        {/* Popular guides: accordion on mobile, horizontal band on lg+ */}
        <div className="border-t border-border lg:mt-12 lg:pt-8">
          <button
            type="button"
            onClick={() => toggle("Populära guider")}
            aria-expanded={openSection === "Populära guider"}
            aria-label="Populära guider"
            className="flex w-full items-center justify-between gap-2 py-4 lg:py-0 lg:mb-4 lg:pointer-events-none lg:cursor-default"
          >
            <span className={colHeading}>Populära guider</span>
            <ChevronDown
              size={16}
              className={`shrink-0 text-muted-foreground transition-transform lg:hidden ${openSection === "Populära guider" ? "rotate-180" : ""}`}
            />
          </button>
          <div className={`flex-col lg:flex-row lg:flex-wrap gap-x-6 gap-y-2.5 pb-5 lg:pb-0 ${openSection === "Populära guider" ? "flex" : "hidden"} lg:flex`}>
            {guides.map((g) => (
              <Link key={g.to} to={g.to} className={navLink}>
                {g.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 lg:mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>© 2026 LRH Konsult. Alla rättigheter förbehållna.</span>
          <Link
            to="/case"
            aria-label="100/100 PageSpeed"
            className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 hover:border-primary/50 hover:text-foreground transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="font-medium">100/100 PageSpeed</span>
          </Link>
          <span>
            En del av{" "}
            <a
              href="https://www.frontiermedia.se"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Frontier Media
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
