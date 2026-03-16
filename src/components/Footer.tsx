import { Mail, Linkedin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import LrhLogo from "@/components/LrhLogo";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
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
              Din lokala partner för Webbutveckling &amp; SEO i Västmanland.
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
            <meta itemProp="url" content="https://www.lrhkonsult.se" />
          </div>

          {/* Tjänster */}
          <nav aria-label="Tjänster">
            <h3 className="font-serif font-bold text-foreground mb-4 text-base">Tjänster</h3>
            <ul className="space-y-2">
              <li><Link to="/tjanster/webbutveckling" className="text-sm text-muted-foreground hover:text-primary transition-colors">Webbutveckling</Link></li>
              <li><Link to="/tjanster/seo-optimering" className="text-sm text-muted-foreground hover:text-primary transition-colors">SEO-optimering</Link></li>
              <li><Link to="/tjanster/webbdesign" className="text-sm text-muted-foreground hover:text-primary transition-colors">Webbdesign</Link></li>
              <li><Link to="/tjanster/google-ads" className="text-sm text-muted-foreground hover:text-primary transition-colors">Google Ads</Link></li>
              <li><Link to="/tjanster/wordpress-losningar" className="text-sm text-muted-foreground hover:text-primary transition-colors">WordPress-lösningar</Link></li>
            </ul>
          </nav>

          {/* Städer */}
          <nav aria-label="Städer">
            <h3 className="font-serif font-bold text-foreground mb-4 text-base">Städer</h3>
            <ul className="space-y-2">
              <li><Link to="/webbutveckling-vasteras" className="text-sm text-muted-foreground hover:text-primary transition-colors">Webbutveckling Västerås</Link></li>
              <li><Link to="/webbutveckling-enkoping" className="text-sm text-muted-foreground hover:text-primary transition-colors">Webbutveckling Enköping</Link></li>
              <li><Link to="/webbutveckling-eskilstuna" className="text-sm text-muted-foreground hover:text-primary transition-colors">Webbutveckling Eskilstuna</Link></li>
              <li><Link to="/seo-koping" className="text-sm text-muted-foreground hover:text-primary transition-colors">SEO Köping</Link></li>
              <li><Link to="/hemsidor-sala" className="text-sm text-muted-foreground hover:text-primary transition-colors">Hemsidor Sala</Link></li>
            </ul>
          </nav>

          {/* Branscher */}
          <nav aria-label="Branscher">
            <h3 className="font-serif font-bold text-foreground mb-4 text-base">Branscher</h3>
            <ul className="space-y-2">
              <li><Link to="/hemsidor-restaurang" className="text-sm text-muted-foreground hover:text-primary transition-colors">Hemsidor restaurang</Link></li>
              <li><Link to="/hemsidor-redovisning" className="text-sm text-muted-foreground hover:text-primary transition-colors">Hemsidor redovisning</Link></li>
              <li><Link to="/hemsidor-ehandel" className="text-sm text-muted-foreground hover:text-primary transition-colors">E-handel hemsida</Link></li>
              <li><Link to="/hemsidor-bygg-hantverkare" className="text-sm text-muted-foreground hover:text-primary transition-colors">Hemsidor bygg &amp; hantverkare</Link></li>
            </ul>
          </nav>

          {/* Övrigt */}
          <nav aria-label="Övrigt">
            <h3 className="font-serif font-bold text-foreground mb-4 text-base">Övrigt</h3>
            <ul className="space-y-2">
              <li><Link to="/om-mig" className="text-sm text-muted-foreground hover:text-primary transition-colors">Om mig</Link></li>
              <li><Link to="/blogg" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blogg</Link></li>
              <li><Link to="/kontakt" className="text-sm text-muted-foreground hover:text-primary transition-colors">Kontakt</Link></li>
              <li><Link to="/gratis-seo-analys" className="text-sm text-muted-foreground hover:text-primary transition-colors">Gratis SEO-analys</Link></li>
              <li><Link to="/case" className="text-sm text-muted-foreground hover:text-primary transition-colors">Kundcase</Link></li>
            </ul>
          </nav>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-3 mb-6">
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

        {/* Bottom */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© 2025 LRH Konsult. Alla rättigheter förbehållna.</span>
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
