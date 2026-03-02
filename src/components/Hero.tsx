import React from "react";
import { Star, ThumbsUp, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import PlexusBackground from "./PlexusBackground";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-[90vh] bg-[#050810] text-white overflow-hidden pt-40 pb-20 px-4">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
          .font-serif-custom { font-family: 'Playfair Display', serif; }
        `}
      </style>

      {/* Plexus network */}
      <PlexusBackground />

      {/* Soft blue glow */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-900/20 blur-[150px] rounded-full pointer-events-none z-0" />

      {/* Badge */}
      <div className="border border-white/10 rounded-full px-4 py-1.5 text-xs text-gray-300 mb-8 flex items-center gap-2 bg-white/[0.03] backdrop-blur-md shadow-lg z-10 relative">
        <Sparkles size={14} className="text-yellow-500" /> Webbutveckling & SEO i Västmanland
      </div>

      {/* Heading */}
      <h1 className="font-serif-custom text-5xl md:text-6xl lg:text-7xl mb-6 leading-[1.15] max-w-4xl tracking-tight text-center z-10 relative">
        Professionell
        <br />
        Webbutveckling & SEO i<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-600">
          Västmanland
        </span>{" "}
        – LRH
        <br />
        Konsult
      </h1>

      {/* Body */}
      <p className="text-gray-400 max-w-2xl text-sm md:text-base mb-16 leading-relaxed text-center z-10 relative">
        Jag hjälper företag i <span className="text-blue-400">Västerås, Köping</span> och{" "}
        <span className="text-blue-400">Sala</span> att skapa snabba, sökmotoroptimerade webbplatser i{" "}
        <span className="text-white font-medium">React & Next.js</span> som konverterar besökare till kunder.
      </p>

      {/* CTA + city nodes */}
      <div className="relative w-full max-w-2xl h-72 mb-20 flex items-center justify-center z-20">
        {/* Map image */}
        <img
          src="/images/vastmanland-karta.png"
          alt=""
          aria-hidden="true"
          className="absolute w-[350px] md:w-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 invert opacity-15 brightness-[200%] contrast-[150%] pointer-events-none z-0"
        />

        {/* Soft glow behind button */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-500/20 blur-[100px] rounded-full pointer-events-none z-0"></div>

        {/* City nodes – geographically placed */}
        {/* Sala – nordost */}
        <div className="absolute top-[15%] right-[30%] flex flex-col items-center group cursor-default z-10">
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-2.5 h-2.5 bg-yellow-500 rounded-full shadow-[0_0_15px_#eab308]"
          />
          <span className="text-xs mt-2 text-gray-400 group-hover:text-white transition-colors">Sala</span>
        </div>
        {/* Köping – sydväst */}
        <div className="absolute bottom-[28%] left-[22%] flex flex-col items-center group cursor-default z-10">
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="w-2.5 h-2.5 bg-yellow-500 rounded-full shadow-[0_0_15px_#eab308]"
          />
          <span className="text-xs mt-2 text-gray-400 group-hover:text-white transition-colors">Köping</span>
        </div>
        {/* Västerås – sydost */}
        <div className="absolute bottom-[22%] right-[28%] flex flex-col items-center group cursor-default z-10">
          <motion.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
            className="w-2.5 h-2.5 bg-yellow-500 rounded-full shadow-[0_0_15px_#eab308]"
          />
          <span className="text-xs mt-2 text-gray-400 group-hover:text-white transition-colors">Västerås</span>
        </div>

        {/* CTA Button */}
        <div className="relative z-20">
          <div className="absolute -inset-3 bg-gradient-to-r from-yellow-500/30 via-amber-500/20 to-orange-500/30 rounded-full blur-xl animate-pulse"></div>
          <button className="relative bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-400 text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 shadow-[0_0_40px_rgba(245,158,11,0.4)] hover:shadow-[0_0_60px_rgba(245,158,11,0.6)] hover:scale-105 transition-all">
            Boka ett samtal <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Glass cards */}
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-4xl relative z-10">
        <div className="bg-white/[0.08] border border-white/[0.15] rounded-2xl p-6 w-[160px] flex flex-col items-center justify-center backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden group hover:bg-white/[0.12] transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none"></div>
          <div className="text-3xl font-bold text-yellow-500 mb-1 flex items-baseline relative z-10">
            50<span className="text-xl">+</span>
          </div>
          <span className="text-xs text-gray-400 font-medium tracking-wide relative z-10">Projekt</span>
        </div>

        <div className="bg-white/[0.08] border border-white/[0.15] rounded-2xl p-6 w-[160px] flex flex-col items-center justify-center backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden group hover:bg-white/[0.12] transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none"></div>
          <span className="text-2xl font-bold text-yellow-500 mb-2 relative z-10">100%</span>
          <div className="flex flex-col items-center gap-1 relative z-10">
            <ThumbsUp size={14} className="text-yellow-500" />
            <span className="text-xs text-gray-400 font-medium tracking-wide text-center">Nöjda kunder</span>
          </div>
        </div>

        <div className="bg-white/[0.08] border border-white/[0.15] rounded-2xl p-6 w-[160px] flex flex-col items-center justify-center backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden group hover:bg-white/[0.12] transition-all duration-300">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none"></div>
          <div className="text-2xl font-bold text-yellow-500 mb-2 flex items-baseline relative z-10">
            5<span className="text-lg ml-1">+</span>
          </div>
          <span className="text-xs text-gray-400 mb-3 font-medium tracking-wide text-center relative z-10">År i branschen</span>
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
