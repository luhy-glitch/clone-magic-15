import { BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import AppContent from "./AppContent";

// Defer analytics — not needed during first 1500ms
const SpeedInsights = lazy(() => import("@vercel/speed-insights/react").then(m => ({ default: m.SpeedInsights })));
const Analytics = lazy(() => import("@vercel/analytics/react").then(m => ({ default: m.Analytics })));

const App = () => (
  <BrowserRouter>
    <AppContent />
    <Suspense fallback={null}>
      <SpeedInsights />
      <Analytics />
    </Suspense>
  </BrowserRouter>
);

export default App;
