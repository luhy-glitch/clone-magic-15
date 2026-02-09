import { ArrowRight, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-hero text-hero-foreground pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32 flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-hero-muted/30 bg-hero-muted/10 mb-8"
        >
          <Code2 size={16} className="text-primary" />
          <span className="text-sm text-hero-muted">Webbutveckling & Konsulttjänster</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl"
        >
          Din digitala partner för{" "}
          <span className="text-primary">moderna webblösningar</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-hero-muted max-w-2xl"
        >
          Jag hjälper företag och entreprenörer att skapa professionella, snabba och sökmotoroptimerade webbplatser som konverterar besökare till kunder.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => scrollTo("kontakt")}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
          >
            Boka ett samtal <ArrowRight size={18} />
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 sm:mt-20 grid grid-cols-3 gap-4 sm:gap-8 md:gap-16 border-t border-hero-muted/20 pt-8 sm:pt-10 w-full max-w-2xl"
        >
          {[
            { value: "50+", label: "Projekt" },
            { value: "100%", label: "Nöjda kunder" },
            { value: "5+", label: "År erfarenhet" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-primary">{stat.value}</div>
              <div className="text-sm text-hero-muted mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
