import { ArrowRight, Code2 } from "lucide-react";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-hero text-hero-foreground pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-hero-muted/30 bg-hero-muted/10 mb-8">
          <Code2 size={16} className="text-primary" />
          <span className="text-sm text-hero-muted">Webbutveckling & Konsulttjänster</span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl">
          Din digitala partner för{" "}
          <span className="text-primary">moderna webblösningar</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-hero-muted max-w-2xl">
          Jag hjälper företag och entreprenörer att skapa professionella, snabba och sökmotoroptimerade webbplatser som konverterar besökare till kunder.
        </p>

        {/* Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
          <button
            onClick={() => scrollTo("kontakt")}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
          >
            Boka ett samtal <ArrowRight size={18} />
          </button>
        </div>

        {/* Stats */}
        <div className="mt-12 sm:mt-20 grid grid-cols-3 gap-4 sm:gap-8 md:gap-16 border-t border-hero-muted/20 pt-8 sm:pt-10 w-full max-w-2xl">
          {[
            { value: "50+", label: "Projekt" },
            { value: "100%", label: "Nöjda kunder" },
            { value: "5+", label: "År erfarenhet" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-primary">{stat.value}</div>
              <div className="text-sm text-hero-muted mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
