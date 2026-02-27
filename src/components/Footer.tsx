import { Mail, Linkedin, Github } from "lucide-react";
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
              Webbutvecklare & SEO-konsult baserad i Västmanlands län. Hjälper företag i Västerås, Köping och Sala att växa digitalt.
            </p>
          </div>

          {/* Tjänster */}
          <div>
            <h4 className="font-serif font-bold text-foreground mb-4">Tjänster</h4>
            <ul className="space-y-2">
              <li><Link to="/webbutveckling" className="text-sm text-muted-foreground hover:text-primary transition-colors">Webbutveckling</Link></li>
              <li><Link to="/seo-optimering" className="text-sm text-muted-foreground hover:text-primary transition-colors">SEO-optimering</Link></li>
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
              <li>lucas@lrhkonsult.se</li>
              <li>070 460 65 78</li>
              <li>Västmanlands län, Sverige</li>
            </ul>
            <div className="flex items-center gap-3 mt-4">
              {[
                { Icon: Mail, label: "Skicka e-post", href: "mailto:lucas@lrhkonsult.se" },
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
