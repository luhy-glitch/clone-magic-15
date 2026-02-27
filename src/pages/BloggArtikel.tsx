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

const INTERNAL_LINKS: Record<string, { label: string; href: string }[]> = {
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
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

function renderBlock(block: string, index: number) {
  if (block.startsWith("## ")) {
    const text = block.replace("## ", "");
    const id = text.toLowerCase().replace(/[^a-zåäö0-9]+/g, "-").replace(/-+$/, "");
    return (
      <h2 key={index} id={id} className="text-2xl sm:text-3xl font-bold font-serif mt-12 mb-4 text-foreground scroll-mt-24">
        {text}
      </h2>
    );
  }
  if (block.startsWith("### ")) {
    return (
      <h3 key={index} className="text-xl sm:text-2xl font-bold font-serif mt-8 mb-3 text-foreground">
        {block.replace("### ", "")}
      </h3>
    );
  }
  if (block.startsWith("> ")) {
    return (
      <blockquote key={index} className="border-l-4 border-primary pl-5 py-2 my-6 text-foreground/80 italic text-lg">
        {block.replace(/^> /gm, "")}
      </blockquote>
    );
  }
  if (block.startsWith("- ") || block.startsWith("* ")) {
    const items = block.split("\n").filter(Boolean);
    return (
      <ul key={index} className="list-disc list-inside space-y-2 text-muted-foreground text-base sm:text-lg ml-2">
        {items.map((item, j) => (
          <li key={j}>{item.replace(/^[-*] /, "")}</li>
        ))}
      </ul>
    );
  }
  // Render inline bold
  const parts = block.split(/(\*\*[^*]+\*\*)/g);
  return (
    <p key={index} className="text-muted-foreground leading-relaxed text-base sm:text-lg">
      {parts.map((part, j) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={j} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>
        ) : (
          part
        )
      )}
    </p>
  );
}

const BloggArtikel = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading } = useBlogPost(slug);
  const { data: allPosts = [] } = useBlogPosts();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
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
  const contentBlocks = post.content.split("\n\n").filter(Boolean);
  const headings = contentBlocks
    .filter((b) => b.startsWith("## "))
    .map((b) => {
      const text = b.replace("## ", "");
      const id = text.toLowerCase().replace(/[^a-zåäö0-9]+/g, "-").replace(/-+$/, "");
      return { text, id };
    });

  // Related: same tag first, then others
  const sameTag = allPosts.filter((p) => p.slug !== post.slug && p.tag === post.tag);
  const otherTag = allPosts.filter((p) => p.slug !== post.slug && p.tag !== post.tag);
  const related = [...sameTag, ...otherTag].slice(0, 3);

  const serviceLinks = INTERNAL_LINKS[post.tag] || INTERNAL_LINKS["Digital Strategi"];

  return (
    <div className="min-h-screen">
      <PageHead
        title={`${post.title} | LRH Konsult`}
        description={post.excerpt}
      />
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
        {/* Breadcrumbs */}
        <div className="bg-hero pt-20 pb-0">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="text-hero-muted hover:text-primary">Hem</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/blogg" className="text-hero-muted hover:text-primary">Blogg</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-hero-foreground truncate max-w-[200px] sm:max-w-none">{post.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Hero */}
        <section className="relative bg-hero text-hero-foreground">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
            <AnimatedSection>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  <Tag size={12} /> {post.tag}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-hero-muted">
                  <Calendar size={14} /> {post.date}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-hero-muted">
                  <Clock size={14} /> {readingTime} min läsning
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
                {post.title}
              </h1>
              <p className="text-lg text-hero-muted max-w-2xl">{post.excerpt}</p>
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border/30">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <User size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm font-medium text-hero-foreground">Lucas</p>
                  <p className="text-xs text-hero-muted">Webbutvecklare & SEO-konsult</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Article content */}
        <section className="py-14 sm:py-20 bg-section-alt">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            {/* Hero image */}
            {post.image_url && (
              <div className="aspect-video w-full overflow-hidden rounded-xl mb-10 ring-1 ring-border">
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
                <nav className="bg-card rounded-xl border border-border p-6 mb-10" aria-label="Innehållsförteckning">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">Innehåll</h2>
                  <ol className="space-y-2">
                    {headings.map((h, i) => (
                      <li key={h.id}>
                        <a
                          href={`#${h.id}`}
                          className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base group"
                        >
                          <span className="text-primary/60 font-mono text-xs mt-0.5 group-hover:text-primary">{String(i + 1).padStart(2, "0")}</span>
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ol>
                </nav>
              </FadeIn>
            )}

            <AnimatedSection>
              <article className="space-y-5">
                {contentBlocks.map((block, i) => renderBlock(block, i))}
              </article>
            </AnimatedSection>

            {/* Internal service links */}
            <FadeIn>
              <div className="mt-14 flex flex-wrap gap-3">
                <span className="text-sm text-muted-foreground mr-1 self-center">Relaterade tjänster:</span>
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="px-4 py-2 rounded-full border border-border text-sm text-foreground hover:border-primary hover:text-primary transition-colors"
                  >
                    {link.label} →
                  </Link>
                ))}
              </div>
            </FadeIn>

            {/* CTA */}
            <FadeIn>
              <div className="mt-14 p-8 sm:p-10 bg-card rounded-xl border border-border text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                <div className="relative">
                  <h3 className="text-2xl font-bold font-serif mb-3">Redo att ta nästa steg?</h3>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Boka en kostnadsfri konsultation så berättar jag hur vi kan förbättra din digitala närvaro.
                  </p>
                  <Link
                    to="/kontakt"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
                  >
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
                              <img
                                src={r.image_url}
                                alt={r.image_alt || r.title}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-[hsl(140_18%_18%)] via-[hsl(140_16%_22%)] to-[hsl(140_12%_16%)]" />
                            )}
                          </div>
                          <div className="p-5 flex flex-col flex-1">
                            <div className="flex items-center gap-2 mb-3">
                              <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">{r.tag}</span>
                              <span className="text-xs text-muted-foreground">{r.date}</span>
                            </div>
                            <h4 className="text-base font-bold font-serif mb-2 group-hover:text-primary transition-colors leading-snug">{r.title}</h4>
                            <p className="text-muted-foreground text-sm flex-1 line-clamp-2">{r.excerpt}</p>
                            <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                              Läs mer <ArrowRight size={14} />
                            </span>
                          </div>
                        </article>
                      </Link>
                    </FadeIn>
                  ))}
                </div>
              </div>
            )}

            {/* Back to blog */}
            <div className="mt-12 text-center">
              <Link
                to="/blogg"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <ArrowLeft size={16} /> Visa alla artiklar
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
