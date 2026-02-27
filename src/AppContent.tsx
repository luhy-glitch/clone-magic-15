import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Webbutveckling from "./pages/Webbutveckling";
import SeoOptimering from "./pages/SeoOptimering";
import OmMig from "./pages/OmMig";
import Blogg from "./pages/Blogg";
import Kontakt from "./pages/Kontakt";
import CookieBanner from "./components/CookieBanner";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const AppContent = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ScrollToTop />
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/webbutveckling" element={<Webbutveckling />} />
        <Route path="/seo-optimering" element={<SeoOptimering />} />
        <Route path="/om-mig" element={<OmMig />} />
        <Route path="/blogg" element={<Blogg />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/integritetspolicy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CookieBanner />
    </TooltipProvider>
  </QueryClientProvider>
);

export default AppContent;
