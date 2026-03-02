import { ArrowRight, Star, ThumbsUp, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-screen bg-[#080b14] text-white font-sans relative overflow-hidden flex flex-col justify-center pt-16">
      {/* Star dot background */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at center, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <main className="flex-grow flex flex-col items-center justify-center pt-12 pb-20 px-4 z-10 relative text-center">
        {/* Badge */}
        <div className="border border-white/10 rounded-full px-4 py-1.5 text-xs text-gray-400 mb-8 flex items-center gap-2 bg-white/5 backdrop-blur-md">
          <Sparkles size={14} className="text-yellow-500" /> Webbutveckling &amp; SEO i Västmanland
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight max-w-4xl">
          Professionell<br />
          Webbutveckling &amp; SEO i<br />
          <span className="text-yellow-500">Västmanland</span> – LRH<br />
          Konsult
        </h1>

        {/* Subtitle */}
        <p className="text-gray-400 max-w-2xl text-sm md:text-base mb-12 leading-relaxed">
          Jag hjälper företag i <span className="text-blue-400">Västerås, Köping</span> och{" "}
          <span className="text-blue-400">Sala</span> att skapa snabba, sökmotoroptimerade webbplatser i{" "}
          <span className="text-white font-medium">React &amp; Next.js</span> som konverterar besökare till kunder.
        </p>

        {/* Map area with CTA */}
        <div className="relative w-full max-w-3xl h-72 mb-16 flex items-center justify-center rounded-2xl border border-white/5 bg-white/[0.01]">
          {/* Sala */}
          <div className="absolute top-[20%] right-[25%] flex flex-col items-center">
            <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.8)] animate-pulse" />
            <span className="text-xs mt-2 text-gray-300">Sala</span>
          </div>
          {/* Köping */}
          <div className="absolute top-[45%] left-[30%] flex flex-col items-center">
            <div
              className="w-2.5 h-2.5 bg-yellow-500 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.8)] animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <span className="text-xs mt-2 text-gray-300">Köping</span>
          </div>
          {/* Västerås */}
          <div className="absolute bottom-[25%] right-[35%] flex flex-col items-center">
            <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-[0_0_20px_rgba(250,204,21,1)]" />
            <span className="text-sm mt-2 font-medium text-white">Västerås</span>
          </div>

          <Link
            to="/kontakt"
            className="bg-gradient-to-r from-yellow-500 to-yellow-300 text-black px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 shadow-[0_0_30px_rgba(234,179,8,0.25)] hover:scale-105 transition-transform z-20"
          >
            Boka ett samtal <ArrowRight size={18} />
          </Link>
        </div>

        {/* Bento Stats */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full max-w-4xl">
          {/* Card 1 */}
          <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-2xl p-6 w-[150px] flex flex-col items-center justify-center backdrop-blur-md shadow-xl">
            <div className="text-3xl font-bold text-yellow-500 mb-1 flex items-baseline">
              50<span className="text-xl">+</span>
            </div>
            <span className="text-xs text-gray-400 font-medium tracking-wide">Projekt</span>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-2xl p-6 w-[150px] flex flex-col items-center justify-center backdrop-blur-md shadow-xl">
            <span className="text-xl font-bold text-white mb-2">100%</span>
            <div className="flex flex-col items-center gap-1">
              <ThumbsUp size={16} className="text-yellow-500" />
              <span className="text-xs text-gray-400 font-medium tracking-wide text-center">Nöjda kunder</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-2xl p-6 w-[150px] flex flex-col items-center justify-center backdrop-blur-md shadow-xl">
            <div className="text-xl font-bold text-white mb-2 flex items-baseline">
              5<span className="text-base text-gray-300 ml-1">+</span>
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
      </main>
    </section>
  );
};

export default Hero;
