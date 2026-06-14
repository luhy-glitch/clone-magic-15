import React, { forwardRef, useEffect, useRef } from 'react';

interface AnimatedProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number;
  direction?: "left" | "right";
}

function mergeRefs<T>(...refs: (React.Ref<T> | undefined)[]) {
  return (node: T) => {
    for (const ref of refs) {
      if (typeof ref === "function") ref(node);
      else if (ref && typeof ref === "object") (ref as React.MutableRefObject<T>).current = node;
    }
  };
}

/**
 * Scroll-reveal som är SEO- och prestandasäker:
 * - Effekten läggs på via JS EFTER hydrering → statisk HTML är fullt synlig (crawlers + no-JS).
 * - Endast element UNDER fold animeras → above-fold/hero visas direkt (ingen LCP-påverkan, ingen FOUC).
 * - opacity + transform (GPU, 0 layout shift). Respekterar prefers-reduced-motion.
 */
function useReveal(animClass: string, delay = 0) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    // Hoppa över under prerender (Playwright) → statisk HTML blir fullt synlig för crawlers/no-JS.
    if (navigator.webdriver) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    // Above-fold visas direkt – animera bara det som ligger under första vyn.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.95) return;
    el.classList.add("lrh-reveal", animClass);
    if (delay) el.style.transitionDelay = `${delay}s`;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.classList.add("lrh-reveal--in");
            obs.unobserve(el);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [animClass, delay]);
  return ref;
}

function makeReveal(animClass: string) {
  const Comp = forwardRef<HTMLDivElement, AnimatedProps>(
    ({ children, className, id, delay, direction, ...props }, forwardedRef) => {
      const cls = animClass === "lrh-reveal-slide"
        ? `lrh-reveal-slide-${direction === "right" ? "right" : "left"}`
        : animClass;
      const internalRef = useReveal(cls, delay);
      return (
        <div ref={mergeRefs(internalRef, forwardedRef)} className={className} id={id} {...props}>
          {children}
        </div>
      );
    }
  );
  return Comp;
}

export const AnimatedSection = makeReveal("lrh-reveal-fade");
AnimatedSection.displayName = "AnimatedSection";

export const FadeIn = makeReveal("lrh-reveal-fade");
FadeIn.displayName = "FadeIn";

export const ScaleIn = makeReveal("lrh-reveal-scale");
ScaleIn.displayName = "ScaleIn";

export const SlideIn = makeReveal("lrh-reveal-slide");
SlideIn.displayName = "SlideIn";

export const StaggerContainer = makeReveal("lrh-reveal-fade");
StaggerContainer.displayName = "StaggerContainer";

export default AnimatedSection;
