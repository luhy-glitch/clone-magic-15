import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import AnimatedSection, { FadeIn } from "@/components/AnimatedSection";
import SocialShare from "@/components/SocialShare";
import { useBlogPost, useBlogPosts } from "@/hooks/useBlogPosts";
import { Calendar, ArrowLeft, Tag, ArrowRight, Clock, User, Lightbulb } from "lucide-react";
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
    { label: "SEO-optimering", href: "/tjanster/seo-optimering" },
    { label: "Gratis SEO-analys", href: "/gratis-seo-analys" },
  ],
  "SEO & AI": [
    { label: "SEO-optimering", href: "/tjanster/seo-optimering" },
    { label: "Webbutveckling", href: "/tjanster/webbutveckling" },
    { label: "Gratis SEO-analys", href: "/gratis-seo-analys" },
  ],
  Webbutveckling: [
    { label: "Webbutveckling", href: "/tjanster/webbutveckling" },
    { label: "SEO-optimering", href: "/tjanster/seo-optimering" },
    { label: "Gratis SEO-analys", href: "/gratis-seo-analys" },
  ],
  "Digital Strategi": [
    { label: "Webbutveckling", href: "/tjanster/webbutveckling" },
    { label: "SEO-optimering", href: "/tjanster/seo-optimering" },
    { label: "Gratis SEO-analys", href: "/gratis-seo-analys" },
  ],
  Prestanda: [
    { label: "Prestandaoptimering", href: "/tjanster/prestanda-optimering" },
    { label: "Gratis SEO-analys", href: "/gratis-seo-analys" },
  ],
};

function estimateReadingTime(content: string): number {
  return Math.max(1, Math.ceil(content.split(/\s+/).length / 200));
}

