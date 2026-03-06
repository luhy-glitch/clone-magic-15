import React, { Suspense, useState, useEffect } from "react";
import { Star, ThumbsUp, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const PlexusBackground = React.lazy(() => import("./PlexusBackground"));

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Triggar inladdningen av stjärnorna precis när DOM:en är redo
    setIsMounted(true);
  }, []);

  return (
    <section className="hero-section relative flex flex-col items-center justify-center w-full min-h-[90vh] bg-[#050810] text-white overflow-hidden pt-40 pb-20 px-4">

      {/* Renderas säkert precis efter första sidmålningen, kraschar inte och blockerar inte LCP */}
      {isMounted && (
        <Suspense fallback={null}>
          <PlexusBackground />
        </Suspense>
      )}

      {/* Soft blue glow for depth */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-900/20 blur-[150px] rounded-full pointer-events-none z-0" />

      {/* Badge - Local SEO Focus */}
      <div className="border border-white/10 rounded-full px-4 py-1.5 text-xs text-gray-300 mb-8 flex items-center gap-2 bg-white/[0.03] backdrop-blur-md shadow-lg z-10 relative">
        <Sparkles size={14} className="text-yellow-500" /> Webbutveckling & SEO i Västmanland
      </div>

      {/* Main Heading - Optimized for H1 ranking */}
      <h1 className="hero-h1 font-serif-custom text-5xl md:text-6xl lg:text-7xl mb-6 leading-[1.15] max-w-4xl tracking-tight text-center z-10 relative">
        Professionell
        <br />
        Webbutveckling & SEO i<br />
        <span className="hero-gradient-text text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-600">
          Västmanland
        </span>{" "}
        – LRH
        <br />
        Konsult
      </h1>

      {/* Body text with local keywords */}
      <p className="text-gray-400 max-w-2xl text-sm md:text-base mb-16 leading-relaxed text-center z-10 relative">
        Jag hjälper företag i <span className="text-blue-400 font-medium">Västerås, Köping</span> och{" "}
        <span className="text-blue-400 font-medium">Sala</span> att skapa snabba, sökmotoroptimerade webbplatser i{" "}
        <span className="text-white font-medium">React & Next.js</span> som konverterar besökare till kunder.
      </p>

      {/* SEAMLESS MAP SECTION */}
      <div className="relative w-full max-w-2xl h-72 mb-20 flex items-center justify-center z-20 bg-transparent">
        {/* Optimized Map Image */}
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
          className="absolute w-[350px] md:w-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.3] brightness-[150%] contrast-[130%] mix-blend-screen drop-shadow-[0_0_20px_rgba(250,204,21,0.15)] pointer-events-none z-0"
        />

        {/* Seamless glow behind CTA button */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-500/[0.15] blur-[100px] rounded-full pointer-events-none z-0"></div>

        {/* Sala */}
        <Link
          to="/hemsidor-sala"
          className="absolute top-[15%] right-[30%] flex flex-col items-center group cursor-pointer z-50"
        >
          <div className="relative">
            <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full shadow-[0_0_15px_#eab308] animate-city-pulse" />
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-200 pointer-events-none">
              Hemsidor & SEO i Sala
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-white/10 border-r border-b border-white/20 rotate-45 -mt-1"></div>
            </div>
          </div>
          <span className="text-xs mt-2 text-gray-400 group-hover:text-white transition-colors">Sala</span>
        </Link>

        {/* Köping */}
        <Link
          to="/seo-koping"
          className="absolute bottom-[28%] left-[22%] flex flex-col items-center group cursor-pointer z-50"
        >
          <div className="relative">
            <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full shadow-[0_0_15px_#eab308] animate-city-pulse [animation-delay:0.8s]" />
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-200 pointer-events-none">
              SEO-optimering i Köping
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-white/10 border-r border-b border-white/20 rotate-45 -mt-1"></div>
            </div>
          </div>
          <span className="text-xs mt-2 text-gray-400 group-hover:text-white transition-colors">Köping</span>
        </Link>

        {/* Västerås */}
        <Link
          to="/webbutveckling-vasteras"
          className="absolute bottom-[22%] right-[28%] flex flex-col items-center group cursor-pointer z-50"
        >
          <div className="relative">
            <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full shadow-[0_0_15px_#eab308] animate-city-pulse [animation-delay:1.6s]" />
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-3 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-200 pointer-events-none">
              Webbutveckling i Västerås
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-white/10 border-r border-b border-white/20 rotate-45 -mt-1"></div>
            </div>
          </div>
          <span className="text-xs mt-2 text-gray-400 group-hover:text-white transition-colors">Västerås</span>
        </Link>

        {/* CTA Button */}
        <div className="relative z-20 -translate-y-10">
          <div className="absolute -inset-3 bg-gradient-to-r from-yellow-500/30 via-amber-500/20 to-orange-500/30 rounded-full blur-xl animate-pulse"></div>
          <Link
            to="/kontakt"
            className="relative bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-400 text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 shadow-[0_0_40px_rgba(245,158,11,0.4)] hover:shadow-[0_0_60px_rgba(245,158,11,0.6)] hover:scale-105 transition-all"
          >
            Boka ett samtal <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-4xl relative z-10">
        <div className="bg-white/[0.05] border border-white/[0.1] rounded-2xl p-6 w-[160px] flex flex-col items-center justify-center backdrop-blur-2xl shadow-xl relative overflow-hidden group hover:bg-white/[0.08] transition-all duration-300">
          <div className="text-3xl font-bold text-yellow-500 mb-1 flex items-baseline relative z-10">
            50<span className="text-xl">+</span>
          </div>
          <span className="text-xs text-gray-400 font-medium tracking-wide relative z-10">Projekt</span>
        </div>

        <div className="bg-white/[0.05] border border-white/[0.1] rounded-2xl p-6 w-[160px] flex flex-col items-center justify-center backdrop-blur-2xl shadow-xl relative overflow-hidden group hover:bg-white/[0.08] transition-all duration-300">
          <span className="text-2xl font-bold text-yellow-500 mb-2 relative z-10">100%</span>
          <div className="flex flex-col items-center gap-1 relative z-10">
            <ThumbsUp size={14} className="text-yellow-500" />
            <span className="text-xs text-gray-400 font-medium tracking-wide text-center">Nöjda kunder</span>
          </div>
        </div>

        <div className="bg-white/[0.05] border border-white/[0.1] rounded-2xl p-6 w-[160px] flex flex-col items-center justify-center backdrop-blur-2xl shadow-xl relative overflow-hidden group hover:bg-white/[0.08] transition-all duration-300">
          <div className="text-2xl font-bold text-yellow-500 mb-2 flex items-baseline relative z-10">
            5<span className="text-lg ml-1">+</span>
          </div>
          <span className="text-xs text-gray-400 mb-3 font-medium tracking-wide text-center relative z-10">
            År i branschen
          </span>
          <div className="flex gap-1 text-yellow-500 relative z-10">
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
