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
import BloggArtikel from "./pages/BloggArtikel";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import WebbutvecklingPage from "./pages/tjanster/WebbutvecklingPage";
import WebbdesignPage from "./pages/tjanster/WebbdesignPage";
import SeoOptimeringPage from "./pages/tjanster/SeoOptimeringPage";
import WordpressPage from "./pages/tjanster/WordpressPage";
import UnderhallSupportPage from "./pages/tjanster/UnderhallSupportPage";
import PrestandaOptimeringPage from "./pages/tjanster/PrestandaOptimeringPage";
import WebbutvecklingVasteras from "./pages/WebbutvecklingVasteras";
import SeoKoping from "./pages/SeoKoping";
import HemsidorSala from "./pages/HemsidorSala";
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
        <Route path="/blogg/:slug" element={<BloggArtikel />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/integritetspolicy" element={<PrivacyPolicy />} />
        <Route path="/tjanster/webbutveckling" element={<WebbutvecklingPage />} />
        <Route path="/tjanster/webbdesign" element={<WebbdesignPage />} />
        <Route path="/tjanster/seo-optimering" element={<SeoOptimeringPage />} />
        <Route path="/tjanster/wordpress-losningar" element={<WordpressPage />} />
        <Route path="/tjanster/underhall-support" element={<UnderhallSupportPage />} />
        <Route path="/tjanster/prestanda-optimering" element={<PrestandaOptimeringPage />} />
        {/* Local landing pages */}
        <Route path="/webbutveckling-vasteras" element={<WebbutvecklingVasteras />} />
        <Route path="/seo-koping" element={<SeoKoping />} />
        <Route path="/hemsidor-sala" element={<HemsidorSala />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CookieBanner />
    </TooltipProvider>
  </QueryClientProvider>
);

export default AppContent;
