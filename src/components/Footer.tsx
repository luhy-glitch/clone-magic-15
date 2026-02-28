import { Mail, Linkedin, Github, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-sm">LR</span>
              </div>
              <span className="font-serif font-bold text-lg text-foreground">LRH Konsult</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Din lokala partner för Webbutveckling &amp; SEO i Västmanland. Vi hjälper företag i Västerås, Köping och Sala att växa genom moderna Next.js-lösningar och datadriven optimering.
            </p>
          </div>

          {/* Tjänster */}
          <div>
            <h4 className="font-serif font-bold text-foreground mb-4">Tjänster</h4>
            <ul className="space-y-2">
              <li><Link to="/tjanster/webbutveckling" className="text-sm text-muted-foreground hover:text-primary transition-colors">Webbutveckling</Link></li>
              <li><Link to="/tjanster/webbdesign" className="text-sm text-muted-foreground hover:text-primary transition-colors">Webbdesign</Link></li>
              <li><Link to="/tjanster/seo-optimering" className="text-sm text-muted-foreground hover:text-primary transition-colors">SEO-optimering</Link></li>
              <li><Link to="/tjanster/wordpress-losningar" className="text-sm text-muted-foreground hover:text-primary transition-colors">WordPress</Link></li>
              <li><Link to="/tjanster/underhall-support" className="text-sm text-muted-foreground hover:text-primary transition-colors">Underhåll & Support</Link></li>
              <li><Link to="/tjanster/prestanda-optimering" className="text-sm text-muted-foreground hover:text-primary transition-colors">Prestanda</Link></li>
            </ul>
          </div>

          {/* Sidor */}
          <div>
            <h4 className="font-serif font-bold text-foreground mb-4">Sidor</h4>
            <ul className="space-y-2">
              <li><Link to="/om-mig" className="text-sm text-muted-foreground hover:text-primary transition-colors">Om mig</Link></li>
              <li><Link to="/blogg" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blogg</Link></li>
              <li><Link to="/kontakt" className="text-sm text-muted-foreground hover:text-primary transition-colors">Kontakt</Link></li>
              <li><Link to="/integritetspolicy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Integritetspolicy</Link></li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-serif font-bold text-foreground mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="mailto:lucas@lrhkonsult.se" className="hover:text-primary transition-colors">
                  lucas@lrhkonsult.se
                </a>
              </li>
              <li>
                <a href="tel:+46704606578" className="hover:text-primary transition-colors">
                  070 460 65 78
                </a>
              </li>
              <li>Västmanlands län, Sverige</li>
            </ul>
            <div className="flex items-center gap-3 mt-4">
              {[
                { Icon: Mail, label: "Skicka e-post", href: "mailto:lucas@lrhkonsult.se" },
                { Icon: Phone, label: "Ring oss", href: "tel:+46704606578" },
                { Icon: Linkedin, label: "LinkedIn", href: "#" },
                { Icon: Github, label: "GitHub", href: "#" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© 2026 LRH Konsult. Alla rättigheter förbehållna.</span>
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
