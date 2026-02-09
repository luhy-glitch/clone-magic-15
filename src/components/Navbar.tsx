import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border" role="banner">
      <nav aria-label="Huvudnavigering" className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-serif font-bold text-sm">LR</span>
          </div>
          <span className="font-serif font-bold text-lg text-foreground">LRH Konsult</span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollTo("tjanster")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Tjänster
          </button>
          <button onClick={() => scrollTo("om-mig")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Om mig
          </button>
          <button onClick={() => scrollTo("kontakt")} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Kontakt
          </button>
          <button
            onClick={() => scrollTo("kontakt")}
            className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Boka samtal
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Stäng meny" : "Öppna meny"}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-6 py-4 flex flex-col gap-4">
          <button onClick={() => scrollTo("tjanster")} className="text-left text-sm text-muted-foreground">Tjänster</button>
          <button onClick={() => scrollTo("om-mig")} className="text-left text-sm text-muted-foreground">Om mig</button>
          <button onClick={() => scrollTo("kontakt")} className="text-left text-sm text-muted-foreground">Kontakt</button>
          <button
            onClick={() => scrollTo("kontakt")}
            className="px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium w-fit"
          >
            Boka samtal
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
