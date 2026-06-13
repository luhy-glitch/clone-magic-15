import { Mail, Linkedin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import LrhLogo from "@/components/LrhLogo";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand + NAP */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <LrhLogo variant="white" className="h-11 w-auto opacity-90" width={180} height={45} />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Din lokala partner för Webbutveckling & SEO i Västmanland.
            </p>
            <address className="not-italic text-sm text-muted-foreground space-y-1">
              <p>Västerås</p>
              <p>Västmanlands län, Sverige</p>
              <p><a href="tel:+46704606578" className="hover:text-primary transition-colors">070 460 65 78</a></p>
              <p><a href="mailto:lucas@lrhkonsult.se" className="hover:text-primary transition-colors">lucas@lrhkonsult.se</a></p>
            </address>
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
              <li><Link to="/tjanster/underhall-support" className="text-sm text-muted-foreground hover:text-primary transition-colors">Underhåll & Support</Link></li>
              <li><Link to="/tjanster/prestanda-optimering" className="text-sm text-muted-foreground hover:text-primary transition-colors">Prestandaoptimering</Link></li>
              <li><Link to="/tjanster/vad-kostar-en-hemsida-2026" className="text-sm text-muted-foreground hover:text-primary transition-colors">Vad kostar en hemsida?</Link></li>
            </ul>
          </nav>

          {/* Städer - ALLA 13 STÄDER ÅTERSTÄLLDA */}
          <nav aria-label="Städer">
            <h3 className="font-serif font-bold text-foreground mb-4 text-base">Städer</h3>
            <ul className="space-y-2">
              <li><Link to="/webbutveckling-vasteras" className="text-sm text-muted-foreground hover:text-primary transition-colors">Västerås</Link></li>
              <li><Link to="/webbutveckling-enkoping" className="text-sm text-muted-foreground hover:text-primary transition-colors">Enköping</Link></li>
              <li><Link to="/webbutveckling-eskilstuna" className="text-sm text-muted-foreground hover:text-primary transition-colors">Eskilstuna</Link></li>
              <li><Link to="/webbutveckling-arboga" className="text-sm text-muted-foreground hover:text-primary transition-colors">Arboga</Link></li>
              <li><Link to="/webbutveckling-fagersta" className="text-sm text-muted-foreground hover:text-primary transition-colors">Fagersta</Link></li>
              <li><Link to="/webbutveckling-hallstahammar" className="text-sm text-muted-foreground hover:text-primary transition-colors">Hallstahammar</Link></li>
              <li><Link to="/webbutveckling-kungsor" className="text-sm text-muted-foreground hover:text-primary transition-colors">Kungsör</Link></li>
              <li><Link to="/webbutveckling-surahammar" className="text-sm text-muted-foreground hover:text-primary transition-colors">Surahammar</Link></li>
              <li><Link to="/webbutveckling-heby" className="text-sm text-muted-foreground hover:text-primary transition-colors">Heby</Link></li>
              <li><Link to="/webbutveckling-norberg" className="text-sm text-muted-foreground hover:text-primary transition-colors">Norberg</Link></li>
              <li><Link to="/webbutveckling-skinnskatteberg" className="text-sm text-muted-foreground hover:text-primary transition-colors">Skinnskatteberg</Link></li>
              <li><Link to="/webbutveckling-uppsala" className="text-sm text-muted-foreground hover:text-primary transition-colors">Uppsala</Link></li>
              <li><Link to="/webbutveckling-orebro" className="text-sm text-muted-foreground hover:text-primary transition-colors">Örebro</Link></li>
            </ul>
          </nav>

          {/* Branscher - ALLA 9 BRANSCHER ÅTERSTÄLLDA */}
          <nav aria-label="Branscher">
            <h3 className="font-serif font-bold text-foreground mb-4 text-base">Branscher</h3>
            <ul className="space-y-2">
              <li><Link to="/hemsidor-restaurang" className="text-sm text-muted-foreground hover:text-primary transition-colors">Hemsidor restaurang</Link></li>
              <li><Link to="/hemsidor-redovisning" className="text-sm text-muted-foreground hover:text-primary transition-colors">Hemsidor redovisning</Link></li>
              <li><Link to="/hemsidor-ehandel" className="text-sm text-muted-foreground hover:text-primary transition-colors">E-handel hemsida</Link></li>
              <li><Link to="/hemsidor-bygg-hantverkare" className="text-sm text-muted-foreground hover:text-primary transition-colors">Bygg & Hantverkare</Link></li>
              <li><Link to="/hemsidor-sala" className="text-sm text-muted-foreground hover:text-primary transition-colors">Hemsidor Sala</Link></li>
              <li><Link to="/seo-vasteras" className="text-sm text-muted-foreground hover:text-primary transition-colors">SEO Västerås</Link></li>
              <li><Link to="/seo-eskilstuna" className="text-sm text-muted-foreground hover:text-primary transition-colors">SEO Eskilstuna</Link></li>
              <li><Link to="/seo-koping" className="text-sm text-muted-foreground hover:text-primary transition-colors">SEO Köping</Link></li>
              <li><Link to="/frisor-koping" className="text-sm text-muted-foreground hover:text-primary transition-colors">Frisör Köping</Link></li>
              <li><Link to="/restauranger-sala" className="text-sm text-muted-foreground hover:text-primary transition-colors">Restauranger Sala</Link></li>
              <li><Link to="/digital-marknadsforing-butiker" className="text-sm text-muted-foreground hover:text-primary transition-colors">Digital marknadsföring</Link></li>
            </ul>
          </nav>

          {/* Övrigt + Blogg - ALLA 11 LÄNKAR ÅTERSTÄLLDA */}
          <nav aria-label="Övrigt">
            <h3 className="font-serif font-bold text-foreground mb-4 text-base">Övrigt</h3>
            <ul className="space-y-2">
              <li><Link to="/om-mig" className="text-sm text-muted-foreground hover:text-primary transition-colors">Om mig</Link></li>
              <li><Link to="/case" className="text-sm text-muted-foreground hover:text-primary transition-colors">Kundcase</Link></li>
              <li><Link to="/kontakt" className="text-sm text-muted-foreground hover:text-primary transition-colors">Kontakt</Link></li>
              <li><Link to="/gratis-seo-analys" className="text-sm text-muted-foreground hover:text-primary transition-colors">Gratis SEO-analys</Link></li>
              <li><Link to="/integritetspolicy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Integritetspolicy</Link></li>
              <li><Link to="/blogg" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">Blogg</Link></li>
              <li><Link to="/blogg/seo-vasteras-guide" className="text-sm text-muted-foreground hover:text-primary transition-colors italic">SEO-guide småföretag</Link></li>
              <li><Link to="/blogg/lokal-seo-smaforetag" className="text-sm text-muted-foreground hover:text-primary transition-colors italic">Skapa hemsida guide</Link></li>
              <li><Link to="/blogg/oka-hemsidans-hastighet" className="text-sm text-muted-foreground hover:text-primary transition-colors italic">Öka hemsidans hastighet</Link></li>
              <li><Link to="/blogg/lokal-seo-smaforetag" className="text-sm text-muted-foreground hover:text-primary transition-colors italic">Lokal SEO</Link></li>
              <li><Link to="/blogg/react-vs-wordpress" className="text-sm text-muted-foreground hover:text-primary transition-colors italic">React vs WordPress</Link></li>
            </ul>
          </nav>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <a href="mailto:lucas@lrhkonsult.se" aria-label="Skicka e-post" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
            <Mail size={16} />
          </a>
          <a href="tel:+46704606578" aria-label="Ring oss" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
            <Phone size={16} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
            <Linkedin size={16} />
          </a>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <span>© 2026 LRH Konsult. Alla rättigheter förbehållna.</span>
          <Link to="/case" className="inline-flex items-center gap-2 text-primary hover:underline transition-colors" aria-label="100/100 PageSpeed Guaranteed">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="font-medium">100/100 PageSpeed</span>
          </Link>
          <span>En del av <a href="https://www.frontiermedia.se" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Frontier Media</a></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;