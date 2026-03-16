import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_URL as BASE_URL, DEFAULT_OG_IMAGE } from "@/lib/constants";

interface BreadcrumbEntry {
  name: string;
  url: string;
}

interface PageHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: Record<string, unknown>;
  breadcrumbs?: BreadcrumbEntry[];
}

const PageHead = ({ title, description, canonical, ogImage, jsonLd, breadcrumbs }: PageHeadProps) => {
  const { pathname } = useLocation();
  const cleanPath = pathname === "/" ? "" : pathname.replace(/\/+$/, "");
  const url = canonical || `${BASE_URL}${cleanPath}`;
  const image = ogImage || DEFAULT_OG_IMAGE;

  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", url, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:image", image, "property");
    setMeta("og:image:width", "1200", "property");
    setMeta("og:image:height", "630", "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("twitter:image", image);

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = url;

    const jsonLdId = "page-json-ld";
    let scriptEl = document.getElementById(jsonLdId) as HTMLScriptElement | null;
    if (jsonLd) {
      if (!scriptEl) {
        scriptEl = document.createElement("script");
        scriptEl.id = jsonLdId;
        scriptEl.type = "application/ld+json";
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(jsonLd);
    } else if (scriptEl) {
      scriptEl.remove();
    }

    const breadcrumbId = "page-breadcrumb-ld";
    let breadcrumbEl = document.getElementById(breadcrumbId) as HTMLScriptElement | null;
    if (breadcrumbs && breadcrumbs.length > 0) {
      if (!breadcrumbEl) {
        breadcrumbEl = document.createElement("script");
        breadcrumbEl.id = breadcrumbId;
        breadcrumbEl.type = "application/ld+json";
        document.head.appendChild(breadcrumbEl);
      }
      breadcrumbEl.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((b, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": b.name,
          "item": b.url,
        })),
      });
    } else if (breadcrumbEl) {
      breadcrumbEl.remove();
    }

    const localBusinessId = "local-business-json-ld";
    let localBusinessEl = document.getElementById(localBusinessId) as HTMLScriptElement | null;
    if (!localBusinessEl) {
      localBusinessEl = document.createElement("script");
      localBusinessEl.id = localBusinessId;
      localBusinessEl.type = "application/ld+json";
      document.head.appendChild(localBusinessEl);
    }
    localBusinessEl.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "LRH Konsult",
      "url": "https://www.lrhkonsult.se",
      "telephone": "",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Västerås",
        "addressRegion": "Västmanland",
        "addressCountry": "SE"
      },
      "areaServed": ["Västerås", "Köping", "Sala", "Enköping", "Eskilstuna"],
      "priceRange": "$$",
      "description": "Webbutveckling och SEO-optimering för företag i Västmanland"
    });

    const defaultBreadcrumbId = "default-breadcrumb-json-ld";
    let defaultBreadcrumbEl = document.getElementById(defaultBreadcrumbId) as HTMLScriptElement | null;
    if (!defaultBreadcrumbEl) {
      defaultBreadcrumbEl = document.createElement("script");
      defaultBreadcrumbEl.id = defaultBreadcrumbId;
      defaultBreadcrumbEl.type = "application/ld+json";
      document.head.appendChild(defaultBreadcrumbEl);
    }
    defaultBreadcrumbEl.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Hem",
          "item": "https://www.lrhkonsult.se"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": title,
          "item": url
        }
      ]
    });

    return () => {
      const el = document.getElementById(jsonLdId);
      if (el) el.remove();
      const bEl = document.getElementById(breadcrumbId);
      if (bEl) bEl.remove();
      const lbEl = document.getElementById(localBusinessId);
      if (lbEl) lbEl.remove();
      const dbEl = document.getElementById(defaultBreadcrumbId);
      if (dbEl) dbEl.remove();
    };
  }, [title, description, url, jsonLd, breadcrumbs]);

  return null;
};

export default PageHead;