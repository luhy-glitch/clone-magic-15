import React, { Suspense, lazy, useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";

// Defer UI overlay components — they cause forced reflows from Radix measuring DOM
const TooltipProvider = lazy(() => import("@/components/ui/tooltip").then(m => ({ default: m.TooltipProvider })));
const Toaster = lazy(() => import("@/components/ui/toaster").then(m => ({ default: m.Toaster })));
const Sonner = lazy(() => import("@/components/ui/sonner").then(m => ({ default: m.Toaster })));
const CookieBanner = lazy(() => import("./components/CookieBanner"));

// Lazy-load all pages except Index (landing page)
const NotFound = React.lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const Webbutveckling = React.lazy(() => import("./pages/Webbutveckling"));
const SeoOptimering = React.lazy(() => import("./pages/SeoOptimering"));
const OmMig = React.lazy(() => import("./pages/OmMig"));
const Blogg = React.lazy(() => import("./pages/Blogg"));
const Kontakt = React.lazy(() => import("./pages/Kontakt"));
const BloggArtikel = React.lazy(() => import("./pages/BloggArtikel"));
const AdminLogin = React.lazy(() => import("./pages/AdminLogin"));
const AdminDashboard = React.lazy(() => import("./pages/AdminDashboard"));
const WebbutvecklingPage = React.lazy(() => import("./pages/tjanster/WebbutvecklingPage"));
const WebbdesignPage = React.lazy(() => import("./pages/tjanster/WebbdesignPage"));
const SeoOptimeringPage = React.lazy(() => import("./pages/tjanster/SeoOptimeringPage"));
const WordpressPage = React.lazy(() => import("./pages/tjanster/WordpressPage"));
const UnderhallSupportPage = React.lazy(() => import("./pages/tjanster/UnderhallSupportPage"));
const PrestandaOptimeringPage = React.lazy(() => import("./pages/tjanster/PrestandaOptimeringPage"));
const WebbutvecklingVasteras = React.lazy(() => import("./pages/WebbutvecklingVasteras"));
const SeoKoping = React.lazy(() => import("./pages/SeoKoping"));
const HemsidorSala = React.lazy(() => import("./pages/HemsidorSala"));

const queryClient = new QueryClient();

const DeferredOverlays = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    // Defer overlay components until after LCP
    const id = setTimeout(() => setShow(true), 2500);
    return () => clearTimeout(id);
  }, []);
  if (!show) return null;
  return (
    <Suspense fallback={null}>
      <Toaster />
      <Sonner />
      <CookieBanner />
    </Suspense>
  );
};

const AppContent = () => (
  <QueryClientProvider client={queryClient}>
    <Suspense fallback={null}>
      <TooltipProvider>
        <ScrollToTop />
        <Suspense fallback={null}>
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
            <Route path="/webbutveckling-vasteras" element={<WebbutvecklingVasteras />} />
            <Route path="/seo-koping" element={<SeoKoping />} />
            <Route path="/hemsidor-sala" element={<HemsidorSala />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <DeferredOverlays />
      </TooltipProvider>
    </Suspense>
  </QueryClientProvider>
);

export default AppContent;
