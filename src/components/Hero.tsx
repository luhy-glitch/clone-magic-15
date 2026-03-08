import React, { Suspense } from "react";
import { Star, ThumbsUp, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const PlexusBackground = React.lazy(() => import("./PlexusBackground"));

export default function Hero() {
  return (
    <section className="hero-section relative flex flex-col items-center justify-center w-full min-h-[90vh] bg-background text-foreground overflow-hidden pt-40 pb-20 px-4">

      {/* Plexus network background - deferred, respects reduced motion */}
      <Suspense fallback={null}>
        <PlexusBackground />
      </Suspense>

      {/* Soft glow for depth */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-accent/5 blur-[150px] rounded-full pointer-events-none z-0" />

      {/* Badge - Local SEO Focus */}
      <div className="border border-border rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-8 flex items-center gap-2 bg-card/30 backdrop-blur-md shadow-lg z-10 relative">
        <Sparkles size={14} className="text-primary" /> Webbutveckling & SEO i Västmanland
      </div>

      {/* Main Heading */}
      <h1 className="hero-h1 font-serif-custom text-5xl md:text-6xl lg:text-7xl mb-6 leading-[1.15] max-w-4xl tracking-tight text-center z-10 relative">
        Snabba hemsidor som
        <br />
        rankar på Google och ger
        <br />
        ditt företag{" "}
        <span className="hero-gradient-text text-transparent bg-clip-text bg-gradient-to-r from-primary/80 via-primary to-primary/70">
          fler kunder
        </span>
      </h1>

      {/* Body text with local keywords – all key cities */}
      <p className="text-muted-foreground max-w-2xl text-sm md:text-base mb-16 leading-[1.6] text-center z-10 relative">
        Jag hjälper företag i{" "}
        <Link to="/webbutveckling-vasteras" className="text-primary font-medium hover:underline">Västerås</Link>,{" "}
        <Link to="/seo-koping" className="text-primary font-medium hover:underline">Köping</Link>,{" "}
        <Link to="/hemsidor-sala" className="text-primary font-medium hover:underline">Sala</Link>,{" "}
        <Link to="/webbutveckling-enkoping" className="text-primary font-medium hover:underline">Enköping</Link>,{" "}
        <Link to="/webbutveckling-eskilstuna" className="text-primary font-medium hover:underline">Eskilstuna</Link>,{" "}
        <Link to="/webbutveckling-arboga" className="text-primary font-medium hover:underline">Arboga</Link>,{" "}
        <Link to="/webbutveckling-fagersta" className="text-primary font-medium hover:underline">Fagersta</Link>,{" "}
        <Link to="/webbutveckling-hallstahammar" className="text-primary font-medium hover:underline">Hallstahammar</Link>,{" "}
        <Link to="/webbutveckling-kungsor" className="text-primary font-medium hover:underline">Kungsör</Link>,{" "}
        <Link to="/webbutveckling-uppsala" className="text-primary font-medium hover:underline">Uppsala</Link> och{" "}
        <Link to="/webbutveckling-orebro" className="text-primary font-medium hover:underline">Örebro</Link> att synas högre på Google och förvandla besökare till betalande kunder.
        Byggda i <span className="text-foreground font-medium">React & Next.js</span> för garanterad 100/100 PageSpeed.
      </p>

      {/* SEAMLESS MAP SECTION */}
      <div className="relative w-full max-w-2xl h-72 mb-20 flex items-center justify-center z-20 bg-transparent">
        <img
          src="/images/vastmanland-karta-sm.webp"
          srcSet="/images/vastmanland-karta-sm.webp 350w, /images/vastmanland-karta.avif 1024w"
          sizes="(max-width: 768px) 350px, 500px"
          alt="Karta över Västmanland med fokus på Västerås, Köping och Sala"
          aria-hidden="true"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          width={500}
          height={500}
          className="absolute w-[350px] md:w-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.3] brightness-[150%] contrast-[130%] mix-blend-screen drop-shadow-[0_0_20px_hsl(38_92%_50%/0.15)] pointer-events-none z-0"
        />

        {/* Glow behind CTA */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/[0.08] blur-[100px] rounded-full pointer-events-none z-0" />

        {/* City nodes – positioned relative to Västmanland map geography */}
        {/* Sala – top-right area of map */}
        <Link
          to="/hemsidor-sala"
          className="absolute top-[-5%] right-[25%] flex flex-col items-center group cursor-pointer z-50 p-3 rounded-xl hover:bg-card/5 transition-all duration-300"
          aria-label="Hemsidor och SEO i Sala"
        >
          <div className="relative">
            <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_hsl(38_92%_50%)] animate-city-pulse group-hover:scale-150 transition-transform duration-300" />
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-card/80 backdrop-blur-xl border border-border rounded-lg text-xs text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-200 pointer-events-none">
              Hemsidor & SEO i Sala
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-card/80 border-r border-b border-border rotate-45 -mt-1" />
            </div>
          </div>
          <span className="text-xs mt-2 text-muted-foreground group-hover:text-foreground transition-colors font-medium underline-offset-2 group-hover:underline">Sala</span>
        </Link>

        {/* Köping – southwest */}
        <Link
          to="/seo-koping"
          className="absolute top-[30%] left-[12%] flex flex-col items-center group cursor-pointer z-50 p-3 rounded-xl hover:bg-card/5 transition-all duration-300"
          aria-label="SEO-optimering i Köping"
        >
          <div className="relative">
            <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_hsl(38_92%_50%)] animate-city-pulse [animation-delay:0.8s] group-hover:scale-150 transition-transform duration-300" />
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-card/80 backdrop-blur-xl border border-border rounded-lg text-xs text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-200 pointer-events-none">
              SEO-optimering i Köping
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-card/80 border-r border-b border-border rotate-45 -mt-1" />
            </div>
          </div>
          <span className="text-xs mt-2 text-muted-foreground group-hover:text-foreground transition-colors font-medium underline-offset-2 group-hover:underline">Köping</span>
        </Link>

        {/* Västerås – center-east (largest city, central position) */}
        <Link
          to="/webbutveckling-vasteras"
          className="absolute top-[35%] right-[20%] flex flex-col items-center group cursor-pointer z-50 p-3 rounded-xl hover:bg-card/5 transition-all duration-300"
          aria-label="Webbutveckling i Västerås"
        >
          <div className="relative">
            <div className="w-4 h-4 bg-primary rounded-full shadow-[0_0_20px_hsl(38_92%_50%)] animate-city-pulse [animation-delay:1.6s] group-hover:scale-150 transition-transform duration-300" />
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-card/80 backdrop-blur-xl border border-border rounded-lg text-xs text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-200 pointer-events-none">
              Webbutveckling i Västerås
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-card/80 border-r border-b border-border rotate-45 -mt-1" />
            </div>
          </div>
          <span className="text-xs mt-2 text-muted-foreground group-hover:text-foreground transition-colors font-medium underline-offset-2 group-hover:underline">Västerås</span>
        </Link>

        {/* CTA Button */}
        <div className="relative z-20 -translate-y-10">
          <div className="absolute -inset-3 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 rounded-full blur-xl animate-pulse" />
          <Link
            to="/gratis-seo-analys"
            className="relative bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground px-8 py-4 rounded-full font-bold flex items-center gap-2 shadow-[0_0_40px_hsl(38_92%_50%/0.4)] hover:shadow-[0_0_60px_hsl(38_92%_50%/0.6)] hover:scale-105 transition-all animate-cta-pulse"
          >
            Få en gratis SEO-analys <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-4xl relative z-10">
        <div className="bg-card/30 border border-border rounded-2xl p-6 w-[160px] flex flex-col items-center justify-center backdrop-blur-2xl shadow-xl relative overflow-hidden group hover:bg-card/50 transition-all duration-300">
          <div className="text-3xl font-bold text-primary mb-1 flex items-baseline relative z-10">
            50<span className="text-xl">+</span>
          </div>
          <span className="text-xs text-muted-foreground font-medium tracking-wide relative z-10">Projekt</span>
        </div>

        <div className="bg-card/30 border border-border rounded-2xl p-6 w-[160px] flex flex-col items-center justify-center backdrop-blur-2xl shadow-xl relative overflow-hidden group hover:bg-card/50 transition-all duration-300">
          <span className="text-2xl font-bold text-primary mb-2 relative z-10">100%</span>
          <div className="flex flex-col items-center gap-1 relative z-10">
            <ThumbsUp size={14} className="text-primary" />
            <span className="text-xs text-muted-foreground font-medium tracking-wide text-center">Nöjda kunder</span>
          </div>
        </div>

        <div className="bg-card/30 border border-border rounded-2xl p-6 w-[160px] flex flex-col items-center justify-center backdrop-blur-2xl shadow-xl relative overflow-hidden group hover:bg-card/50 transition-all duration-300">
          <div className="text-2xl font-bold text-primary mb-2 flex items-baseline relative z-10">
            5<span className="text-lg ml-1">+</span>
          </div>
          <span className="text-xs text-muted-foreground mb-3 font-medium tracking-wide text-center relative z-10">
            År i branschen
          </span>
          <div className="flex gap-1 text-primary relative z-10">
            <Star size={12} fill="currentColor" />
            <Star size={12} fill="currentColor" />
            <Star size={12} fill="currentColor" />
            <Star size={12} fill="currentColor" />
            <Star size={12} fill="currentColor" />
          </div>
        </div>
      </div>
    </section>
  );
}
