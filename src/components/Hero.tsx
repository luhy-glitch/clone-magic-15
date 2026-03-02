import React from "react";
import { Star, ThumbsUp, ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-[90vh] bg-[#050810] text-white overflow-hidden pt-32 pb-20 px-4">
      {/* Importera Playfair Display för rubrikerna */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
          .font-serif-custom { font-family: 'Playfair Display', serif; }
        `}
      </style>

      {/* Bakgrundseffekter (Subtila stjärnor och glow, inga skarpa prickar) */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-900/20 blur-[150px] rounded-full pointer-events-none" />
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at center, #ffffff 0.5px, transparent 0.5px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Badge */}
      <div className="border border-white/10 rounded-full px-4 py-1.5 text-xs text-gray-300 mb-8 flex items-center gap-2 bg-white/[0.03] backdrop-blur-md shadow-lg z-10 relative">
        <Sparkles size={14} className="text-yellow-500" /> Webbutveckling & SEO i Västmanland
      </div>

      {/* Huvudrubrik */}
      <h1 className="font-serif-custom text-5xl md:text-6xl lg:text-7xl mb-6 leading-[1.15] max-w-4xl tracking-tight text-center z-10 relative">
        Professionell
        <br />
        Webbutveckling & SEO i<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600">
          Västmanland
        </span>{" "}
        – LRH
        <br />
        Konsult
      </h1>

      {/* Brödtext */}
      <p className="text-gray-400 max-w-2xl text-sm md:text-base mb-16 leading-relaxed text-center z-10 relative">
        Jag hjälper företag i <span className="text-blue-400">Västerås, Köping</span> och{" "}
        <span className="text-blue-400">Sala</span> att skapa snabba, sökmotoroptimerade webbplatser i{" "}
        <span className="text-white font-medium">React & Next.js</span> som konverterar besökare till kunder.
      </p>

      {/* Abstrakt Karta / Call to action-sektion */}
      <div className="relative w-full max-w-2xl h-64 mb-20 flex items-center justify-center z-10">
        {/* Mjukt glow bakom knappen */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-64 h-64 bg-yellow-500/10 blur-[80px] rounded-full"></div>
        </div>

        {/* Städer (Noder) */}
        <div className="absolute top-[10%] right-[15%] flex flex-col items-center group cursor-default">
          <div className="w-2 h-2 bg-yellow-500 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.8)] group-hover:scale-150 transition-transform"></div>
          <span className="text-xs mt-2 text-gray-400 group-hover:text-white transition-colors">Sala</span>
        </div>

        <div className="absolute top-[40%] left-[10%] flex flex-col items-center group cursor-default">
          <div className="w-2 h-2 bg-yellow-500 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.8)] group-hover:scale-150 transition-transform"></div>
          <span className="text-xs mt-2 text-gray-400 group-hover:text-white transition-colors">Köping</span>
        </div>

        <div className="absolute bottom-[10%] right-[25%] flex flex-col items-center group cursor-default">
          <div className="w-2 h-2 bg-yellow-500 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.8)] group-hover:scale-150 transition-transform"></div>
          <span className="text-xs mt-2 text-gray-400 group-hover:text-white transition-colors">Västerås</span>
        </div>

        {/* Huvudknapp */}
        <button className="bg-gradient-to-r from-yellow-500 to-yellow-400 text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 shadow-[0_0_40px_rgba(234,179,8,0.3)] hover:shadow-[0_0_60px_rgba(234,179,8,0.5)] hover:scale-105 transition-all z-20">
          Boka ett samtal <ArrowRight size={18} />
        </button>
      </div>

      {/* Bottenkort (Glassmorphism) */}
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-4xl relative z-20">
        <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 w-[160px] flex flex-col items-center justify-center backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:bg-white/[0.04] transition-colors">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="text-3xl font-bold text-yellow-500 mb-1 flex items-baseline">
            50<span className="text-xl">+</span>
          </div>
          <span className="text-xs text-gray-400 font-medium tracking-wide">Projekt</span>
        </div>

        <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 w-[160px] flex flex-col items-center justify-center backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:bg-white/[0.04] transition-colors">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <span className="text-2xl font-bold text-white mb-2">100%</span>
          <div className="flex flex-col items-center gap-1">
            <ThumbsUp size={14} className="text-yellow-500" />
            <span className="text-xs text-gray-400 font-medium tracking-wide text-center">Nöjda kunder</span>
          </div>
        </div>

        <div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-6 w-[160px] flex flex-col items-center justify-center backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:bg-white/[0.04] transition-colors">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="text-2xl font-bold text-white mb-2 flex items-baseline">
            5<span className="text-lg text-gray-300 ml-1">+</span>
          </div>
          <span className="text-xs text-gray-400 mb-3 font-medium tracking-wide text-center">År i branschen</span>
          <div className="flex gap-1 text-yellow-500">
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
