import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface PageHeadProps {
  title: string;
  description: string;
  canonical?: string;
}

const BASE_URL = "https://lrhkonsult.se";

const PageHead = ({ title, description, canonical }: PageHeadProps) => {
  const { pathname } = useLocation();
  const url = canonical || `${BASE_URL}${pathname === "/" ? "" : pathname}`;

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

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = url;
  }, [title, description, url]);

  return null;
};

export default PageHead;
