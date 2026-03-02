import { Link } from "react-router-dom";

/**
 * Keyword-to-service mapping for consistent internal linking.
 * Prevents keyword cannibalization by always linking a keyword to its canonical service page.
 */
const KEYWORD_MAP: Record<string, { href: string; label: string }> = {
  "webbutveckling": { href: "/tjanster/webbutveckling", label: "webbutveckling" },
  "webbdesign": { href: "/tjanster/webbdesign", label: "webbdesign" },
  "seo-optimering": { href: "/tjanster/seo-optimering", label: "SEO-optimering" },
  "seo": { href: "/tjanster/seo-optimering", label: "SEO" },
  "wordpress": { href: "/tjanster/wordpress-losningar", label: "WordPress" },
  "underhåll": { href: "/tjanster/underhall-support", label: "underhåll & support" },
  "support": { href: "/tjanster/underhall-support", label: "support" },
  "prestanda": { href: "/tjanster/prestanda-optimering", label: "prestandaoptimering" },
  "prestandaoptimering": { href: "/tjanster/prestanda-optimering", label: "prestandaoptimering" },
  "core web vitals": { href: "/tjanster/prestanda-optimering", label: "Core Web Vitals" },
  "hemsida": { href: "/tjanster/webbutveckling", label: "hemsida" },
  "hemsidor": { href: "/tjanster/webbutveckling", label: "hemsidor" },
  "next.js": { href: "/tjanster/webbutveckling", label: "Next.js" },
  "react": { href: "/tjanster/webbutveckling", label: "React" },
};

interface InternalLinkProps {
  /** The keyword key from KEYWORD_MAP, or a custom keyword */
  keyword: string;
  /** Override the display text */
  children?: React.ReactNode;
  className?: string;
}

/**
 * Reusable internal link component that maps SEO keywords to their canonical service pages.
 * Usage: <InternalLink keyword="prestandaoptimering" /> or
 *        <InternalLink keyword="seo">sökmotoroptimering</InternalLink>
 */
const InternalLink = ({ keyword, children, className = "" }: InternalLinkProps) => {
  const entry = KEYWORD_MAP[keyword.toLowerCase()];
  if (!entry) {
    return <span className={className}>{children || keyword}</span>;
  }

  return (
    <Link
      to={entry.href}
      className={`text-primary hover:underline underline-offset-2 font-medium transition-colors ${className}`}
    >
      {children || entry.label}
    </Link>
  );
};

export { KEYWORD_MAP };
export default InternalLink;
