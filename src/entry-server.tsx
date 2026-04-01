import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

// --- KRITISK FIX FÖR LAZY LOAD ---
// Vi skriver över React.lazy och Suspense INNAN vi importerar AppContent
const originalLazy = React.lazy;
(React as any).lazy = (factory: () => Promise<any>) => {
  let Component: any = null;
  factory().then((m) => {
    Component = m.default || m;
  }).catch(() => {});
  return (props: any) => Component ? React.createElement(Component, props) : null;
};
(React as any).Suspense = ({ children }: any) => children;

// Nu kan vi importera AppContent säkert
import AppContent from "./AppContent";

export function render(url: string) {
  // Vi kör renderingen två gånger för att vara helt säkra
  // 1. "Värm upp" alla lazy-komponenter
  renderToString(<StaticRouter location={url}><AppContent /></StaticRouter>);
  
  // 2. Skapa den faktiska HTML-koden
  return renderToString(<StaticRouter location={url}><AppContent /></StaticRouter>);
}

export function getPageTitle(url: string): string {
  const titles: Record<string, string> = {
    "/": "Webbutveckling & SEO i Västmanland | LRH Konsult",
    "/webbutveckling-vasteras": "Webbutveckling Västerås - Snabba Hemsidor | LRH Konsult",
    "/seo-koping": "SEO Köping - Ranka Högre på Google | LRH Konsult",
    "/hemsidor-sala": "Hemsidor Sala - Webbdesign & SEO | LRH Konsult"
  };
  return titles[url] || "Webbutveckling & SEO i Västmanland | LRH Konsult";
}

export function getPageDescription(url: string): string {
  const descriptions: Record<string, string> = {
    "/": "Blixtsnabba hemsidor i Västerås, Köping & Sala. 100/100 PageSpeed.",
    "/webbutveckling-vasteras": "Hjälper företag i Västerås att synas högre på Google och få fler kunder.",
    "/seo-koping": "Optimera din synlighet i Köping. Vi hjälper dig att dominera sökresultaten.",
    "/hemsidor-sala": "Snabba och moderna hemsidor för företagare i Sala."
  };
  return descriptions[url] || "LRH Konsult erbjuder webbutveckling och SEO-optimering i Västmanland.";
}
