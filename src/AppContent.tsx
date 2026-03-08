import React, { Suspense, lazy, useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import ScrollToTop from "./components/ScrollToTop";
import RedirectRoute from "./components/RedirectRoute";

// Defer heavy providers — not needed for initial paint
const TooltipProvider = lazy(() => import("@radix-ui/react-tooltip").then(m => ({ default: m.TooltipProvider })));
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
const WebbutvecklingEnkoping = lazy(() => import("./pages/WebbutvecklingEnkoping"));
const WebbutvecklingEskilstuna = lazy(() => import("./pages/WebbutvecklingEskilstuna"));
const WebbutvecklingArboga = lazy(() => import("./pages/WebbutvecklingArboga"));
const WebbutvecklingFagersta = lazy(() => import("./pages/WebbutvecklingFagersta"));
const HemsidorByggHantverkare = lazy(() => import("./pages/HemsidorByggHantverkare"));
const DigitalMarknadsforing = lazy(() => import("./pages/DigitalMarknadsforing"));
const CaseStudyPageSpeed = lazy(() => import("./pages/CaseStudyPageSpeed"));
const Case = lazy(() => import("./pages/Case"));
const GratisSeoAnalys = lazy(() => import("./pages/GratisSeoAnalys"));

// Lazy-init QueryClient — only needed for pages that fetch data
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

/** Routes that need QueryClient (blog, admin, etc.) */
const DataRoutes = () => (
  <Suspense fallback={null}>
    <LazyQueryProvider>
      <Routes>
        {/* 301 redirects from old root-level service paths */}
        <Route path="/webbutveckling" element={<RedirectRoute to="/tjanster/webbutveckling" />} />
        <Route path="/seo-optimering" element={<RedirectRoute to="/tjanster/seo-optimering" />} />

        <Route path="/om-mig" element={<OmMig />} />
        <Route path="/blogg" element={<Blogg />} />
        <Route path="/blogg/:slug" element={<BloggArtikel />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/integritetspolicy" element={<PrivacyPolicy />} />

        {/* Service pages (canonical paths) */}
        <Route path="/tjanster/webbutveckling" element={<WebbutvecklingPage />} />
        <Route path="/tjanster/webbdesign" element={<WebbdesignPage />} />
        <Route path="/tjanster/seo-optimering" element={<SeoOptimeringPage />} />
        <Route path="/tjanster/wordpress-losningar" element={<WordpressPage />} />
        <Route path="/tjanster/underhall-support" element={<UnderhallSupportPage />} />
        <Route path="/tjanster/prestanda-optimering" element={<PrestandaOptimeringPage />} />

        {/* Regional pages */}
        <Route path="/webbutveckling-vasteras" element={<WebbutvecklingVasteras />} />
        <Route path="/seo-koping" element={<SeoKoping />} />
        <Route path="/hemsidor-sala" element={<HemsidorSala />} />
        <Route path="/webbutveckling-enkoping" element={<WebbutvecklingEnkoping />} />
        <Route path="/webbutveckling-eskilstuna" element={<WebbutvecklingEskilstuna />} />
        <Route path="/webbutveckling-arboga" element={<WebbutvecklingArboga />} />
        <Route path="/webbutveckling-fagersta" element={<WebbutvecklingFagersta />} />

        {/* Niche pages */}
        <Route path="/hemsidor-bygg-hantverkare" element={<HemsidorByggHantverkare />} />
        <Route path="/digital-marknadsforing-butiker" element={<DigitalMarknadsforing />} />
        <Route path="/case-studies/pagespeed-revolution" element={<CaseStudyPageSpeed />} />

        {/* New pages */}
        <Route path="/case" element={<Case />} />
        <Route path="/gratis-seo-analys" element={<GratisSeoAnalys />} />

        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LazyQueryProvider>
  </Suspense>
);

const AppContent = () => {
  const [showOverlays, setShowOverlays] = useState(false);
  const location = useLocation();
  const isIndex = location.pathname === "/";

  useEffect(() => {
    // Defer overlays until after LCP
    if (typeof requestIdleCallback === "function") {
      const id = requestIdleCallback(() => setShowOverlays(true));
      return () => cancelIdleCallback(id);
    } else {
      const id = setTimeout(() => setShowOverlays(true), 1);
      return () => clearTimeout(id);
    }
  }, []);

  return (
    <>
      <ScrollToTop />
      {/* Index renders immediately without waiting for QueryClient chunk */}
      {isIndex ? <Index /> : <DataRoutes />}
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
