import React, { Suspense, lazy, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";

// Defer heavy providers — not needed for initial paint
const TooltipProvider = lazy(() => import("@radix-ui/react-tooltip").then(m => ({ default: m.Provider })));
const Toaster = lazy(() => import("@/components/ui/toaster").then(m => ({ default: m.Toaster })));
const Sonner = lazy(() => import("@/components/ui/sonner").then(m => ({ default: m.Toaster })));
const CookieBanner = lazy(() => import("./components/CookieBanner"));

// Lazy-load all pages except Index (landing page)
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Webbutveckling = lazy(() => import("./pages/Webbutveckling"));
const SeoOptimering = lazy(() => import("./pages/SeoOptimering"));
const OmMig = lazy(() => import("./pages/OmMig"));
const Blogg = lazy(() => import("./pages/Blogg"));
const Kontakt = lazy(() => import("./pages/Kontakt"));
const BloggArtikel = lazy(() => import("./pages/BloggArtikel"));
const AdminLogin = lazy(() => import("./pages/AdminLogin"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const WebbutvecklingPage = lazy(() => import("./pages/tjanster/WebbutvecklingPage"));
const WebbdesignPage = lazy(() => import("./pages/tjanster/WebbdesignPage"));
const SeoOptimeringPage = lazy(() => import("./pages/tjanster/SeoOptimeringPage"));
const WordpressPage = lazy(() => import("./pages/tjanster/WordpressPage"));
const UnderhallSupportPage = lazy(() => import("./pages/tjanster/UnderhallSupportPage"));
const PrestandaOptimeringPage = lazy(() => import("./pages/tjanster/PrestandaOptimeringPage"));
const WebbutvecklingVasteras = lazy(() => import("./pages/WebbutvecklingVasteras"));
const SeoKoping = lazy(() => import("./pages/SeoKoping"));
const HemsidorSala = lazy(() => import("./pages/HemsidorSala"));

// Lazy-init QueryClient to avoid importing @tanstack/react-query in the critical path
const LazyQueryProvider = lazy(() =>
  import("@tanstack/react-query").then(m => {
    const client = new m.QueryClient();
    return {
      default: ({ children }: { children: React.ReactNode }) => (
        <m.QueryClientProvider client={client}>{children}</m.QueryClientProvider>
      ),
    };
  })
);

const AppContent = () => {
  const [showOverlays, setShowOverlays] = useState(false);

  useEffect(() => {
    // Defer overlays until after LCP
    const id = requestIdleCallback(() => setShowOverlays(true));
    return () => cancelIdleCallback(id);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={null}>
        <LazyQueryProvider>
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
        </LazyQueryProvider>
      </Suspense>
      {showOverlays && (
        <Suspense fallback={null}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
          </TooltipProvider>
          <CookieBanner />
        </Suspense>
      )}
    </>
  );
};

export default AppContent;
