import { ArrowRight, Code2, ThumbsUp, Star } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import ParticleNetwork from "./ParticleNetwork";
import VastmanlandMap from "./VastmanlandMap";

/* ── Slot-machine digit scroller ── */
const SlotDigit = ({ target, delay = 0 }: { target: string; delay?: number }) => {
  const [display, setDisplay] = useState("0");
  const isNumber = !isNaN(Number(target));

  useEffect(() => {
    if (!isNumber) {
      const t = setTimeout(() => setDisplay(target), delay * 1000);
      return () => clearTimeout(t);
    }
    const num = Number(target);
    const duration = 1200;
    const start = performance.now() + delay * 1000;
    let frame: number;
    const tick = (now: number) => {
      const elapsed = now - start;
      if (elapsed < 0) { frame = requestAnimationFrame(tick); return; }
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(String(Math.round(eased * num)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, delay, isNumber]);

  return (
    <span className="inline-block tabular-nums">{display}{!isNumber ? "" : ""}</span>
  );
};

/* ── Bento stat card ── */
const BentoCard = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className="group relative rounded-2xl p-6 flex flex-col items-center justify-center text-center
      bg-white/[0.04] backdrop-blur-md border border-white/[0.08]
      hover:border-primary/40 hover:shadow-[0_0_24px_-4px_hsl(38_92%_50%/0.15)]
      transition-all duration-500"
  >
    {children}
  </motion.div>
);

/* ── Pulsing icon ── */
const PulsingIcon = () => (
  <motion.div
    animate={{ scale: [1, 1.18, 1] }}
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    className="text-primary mb-2"
  >
    <ThumbsUp size={28} />
  </motion.div>
);

/* ── Shimmering stars ── */
const ShimmerStars = () => (
  <div className="flex gap-1 mb-2">
    {[0, 1, 2, 3, 4].map((i) => (
      <motion.div
        key={i}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.35, ease: "easeInOut" }}
      >
        <Star size={16} className="text-primary fill-primary" />
      </motion.div>
    ))}
  </div>
);

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative overflow-hidden bg-hero text-hero-foreground pt-16">
      {/* Particle canvas */}
      <ParticleNetwork />

      {/* Radial glow behind content */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, hsl(38 92% 50% / 0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32 flex flex-col items-center text-center">
        {/* Västmanland map behind heading */}
        <VastmanlandMap className="absolute right-0 top-8 w-[280px] sm:w-[360px] md:w-[420px] opacity-60 pointer-events-none select-none" />

        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-hero-muted/30 bg-hero-muted/10 backdrop-blur-sm mb-8"
        >
          <Code2 size={16} className="text-primary" />
          <span className="text-sm text-hero-muted">Webbutveckling & SEO i Västmanland</span>
        </motion.div>

        {/* Heading — staggered reveal */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="max-w-4xl"
        >
          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            Professionell Webbutveckling & SEO i{" "}
            <span className="text-primary">Västmanland</span>
          </motion.h1>
          <motion.span
            variants={fadeUp}
            className="block text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mt-1"
          >
            – LRH Konsult
          </motion.span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          transition={{ delay: 0.45 }}
          className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-hero-muted max-w-2xl"
        >
          Jag hjälper företag i{" "}
          <span className="text-primary font-medium">Västerås</span>,{" "}
          <span className="text-primary font-medium">Köping</span> och Sala att skapa snabba,
          sökmotoroptimerade webbplatser i{" "}
          <span className="text-primary font-medium">React</span> &{" "}
          <span className="text-primary font-medium">Next.js</span> som konverterar besökare
          till kunder.
        </motion.p>

        {/* CTA with shimmer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 sm:mt-10"
        >
          <Link
            to="/kontakt"
            className="relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium overflow-hidden group/cta hover:shadow-[0_0_32px_-4px_hsl(38_92%_50%/0.5)] transition-shadow duration-500"
          >
            {/* Shimmer overlay */}
            <span
              className="absolute inset-0 -translate-x-full group-hover/cta:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
              aria-hidden="true"
            />
            Boka ett samtal <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* Bento Stats */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 w-full max-w-2xl">
          {/* Card 1 — Slot machine */}
          <BentoCard delay={0.8}>
            <div className="text-3xl sm:text-4xl font-bold font-serif text-primary">
              <SlotDigit target="50" delay={1} />+
            </div>
            <div className="text-sm text-hero-muted mt-2">Projekt</div>
          </BentoCard>

          {/* Card 2 — Pulsing icon */}
          <BentoCard delay={0.95}>
            <PulsingIcon />
            <div className="text-3xl sm:text-4xl font-bold font-serif text-primary">100%</div>
            <div className="text-sm text-hero-muted mt-2">Nöjda kunder</div>
          </BentoCard>

          {/* Card 3 — Shimmer stars */}
          <BentoCard delay={1.1}>
            <ShimmerStars />
            <div className="text-3xl sm:text-4xl font-bold font-serif text-primary">
              <SlotDigit target="5" delay={1.2} />+
            </div>
            <div className="text-sm text-hero-muted mt-2">År erfarenhet</div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
};

export default Hero;
