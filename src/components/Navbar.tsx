import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import LrhLogo from "@/components/LrhLogo";
import { Link, useLocation } from "react-router-dom";
import { CITY_NAV_ITEMS } from "@/data/cities";
import { trackCTAClick } from "@/lib/analytics";

const mainServices = [
  { label: "Webbutveckling", to: "/tjanster/webbutveckling" },
  { label: "Webbdesign", to: "/tjanster/webbdesign" },
  { label: "SEO-optimering", to: "/tjanster/seo-optimering" },
  { label: "Google Ads", to: "/tjanster/google-ads" },
  { label: "WordPress", to: "/tjanster/wordpress-losningar" },
  { label: "Underhåll & Support", to: "/tjanster/underhall-support" },
  { label: "Prestanda", to: "/tjanster/prestanda-optimering" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileRegionsOpen, setMobileRegionsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

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
    <header
      className={`sticky top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-all duration-300 ${scrolled ? "shadow-md shadow-background/50" : ""}`}
      role="banner"
    >
      <nav
        aria-label="Huvudnavigering"
        className={`max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300 ${scrolled ? "h-14" : "h-16"}`}
      >
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="LRH Konsult – Startsida">
          <LrhLogo
            className={`hidden sm:block transition-all duration-300 ${scrolled ? "h-9" : "h-[45px]"} w-auto`}
            width={200}
            height={45}
          />
          <LrhLogo
            monogramOnly
            className={`sm:hidden transition-all duration-300 ${scrolled ? "h-8" : "h-10"} w-auto`}
            height={40}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1" aria-expanded={dropdownOpen} aria-haspopup="true">
              Tjänster
              <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full -left-4 pt-2">
                <div className="bg-card border border-border rounded-xl shadow-2xl shadow-black/40 p-5 flex gap-8 min-w-[520px]">
                  <div className="min-w-[180px]">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-3">Huvudtjänster</p>
                    <div className="space-y-0.5">
                      {mainServices.map(s => (
                        <Link key={s.to} to={s.to} onClick={() => setDropdownOpen(false)} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-colors">
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="w-px bg-border self-stretch" />
                  <div className="flex-1">
                    <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mb-3">Regionalt</p>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-0.5">
                      {CITY_NAV_ITEMS.map(r => (
                        <Link key={r.to} to={r.to} onClick={() => setDropdownOpen(false)} className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-colors">
                          {r.label}
                        </Link>
                      ))}
                    </div>
                  </div>
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
            onClick={() => trackCTAClick("navbar-desktop-cta", "navbar")}
            className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors animate-cta-pulse shadow-lg shadow-primary/25"
          >
            Boka gratis analys
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Stäng meny" : "Öppna meny"}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu with animation */}
      <div
        className={`md:hidden bg-background border-b border-border px-6 flex flex-col gap-1 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[80vh] py-4 opacity-100" : "max-h-0 py-0 opacity-0 border-b-0"
        }`}
      >
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
            {CITY_NAV_ITEMS.map(r => (
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
          onClick={() => {
            setMobileOpen(false);
            trackCTAClick("navbar-mobile-cta", "navbar-mobile");
          }}
          className="mt-2 px-5 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium w-fit min-h-[44px] flex items-center"
        >
          Boka gratis analys
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
