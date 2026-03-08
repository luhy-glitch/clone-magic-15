import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import LrhLogo from "@/components/LrhLogo";

const localServices = [
  { label: "Webbutveckling Västerås", to: "/webbutveckling-vasteras" },
  { label: "SEO Köping", to: "/seo-koping" },
  { label: "Hemsidor Sala", to: "/hemsidor-sala" },
  { label: "Webbdesign Enköping", to: "/webbutveckling-enkoping" },
  { label: "SEO Eskilstuna", to: "/webbutveckling-eskilstuna" },
  { label: "Webbutveckling Arboga", to: "/webbutveckling-arboga" },
  { label: "Webbdesign Fagersta", to: "/webbutveckling-fagersta" },
  { label: "Webbutveckling Hallstahammar", to: "/webbutveckling-hallstahammar" },
  { label: "Webbutveckling Kungsör", to: "/webbutveckling-kungsor" },
  { label: "Webbutveckling Surahammar", to: "/webbutveckling-surahammar" },
  { label: "Webbutveckling Heby", to: "/webbutveckling-heby" },
  { label: "Webbutveckling Norberg", to: "/webbutveckling-norberg" },
  { label: "Webbutveckling Skinnskatteberg", to: "/webbutveckling-skinnskatteberg" },
  { label: "Webbutveckling Uppsala", to: "/webbutveckling-uppsala" },
  { label: "Webbutveckling Örebro", to: "/webbutveckling-orebro" },
  { label: "Hemsidor Bygg & Hantverkare", to: "/hemsidor-bygg-hantverkare" },
  { label: "Restauranger Sala", to: "/restauranger-sala" },
  { label: "Frisörer Köping", to: "/frisor-koping" },
  { label: "Digital Marknadsföring", to: "/digital-marknadsforing-butiker" },
  { label: "Vad kostar en hemsida?", to: "/tjanster/vad-kostar-en-hemsida-2026" },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand + NAP */}
          <div className="sm:col-span-2 lg:col-span-1" itemScope itemType="https://schema.org/ProfessionalService">
            <div className="mb-4">
              <LrhLogo
                variant="white"
                className="h-11 w-auto opacity-90"
                width={180}
                height={45}
              />
              <meta itemProp="name" content="LRH Konsult" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4" itemProp="description">
              Din lokala partner för Webbutveckling &amp; SEO i Mälardalen &amp; Västmanland.
            </p>
            <address className="not-italic text-sm text-muted-foreground space-y-1" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <p itemProp="addressLocality">Västerås</p>
              <p><span itemProp="addressRegion">Västmanlands län</span>, <span itemProp="addressCountry">Sverige</span></p>
              <p>
                <a href="tel:+46704606578" className="hover:text-primary transition-colors" itemProp="telephone">
                  070 460 65 78
                </a>
              </p>
              <p>
                <a href="mailto:lucas@lrhkonsult.se" className="hover:text-primary transition-colors" itemProp="email">
                  lucas@lrhkonsult.se
                </a>
              </p>
            </address>
            <meta itemProp="url" content="https://lrhkonsult.se" />
          </div>

          {/* Tjänster */}
          <nav aria-label="Tjänster">
            <h3 className="font-serif font-bold text-foreground mb-4 text-base">Tjänster</h3>
            <ul className="space-y-2">
              <li><Link to="/tjanster/webbutveckling" className="text-sm text-muted-foreground hover:text-primary transition-colors">Webbutveckling</Link></li>
              <li><Link to="/tjanster/webbdesign" className="text-sm text-muted-foreground hover:text-primary transition-colors">Webbdesign</Link></li>
              <li><Link to="/tjanster/seo-optimering" className="text-sm text-muted-foreground hover:text-primary transition-colors">SEO-optimering</Link></li>
              <li><Link to="/tjanster/wordpress-losningar" className="text-sm text-muted-foreground hover:text-primary transition-colors">WordPress</Link></li>
              <li><Link to="/tjanster/underhall-support" className="text-sm text-muted-foreground hover:text-primary transition-colors">Underhåll & Support</Link></li>
              <li><Link to="/tjanster/prestanda-optimering" className="text-sm text-muted-foreground hover:text-primary transition-colors">Prestanda</Link></li>
            </ul>
          </nav>

          {/* Sidor */}
          <nav aria-label="Sidor">
            <h3 className="font-serif font-bold text-foreground mb-4 text-base">Sidor</h3>
            <ul className="space-y-2">
              <li><Link to="/om-mig" className="text-sm text-muted-foreground hover:text-primary transition-colors">Om mig</Link></li>
              <li><Link to="/case" className="text-sm text-muted-foreground hover:text-primary transition-colors">Kundcase</Link></li>
              <li><Link to="/blogg" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blogg</Link></li>
              <li><Link to="/kontakt" className="text-sm text-muted-foreground hover:text-primary transition-colors">Kontakt</Link></li>
              <li><Link to="/gratis-seo-analys" className="text-sm text-muted-foreground hover:text-primary transition-colors">Gratis SEO-analys</Link></li>
              <li><Link to="/integritetspolicy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Integritetspolicy</Link></li>
            </ul>
          </nav>

          {/* Regionalt – SEO hub */}
          <nav aria-label="Regionalt" className="lg:col-span-2">
            <h3 className="font-serif font-bold text-foreground mb-4 text-base">Regionalt</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {localServices.map(s => (
                <li key={s.to}>
                  <Link to={s.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 mt-6">
              {[
                { Icon: Mail, label: "Skicka e-post", href: "mailto:lucas@lrhkonsult.se" },
                { Icon: Phone, label: "Ring oss", href: "tel:+46704606578" },
                { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/lucasrosvall/" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </nav>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© 2026 LRH Konsult. Alla rättigheter förbehållna.</span>
          <Link
            to="/case"
            className="inline-flex items-center gap-2 text-primary hover:underline transition-colors"
            aria-label="100/100 PageSpeed Guaranteed"
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 14.5l3.5 3.5 8.5-8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-medium">100/100 PageSpeed</span>
          </Link>
          <span>
            En del av{" "}
            <a href="https://frontiermedia.se" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              Frontier Media
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
