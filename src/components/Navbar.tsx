import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const mainServices = [
  { label: "Webbutveckling", to: "/tjanster/webbutveckling" },
  { label: "Webbdesign", to: "/tjanster/webbdesign" },
  { label: "SEO-optimering", to: "/tjanster/seo-optimering" },
  { label: "WordPress", to: "/tjanster/wordpress-losningar" },
  { label: "Underhåll & Support", to: "/tjanster/underhall-support" },
  { label: "Prestanda", to: "/tjanster/prestanda-optimering" },
];

const regions = [
  { label: "Västerås", to: "/webbutveckling-vasteras" },
  { label: "Köping", to: "/seo-koping" },
  { label: "Sala", to: "/hemsidor-sala" },
  { label: "Enköping", to: "/webbutveckling-enkoping" },
  { label: "Eskilstuna", to: "/webbutveckling-eskilstuna" },
  { label: "Arboga", to: "/webbutveckling-arboga" },
  { label: "Fagersta", to: "/webbutveckling-fagersta" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileRegionsOpen, setMobileRegionsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (to: string) => {
    setMobileOpen(false);
    setDropdownOpen(false);
    if (to.includes("#")) {
      const [path, hash] = to.split("#");
      if (location.pathname === path || (path === "" && location.pathname === "/")) {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border" role="banner">
      <nav aria-label="Huvudnavigering" className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-serif font-bold text-sm">LR</span>
          </div>
          <span className="font-serif font-bold text-lg text-foreground">LRH Konsult</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1" aria-expanded={dropdownOpen} aria-haspopup="true">
              Tjänster
              <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 pt-2">
                <div className="bg-card border border-border rounded-lg shadow-lg py-3 min-w-[240px]">
                  <p className="px-4 pb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Huvudtjänster</p>
                  {mainServices.map(s => (
                    <Link key={s.to} to={s.to} onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
                      {s.label}
                    </Link>
                  ))}
                  <div className="border-t border-border my-2" />
                  <p className="px-4 pb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Regionalt</p>
                  {regions.map(r => (
                    <Link key={r.to} to={r.to} onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
                      {r.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link to="/case" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Kundcase</Link>
          <Link to="/om-mig" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Om mig</Link>
          <Link to="/#priser" onClick={() => handleNavClick("/#priser")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Priser</Link>
          <Link to="/blogg" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blogg</Link>
          <Link to="/kontakt" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Kontakt</Link>
          <Link
            to="/gratis-seo-analys"
            className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors animate-[pulse_3s_ease-in-out_infinite] hover:animate-none shadow-lg shadow-primary/25"
          >
            Boka gratis analys
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Stäng meny" : "Öppna meny"}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 py-4 flex flex-col gap-1">
          {/* Tjänster accordion */}
          <button
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className="flex items-center justify-between w-full py-3 text-sm font-medium text-foreground"
            aria-expanded={mobileServicesOpen}
          >
            Tjänster
            <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileServicesOpen && (
            <div className="pl-4 flex flex-col gap-1 pb-2">
              {mainServices.map(s => (
                <Link key={s.to} to={s.to} onClick={() => setMobileOpen(false)} className="py-2 text-sm text-muted-foreground min-h-[44px] flex items-center">
                  {s.label}
                </Link>
              ))}
            </div>
          )}

          {/* Områden accordion */}
          <button
            onClick={() => setMobileRegionsOpen(!mobileRegionsOpen)}
            className="flex items-center justify-between w-full py-3 text-sm font-medium text-foreground"
            aria-expanded={mobileRegionsOpen}
          >
            Regionalt
            <ChevronDown size={16} className={`transition-transform ${mobileRegionsOpen ? "rotate-180" : ""}`} />
          </button>
          {mobileRegionsOpen && (
            <div className="pl-4 flex flex-col gap-1 pb-2">
              {regions.map(r => (
                <Link key={r.to} to={r.to} onClick={() => setMobileOpen(false)} className="py-2 text-sm text-muted-foreground min-h-[44px] flex items-center">
                  {r.label}
                </Link>
              ))}
            </div>
          )}

          <div className="border-t border-border my-1" />
          <Link to="/case" onClick={() => setMobileOpen(false)} className="py-3 text-sm text-muted-foreground min-h-[44px] flex items-center">Kundcase</Link>
          <Link to="/om-mig" onClick={() => setMobileOpen(false)} className="py-3 text-sm text-muted-foreground min-h-[44px] flex items-center">Om mig</Link>
          <Link to="/#priser" onClick={() => { handleNavClick("/#priser"); setMobileOpen(false); }} className="py-3 text-sm text-muted-foreground min-h-[44px] flex items-center">Priser</Link>
          <Link to="/blogg" onClick={() => setMobileOpen(false)} className="py-3 text-sm text-muted-foreground min-h-[44px] flex items-center">Blogg</Link>
          <Link to="/kontakt" onClick={() => setMobileOpen(false)} className="py-3 text-sm text-muted-foreground min-h-[44px] flex items-center">Kontakt</Link>
          <Link
            to="/gratis-seo-analys"
            onClick={() => setMobileOpen(false)}
            className="mt-2 px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium w-fit min-h-[44px] flex items-center"
          >
            Boka gratis analys
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
