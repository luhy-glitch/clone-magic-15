import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import AnimatedSection, { FadeIn } from "@/components/AnimatedSection";
import { useBlogPost, useBlogPosts } from "@/hooks/useBlogPosts";
import { Calendar, ArrowLeft, Tag, ArrowRight, Clock, User } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import NotFound from "./NotFound";

const SERVICE_LINKS: Record<string, { label: string; href: string }[]> = {
  SEO: [
    { label: "SEO-optimering", href: "/seo-optimering" },
    { label: "Kontakta oss", href: "/kontakt" },
  ],
  "SEO & AI": [
    { label: "SEO-optimering", href: "/seo-optimering" },
    { label: "Webbutveckling", href: "/webbutveckling" },
  ],
  Webbutveckling: [
    { label: "Webbutveckling", href: "/webbutveckling" },
    { label: "SEO-optimering", href: "/seo-optimering" },
  ],
  "Digital Strategi": [
    { label: "Webbutveckling", href: "/webbutveckling" },
    { label: "SEO-optimering", href: "/seo-optimering" },
    { label: "Om mig", href: "/om-mig" },
  ],
  Prestanda: [
    { label: "Webbutveckling", href: "/webbutveckling" },
    { label: "Kontakta oss", href: "/kontakt" },
  ],
};

function estimateReadingTime(content: string): number {
  return Math.max(1, Math.ceil(content.split(/\s+/).length / 200));
}

/** Parse content line-by-line so headings never swallow paragraphs */
function parseContentLines(raw: string) {
  const lines = raw.split("\n");
  const elements: { type: "h2" | "h3" | "p" | "quote" | "li"; text: string; id?: string }[] = [];
  let listBuffer: string[] = [];

  const flushList = () => {
    if (listBuffer.length > 0) {
      listBuffer.forEach((item) => elements.push({ type: "li", text: item }));
      listBuffer = [];
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      flushList();
      continue;
    }

    if (trimmed.startsWith("## ")) {
      flushList();
      const text = trimmed.slice(3);
      const id = text.toLowerCase().replace(/[^a-zåäö0-9]+/g, "-").replace(/-+$/, "");
      elements.push({ type: "h2", text, id });
    } else if (trimmed.startsWith("### ")) {
      flushList();
      elements.push({ type: "h3", text: trimmed.slice(4) });
    } else if (trimmed.startsWith("> ")) {
      flushList();
      elements.push({ type: "quote", text: trimmed.slice(2) });
    } else if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      listBuffer.push(trimmed.slice(2));
    } else {
      flushList();
      // Merge with previous paragraph if it exists
      const last = elements[elements.length - 1];
      if (last && last.type === "p") {
        last.text += " " + trimmed;
      } else {
        elements.push({ type: "p", text: trimmed });
      }
    }
  }
  flushList();
  return elements;
}

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, j) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={j} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>
    ) : (
      <span key={j}>{part}</span>
    )
  );
}

