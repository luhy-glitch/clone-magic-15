import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Tjänster", children: [
    { label: "Webbutveckling", to: "/webbutveckling" },
    { label: "SEO-optimering", to: "/seo-optimering" },
  ]},
  { label: "Om mig", to: "/om-mig" },
  { label: "Priser", to: "/#priser" },
  { label: "Blogg", to: "/blogg" },
  { label: "Kontakt", to: "/kontakt" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border" role="banner">
      <nav aria-label="Huvudnavigering" className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-serif font-bold text-sm">LR</span>
          </div>
          <span className="font-serif font-bold text-lg text-foreground">LRH Konsult</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {/* Tjänster dropdown */}
          <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Tjänster
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 pt-2">
                <div className="bg-card border border-border rounded-lg shadow-lg py-2 min-w-[200px]">
                  <Link to="/tjanster/webbutveckling" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
                    Webbutveckling
                  </Link>
                  <Link to="/tjanster/webbdesign" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
                    Webbdesign
                  </Link>
                  <Link to="/tjanster/seo-optimering" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
                    SEO-optimering
                  </Link>
                  <Link to="/tjanster/wordpress-losningar" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
                    WordPress
                  </Link>
                  <Link to="/tjanster/underhall-support" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
                    Underhåll & Support
                  </Link>
                  <Link to="/tjanster/prestanda-optimering" onClick={() => setDropdownOpen(false)} className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors">
                    Prestanda
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link to="/om-mig" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Om mig</Link>
          <Link to="/#priser" onClick={() => handleNavClick("/#priser")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">Priser</Link>
          <Link to="/blogg" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blogg</Link>
          <Link to="/kontakt" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Kontakt</Link>
          <Link
            to="/kontakt"
            className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors animate-[pulse_3s_ease-in-out_infinite] hover:animate-none shadow-lg shadow-primary/25"
          >
            Boka samtal
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Stäng meny" : "Öppna meny"}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 py-4 flex flex-col gap-4">
          <Link to="/tjanster/webbutveckling" onClick={() => setMobileOpen(false)} className="text-left text-sm text-muted-foreground">Webbutveckling</Link>
          <Link to="/tjanster/webbdesign" onClick={() => setMobileOpen(false)} className="text-left text-sm text-muted-foreground">Webbdesign</Link>
          <Link to="/tjanster/seo-optimering" onClick={() => setMobileOpen(false)} className="text-left text-sm text-muted-foreground">SEO-optimering</Link>
          <Link to="/tjanster/wordpress-losningar" onClick={() => setMobileOpen(false)} className="text-left text-sm text-muted-foreground">WordPress</Link>
          <Link to="/tjanster/underhall-support" onClick={() => setMobileOpen(false)} className="text-left text-sm text-muted-foreground">Underhåll & Support</Link>
          <Link to="/tjanster/prestanda-optimering" onClick={() => setMobileOpen(false)} className="text-left text-sm text-muted-foreground">Prestanda</Link>
          <Link to="/om-mig" onClick={() => setMobileOpen(false)} className="text-left text-sm text-muted-foreground">Om mig</Link>
          <Link to="/#priser" onClick={() => handleNavClick("/#priser")} className="text-left text-sm text-muted-foreground">Priser</Link>
          <Link to="/blogg" onClick={() => setMobileOpen(false)} className="text-left text-sm text-muted-foreground">Blogg</Link>
          <Link to="/kontakt" onClick={() => setMobileOpen(false)} className="text-left text-sm text-muted-foreground">Kontakt</Link>
          <Link
            to="/kontakt"
            onClick={() => setMobileOpen(false)}
            className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium w-fit"
          >
            Boka samtal
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
