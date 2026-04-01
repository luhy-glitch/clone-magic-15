import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

// --- TOTAL SYNC OVERRIDE ---
// Vi tvingar React att bli 100% synkront innan AppContent laddas
(React as any).lazy = (factory: () => Promise<any>) => {
  let Component: any = null;
  let promise = factory().then((m) => { Component = m.default || m; });
  return (props: any) => Component ? React.createElement(Component, props) : null;
};
(React as any).Suspense = ({ children }: any) => children;

import AppContent from "./AppContent";

export function render(url: string) {
  return renderToString(
    <StaticRouter location={url}>
      <AppContent />
    </StaticRouter>
  );
}

export function getPageTitle(url: string): string {
  const titles: Record<string, string> = {
    "/": "Webbutveckling & SEO i Västmanland | LRH Konsult",
    "/webbutveckling-vasteras": "Webbutveckling Västerås - Snabba Hemsidor | LRH Konsult",
    "/seo-koping": "SEO Köping - Ranka Högre på Google | LRH Konsult",
    "/hemsidor-sala": "Hemsidor Sala - Webbdesign & SEO | LRH Konsult",
  };
  return titles[url] || "Webbutveckling & SEO | LRH Konsult";
}