/** Extract 3-5 key takeaways for GEO "Snabba fakta" section */
function extractKeyTakeaways(content: string, title: string): string[] {
  const lines = content.split("\n").map((l) => l.trim()).filter(Boolean);
  const points: string[] = [];

  // First try bullet points
  for (const line of lines) {
    if (line.startsWith("- ") || line.startsWith("* ")) {
      points.push(line.slice(2));
      if (points.length >= 5) break;
    }
  }

  // Fallback: extract first sentence from each H2 section (direct answer pattern)
  if (points.length < 3) {
    let currentHeading = "";
    for (const line of lines) {
      if (line.startsWith("## ")) {
        currentHeading = line.slice(3);
      } else if (currentHeading && !line.startsWith("#") && !line.startsWith(">") && line.length > 40) {
        const sentence = line.split(/[.!?]/)[0];
        if (sentence && sentence.length > 20 && !points.includes(sentence.trim())) {
          points.push(sentence.trim());
          currentHeading = "";
          if (points.length >= 5) break;
        }
      }
    }
  }

  return points.slice(0, 5);
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
    if (!trimmed) { flushList(); continue; }

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

/** Render inline markdown (bold + links) */
function renderInline(text: string) {
  // First handle markdown links [text](url)
  const linkParts = text.split(/(\[[^\]]+\]\([^)]+\))/g);

  return linkParts.map((part, i) => {
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <Link key={i} to={linkMatch[2]} className="text-primary hover:underline underline-offset-2 font-medium">
          {linkMatch[1]}
        </Link>
      );
    }

    // Handle bold
    const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
    return boldParts.map((bp, j) =>
      bp.startsWith("**") && bp.endsWith("**") ? (
        <strong key={`${i}-${j}`} className="text-foreground font-semibold">{bp.slice(2, -2)}</strong>
      ) : (
        <span key={`${i}-${j}`}>{bp}</span>
      )
    );
  });
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

  // Prefer curated takeaways from DB, fall back to auto-extraction
  const dbTakeaways = (post as any).key_takeaways
    ? (post as any).key_takeaways.split("\n").map((l: string) => l.replace(/^[-•*]\s*/, "").trim()).filter(Boolean)
    : [];
  const keyTakeaways = dbTakeaways.length >= 3 ? dbTakeaways : extractKeyTakeaways(post.content, post.title);

  // Related: same tag first, then others
  const sameTag = allPosts.filter((p) => p.slug !== post.slug && p.tag === post.tag);
  const otherTag = allPosts.filter((p) => p.slug !== post.slug && p.tag !== post.tag);
  const related = [...sameTag, ...otherTag].slice(0, 3);

  const serviceLinks = SERVICE_LINKS[post.tag] || SERVICE_LINKS["Digital Strategi"];
  const postUrl = `https://www.lrhkonsult.se/blogg/${post.slug}`;

  // FAQ schema from H2 headings + first paragraph after each
  // FAQ schema from H2 headings + first paragraph after each
  const faqItems: { question: string; answer: string }[] = [];
  for (let i = 0; i < parsed.length; i++) {
    if (parsed[i].type === "h2" && parsed[i + 1]?.type === "p") {
      const answer = parsed[i + 1].text.slice(0, 300).trim();
      if (answer.length > 10) {
        faqItems.push({
          question: parsed[i].text,
          answer,
        });
      }
    }
  }

  const updatedAt = (post as any).updated_at || post.date;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: updatedAt,
        image: post.image_url || undefined,
        author: { "@type": "Person", name: "Lucas", url: "https://www.lrhkonsult.se/om-mig" },
        publisher: { "@type": "Organization", name: "LRH Konsult", url: "https://www.lrhkonsult.se" },
        mainEntityOfPage: postUrl,
        wordCount: post.content.split(/\s+/).length,
        inLanguage: "sv",
      },
      ...(faqItems.length >= 2
        ? [{
            "@type": "FAQPage",
            mainEntity: faqItems.slice(0, 5).map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }]
        : []),
    ],
  };

  return (
    <div className="min-h-screen">
      <PageHead
        title={`${post.title} | LRH Konsult`}
        description={post.excerpt}
        jsonLd={jsonLd}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-hero text-hero-foreground pt-20 pb-12 sm:pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
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
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold">
                  <Tag size={12} /> {post.tag}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-hero-muted">
                  <Calendar size={14} /> {post.date}
                </span>
                {updatedAt !== post.date && (
                  <span className="flex items-center gap-1.5 text-sm text-hero-muted">
                    Uppdaterad: {new Date(updatedAt).toLocaleDateString("sv-SE")}
                  </span>
                )}
                <span className="flex items-center gap-1.5 text-sm text-hero-muted">
                  <Clock size={14} /> {readingTime} min läsning
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] mb-5">
                {post.title}
              </h1>
              <p className="text-base sm:text-lg text-hero-muted max-w-2xl leading-relaxed">{post.excerpt}</p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-8 pt-6 border-t border-border/30">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <User size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">Lucas</p>
                  <p className="text-xs text-hero-muted">Webbutvecklare & SEO-konsult · LRH Konsult</p>
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
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* GEO: Key Takeaways / Snabba fakta */}
            {keyTakeaways.length >= 3 && (
              <div className="bg-card border border-primary/20 rounded-xl p-6 sm:p-8 mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb size={18} className="text-primary" />
                  <h2 className="text-sm font-bold uppercase tracking-widest text-primary !mt-0 !mb-0">Snabba fakta</h2>
                </div>
                <ul className="space-y-2.5">
                  {keyTakeaways.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/85 leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Table of contents */}
            {headings.length >= 3 && (
              <FadeIn>
                <nav className="bg-card/60 backdrop-blur rounded-xl border border-border p-6 mb-12" aria-label="Innehållsförteckning">
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4 !mt-0">Innehåll</h2>
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
              <article className="prose-article" style={{ maxWidth: "70ch" }}>
                {parsed.map((el, i) => {
                  switch (el.type) {
                    case "h2":
                      return (
                        <h2 key={i} id={el.id} className="text-xl sm:text-2xl font-bold font-serif mt-12 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent scroll-mt-24">
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
                        <li key={i} className="text-muted-foreground leading-[1.7] text-[15px] sm:text-base ml-5 list-disc mb-1.5">
                          {renderInline(el.text)}
                        </li>
                      );
                    case "p":
                    default:
                      return (
                        <p key={i} className="text-muted-foreground leading-[1.7] text-[15px] sm:text-base mb-5">
                          {renderInline(el.text)}
                        </p>
                      );
                  }
                })}
              </article>
            </AnimatedSection>

            {/* Mid-article CTA */}
            <FadeIn>
              <div className="my-12 p-6 sm:p-8 bg-card rounded-xl border border-primary/20 text-center">
                <p className="text-foreground font-serif font-bold text-lg mb-3">Vill du veta hur din egen sajt presterar?</p>
                <Link to="/gratis-seo-analys" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                  Boka en gratis SEO-analys här <ArrowRight size={16} />
                </Link>
              </div>
            </FadeIn>

            {/* Social sharing + service links */}
            <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-border">
              <SocialShare url={postUrl} title={post.title} />
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-muted-foreground self-center mr-1">Relaterade tjänster:</span>
                {serviceLinks.map((link) => (
                  <Link key={link.href} to={link.href} className="px-4 py-2 rounded-full border border-border text-sm text-foreground hover:border-primary hover:text-primary transition-colors">
                    {link.label} →
                  </Link>
                ))}
              </div>
            </div>

            {/* Author bio */}
            <FadeIn>
              <div className="mt-10 flex items-start gap-4 p-6 bg-card rounded-xl border border-border">
                <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                  <User size={24} className="text-primary" />
                </div>
                <div>
                  <p className="font-serif font-bold text-foreground">Lucas</p>
                  <p className="text-sm text-muted-foreground mb-2">Webbutvecklare & SEO-konsult</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Hjälper företag i Västmanland att växa digitalt med moderna webbplatser och datadriven sökmotoroptimering. Specialiserad på Next.js, React och teknisk SEO.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Bottom CTA */}
            <FadeIn>
              <div className="mt-14 p-8 sm:p-10 bg-card rounded-2xl border border-border text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
                <div className="relative">
                  <h3 className="text-2xl font-bold font-serif mb-3">Vill du se hur din sajt presterar?</h3>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Få en kostnadsfri SEO-analys med konkreta förbättringsförslag för din hemsida.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link to="/gratis-seo-analys" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
                      Få gratis SEO-analys <ArrowRight size={16} />
                    </Link>
                    <Link to="/kontakt" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-foreground font-medium hover:border-primary/30 hover:text-primary transition-colors">
                      Boka samtal <ArrowRight size={16} />
                    </Link>
                  </div>
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
                          <div className="aspect-video w-full overflow-hidden">
                            {r.image_url ? (
                              <img src={r.image_url} alt={r.image_alt || r.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
                                <span className="text-muted-foreground/30 font-serif text-4xl font-bold">{r.title.charAt(0)}</span>
                              </div>
                            )}
                          </div>
                          <div className="p-4 flex flex-col flex-1">
                            <span className="text-xs text-muted-foreground mb-2">{r.date}</span>
                            <h4 className="text-sm font-bold font-serif mb-1 group-hover:text-primary transition-colors leading-snug">{r.title}</h4>
                            <span className="inline-flex items-center gap-1 text-primary text-xs font-medium mt-auto pt-2 group-hover:gap-2 transition-all">
                              Läs mer om {r.tag.toLowerCase()} <ArrowRight size={12} />
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
