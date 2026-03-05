import { BrowserRouter } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import AppContent from "./AppContent";

const App = () => (
  <BrowserRouter>
    <AppContent />
    <SpeedInsights />
  </BrowserRouter>
);

export default App;