const BloggArtikel = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading } = useBlogPost(slug);
  const { data: allPosts = [] } = useBlogPosts();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-pulse space-y-4 w-full max-w-3xl px-4">
          <div className="h-8 bg-muted rounded w-3/4" />
          <div className="h-4 bg-muted rounded w-1/2" />
          <div className="h-64 bg-muted rounded-xl" />
          <div className="h-4 bg-muted rounded" />
          <div className="h-4 bg-muted rounded w-5/6" />
        </div>
      </div>
    );
  }

  if (!post) return <NotFound />;

  const readingTime = estimateReadingTime(post.content);
  const parsed = parseContentLines(post.content);
  const headings = parsed.filter((e) => e.type === "h2");

  // Related: same tag first, then others
  const sameTag = allPosts.filter((p) => p.slug !== post.slug && p.tag === post.tag);
  const otherTag = allPosts.filter((p) => p.slug !== post.slug && p.tag !== post.tag);
  const related = [...sameTag, ...otherTag].slice(0, 3);

  const serviceLinks = SERVICE_LINKS[post.tag] || SERVICE_LINKS["Digital Strategi"];

  return (
    <div className="min-h-screen">
      <PageHead title={`${post.title} | LRH Konsult`} description={post.excerpt} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.date,
            image: post.image_url || undefined,
            author: { "@type": "Person", name: "Lucas", url: "https://lrhkonsult.se/om-mig" },
            publisher: { "@type": "Organization", name: "LRH Konsult", url: "https://lrhkonsult.se" },
            mainEntityOfPage: `https://lrhkonsult.se/blogg/${post.slug}`,
          }),
        }}
      />
      <Navbar />
      <main>
        {/* Hero with breadcrumbs */}
        <section className="bg-hero text-hero-foreground pt-20 pb-12 sm:pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            {/* Breadcrumbs */}
            <Breadcrumb className="mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link to="/" className="text-hero-muted hover:text-primary">Hem</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild><Link to="/blogg" className="text-hero-muted hover:text-primary">Blogg</Link></BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-hero-foreground truncate max-w-[200px] sm:max-w-none">{post.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <AnimatedSection>
              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold">
                  <Tag size={12} /> {post.tag}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-hero-muted">
                  <Calendar size={14} /> {post.date}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-hero-muted">
                  <Clock size={14} /> {readingTime} min läsning
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] mb-5">
                {post.title}
              </h1>
              <p className="text-base sm:text-lg text-hero-muted max-w-2xl leading-relaxed">{post.excerpt}</p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <User size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Lucas</p>
                  <p className="text-xs text-hero-muted">Webbutvecklare & SEO-konsult</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Article body */}
        <section className="py-12 sm:py-16 bg-section-alt">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            {/* Hero image */}
            {post.image_url && (
              <div className="aspect-video w-full overflow-hidden rounded-2xl mb-12 ring-1 ring-border shadow-xl shadow-black/20">
                <img
                  src={post.image_url}
                  alt={post.image_alt || post.title}
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Table of contents */}
            {headings.length >= 3 && (
              <FadeIn>
                <nav className="bg-card/60 backdrop-blur rounded-xl border border-border p-6 mb-12" aria-label="Innehållsförteckning">
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">Innehåll</h2>
                  <ol className="space-y-2.5">
                    {headings.map((h, i) => (
                      <li key={h.id}>
                        <a href={`#${h.id}`} className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors text-sm group">
                          <span className="text-primary/50 font-mono text-xs mt-0.5 group-hover:text-primary">{String(i + 1).padStart(2, "0")}</span>
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </FadeIn>
            )}

            {/* Article content */}
            <AnimatedSection>
              <article className="prose-article">
                {parsed.map((el, i) => {
                  switch (el.type) {
                    case "h2":
                      return (
                        <h2 key={i} id={el.id} className="text-xl sm:text-2xl font-bold font-serif mt-10 mb-4 text-foreground scroll-mt-24">
                          {el.text}
                        </h2>
                      );
                    case "h3":
                      return (
                        <h3 key={i} className="text-lg sm:text-xl font-bold font-serif mt-8 mb-3 text-foreground">
                          {el.text}
                        </h3>
                      );
                    case "quote":
                      return (
                        <blockquote key={i} className="border-l-4 border-primary/60 pl-5 py-1 my-6 text-foreground/80 italic">
                          {el.text}
                        </blockquote>
                      );
                    case "li":
                      return (
                        <li key={i} className="text-muted-foreground leading-relaxed text-[15px] sm:text-base ml-5 list-disc mb-1.5">
                          {renderInline(el.text)}
                        </li>
                      );
                    case "p":
                    default:
                      return (
                        <p key={i} className="text-muted-foreground leading-[1.8] text-[15px] sm:text-base mb-5">
                          {renderInline(el.text)}
                        </p>
                      );
                  }
                })}
              </article>
            </AnimatedSection>

            {/* Service links */}
            <div className="mt-14 flex flex-wrap gap-2.5">
              <span className="text-sm text-muted-foreground self-center mr-1">Relaterade tjänster:</span>
              {serviceLinks.map((link) => (
                <Link key={link.href} to={link.href} className="px-4 py-2 rounded-full border border-border text-sm text-foreground hover:border-primary hover:text-primary transition-colors">
                  {link.label} →
                </Link>
              ))}
            </div>

            {/* CTA */}
            <FadeIn>
              <div className="mt-14 p-8 sm:p-10 bg-card rounded-2xl border border-border text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                <div className="relative">
                  <h3 className="text-2xl font-bold font-serif mb-3">Redo att ta nästa steg?</h3>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Boka en kostnadsfri konsultation så berättar jag hur vi kan förbättra din digitala närvaro.
                  </p>
                  <Link to="/kontakt" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                    Boka samtal <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Related articles */}
            {related.length > 0 && (
              <div className="mt-16">
                <h3 className="text-2xl font-bold font-serif mb-8">Läs vidare</h3>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {related.map((r, i) => (
                    <FadeIn key={r.slug} delay={i * 0.1}>
                      <Link to={`/blogg/${r.slug}`} className="block group h-full">
                        <article className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all h-full flex flex-col">
                          <div className="aspect-[16/10] w-full overflow-hidden">
                            {r.image_url ? (
                              <img src={r.image_url} alt={r.image_alt || r.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-[hsl(140_18%_18%)] via-[hsl(140_16%_22%)] to-[hsl(140_12%_16%)] flex items-center justify-center">
                                <span className="text-muted-foreground/20 font-serif text-4xl font-bold">{r.title.charAt(0)}</span>
                              </div>
                            )}
                          </div>
                          <div className="p-4 flex flex-col flex-1">
                            <span className="text-xs text-muted-foreground mb-2">{r.date}</span>
                            <h4 className="text-sm font-bold font-serif mb-1 group-hover:text-primary transition-colors leading-snug">{r.title}</h4>
                            <span className="inline-flex items-center gap-1 text-primary text-xs font-medium mt-auto pt-2 group-hover:gap-2 transition-all">
                              Läs mer <ArrowRight size={12} />
                            </span>
                          </div>
                        </article>
                      </Link>
                    </FadeIn>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-10 text-center">
              <Link to="/blogg" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
                <ArrowLeft size={16} /> Alla artiklar
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BloggArtikel;
