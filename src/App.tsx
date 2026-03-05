import { BrowserRouter } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import AppContent from "./AppContent";

const App = () => (
  <BrowserRouter>
    <AppContent />
    <SpeedInsights />
    <Analytics />
  </BrowserRouter>
);

export default App;
