import { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import AnimatedSection, { FadeIn } from "@/components/AnimatedSection";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useBlogPosts } from "@/hooks/useBlogPosts";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

function estimateReadingTime(content: string): number {
  return Math.max(1, Math.ceil(content.split(/\s+/).length / 200));
}

const CATEGORIES = ["Alla", "SEO", "Webbutveckling", "Prestanda", "Digital Strategi"] as const;

/** Map post tags to our four canonical categories */
function normalizeTag(tag: string): string {
  const t = tag.trim().toLowerCase();
  if (t.includes("seo")) return "SEO";
  if (t.includes("webbutveckling") || t.includes("wordpress")) return "Webbutveckling";
  if (t.includes("prestanda")) return "Prestanda";
  if (t.includes("design") || t.includes("webbdesign") || t.includes("strategi")) return "Digital Strategi";
  return "Digital Strategi";
}

const Blogg = () => {
  const { data: posts = [], isLoading } = useBlogPosts();
  const [activeCategory, setActiveCategory] = useState<string>("Alla");

  const filteredPosts = useMemo(() => {
    if (activeCategory === "Alla") return posts;
    return posts.filter((p) => normalizeTag(p.tag) === activeCategory);
  }, [posts, activeCategory]);

  const featured = filteredPosts[0];
  const grid = filteredPosts.slice(1);

  return (
    <div className="min-h-screen">
      <PageHead
        title="Blogg – Webb & SEO-insikter | LRH Konsult"
        description="Artiklar om webbutveckling, SEO och digitala strategier från LRH Konsult. Tips för att bygga hemsida och ranka högre på Google i Västmanland."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "LRH Konsult Blogg",
          "url": "https://lrhkonsult.se/blogg",
          "description": "Artiklar om webbutveckling, SEO och digitala strategier.",
          "publisher": { "@type": "Organization", "name": "LRH Konsult", "url": "https://lrhkonsult.se" }
        }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-hero text-hero-foreground pt-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
            <div className="mb-6">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/" className="text-hero-muted hover:text-primary">Hem</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-hero-foreground">Blogg</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <AnimatedSection>
              <span className="text-primary font-medium text-sm tracking-widest uppercase">Blogg</span>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
                Insikter om <span className="text-primary">webb & SEO</span>
              </h1>
              <p className="mt-5 text-base sm:text-lg text-hero-muted max-w-xl">
                Artiklar och guider om webbutveckling, sökmotoroptimering och digitala strategier.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Articles */}
        <section className="py-14 sm:py-20 bg-section-alt">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Category filter */}
            <div className="flex gap-2 overflow-x-auto pb-4 mb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-hide">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                const count = cat === "Alla" ? posts.length : posts.filter((p) => normalizeTag(p.tag) === cat).length;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/20"
                        : "bg-card border border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                    }`}
                  >
                    {cat}
                    <span className={`ml-1.5 text-xs ${isActive ? "text-primary-foreground/70" : "text-muted-foreground/60"}`}>
                      ({count})
                    </span>
                  </button>
                );
              })}
            </div>

            {isLoading ? (
              <div className="grid gap-6 sm:grid-cols-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`bg-card rounded-xl border border-border overflow-hidden animate-pulse ${i === 1 ? "sm:col-span-2" : ""}`}>
                    <div className="aspect-video bg-muted" />
                    <div className="p-6 space-y-3">
                      <div className="h-4 bg-muted rounded w-1/4" />
                      <div className="h-6 bg-muted rounded w-3/4" />
                      <div className="h-4 bg-muted rounded w-full" />
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredPosts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">Inga artiklar hittades i kategorin "{activeCategory}".</p>
                <button
                  onClick={() => setActiveCategory("Alla")}
                  className="mt-4 text-primary hover:underline text-sm font-medium"
                >
                  Visa alla artiklar
                </button>
              </div>
            ) : (
              <>
                {/* Featured post */}
                {featured && (
                  <FadeIn>
                    <Link to={`/blogg/${featured.slug}`} className="block mb-8">
                      <article className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300 group sm:grid sm:grid-cols-2">
                        <div className="aspect-video sm:aspect-auto sm:h-full w-full overflow-hidden">
                          {featured.image_url ? (
                            <img
                              src={featured.image_url}
                              alt={featured.image_alt || featured.title}
                              loading="eager"
                              fetchPriority="high"
                              decoding="async"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                          ) : (
                            <div className="w-full h-full min-h-[240px] bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
                              <span className="text-muted-foreground/30 font-serif text-6xl font-bold">{featured.title.charAt(0)}</span>
                            </div>
                          )}
                        </div>
                        <div className="p-6 sm:p-8 flex flex-col justify-center">
                          <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold">{normalizeTag(featured.tag)}</span>
                            <span className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Calendar size={13} /> {featured.date}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Clock size={13} /> {estimateReadingTime(featured.content)} min
                            </span>
                          </div>
                          <h2 className="text-xl sm:text-2xl font-bold font-serif mb-3 group-hover:text-primary transition-colors leading-snug">{featured.title}</h2>
                          <p className="text-muted-foreground text-sm mb-5 line-clamp-3">{featured.excerpt}</p>
                          <span className="inline-flex items-center gap-1.5 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                            Läs artikel <ArrowRight size={14} />
                          </span>
                        </div>
                      </article>
                    </Link>
                  </FadeIn>
                )}

                {/* Grid */}
                <div className="grid gap-6 sm:grid-cols-2">
                  {grid.map((post, i) => (
                    <FadeIn key={post.slug} delay={i * 0.08}>
                      <Link to={`/blogg/${post.slug}`} className="block h-full">
                        <article className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300 group h-full flex flex-col">
                          <div className="aspect-video w-full overflow-hidden">
                            {post.image_url ? (
                              <img
                                src={post.image_url}
                                alt={post.image_alt || post.title}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
                                <span className="text-muted-foreground/30 font-serif text-4xl font-bold">{post.title.charAt(0)}</span>
                              </div>
                            )}
                          </div>
                          <div className="p-5 sm:p-6 flex flex-col flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-3">
                              <span className="px-2.5 py-0.5 rounded-full bg-primary/15 text-primary text-[11px] font-semibold">{normalizeTag(post.tag)}</span>
                              <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                                <Calendar size={12} /> {post.date}
                              </span>
                              <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                                <Clock size={12} /> {estimateReadingTime(post.content)} min
                              </span>
                            </div>
                            <h2 className="text-base sm:text-lg font-bold font-serif mb-2 group-hover:text-primary transition-colors leading-snug">{post.title}</h2>
                            <p className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-2">{post.excerpt}</p>
                            <span className="inline-flex items-center gap-1.5 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                              Läs artikel <ArrowRight size={14} />
                            </span>
                          </div>
                        </article>
                      </Link>
                    </FadeIn>
                  ))}
                </div>
              </>
            )}

            {/* Service links */}
            <FadeIn delay={0.3}>
              <div className="mt-16 p-8 bg-card rounded-2xl border border-border text-center">
                <h3 className="text-xl font-bold font-serif mb-3">Utforska våra tjänster</h3>
                <p className="text-muted-foreground text-sm mb-6">Behöver du hjälp med webbutveckling eller SEO? Vi hjälper företag i hela Västmanland.</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link to="/tjanster/webbutveckling" className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors">
                    Webbutveckling
                  </Link>
                  <Link to="/tjanster/seo-optimering" className="px-5 py-2.5 rounded-full border border-border text-foreground font-medium text-sm hover:border-primary hover:text-primary transition-colors">
                    SEO-optimering
                  </Link>
                  <Link to="/kontakt" className="px-5 py-2.5 rounded-full border border-border text-foreground font-medium text-sm hover:border-primary hover:text-primary transition-colors">
                    Kontakt
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blogg;
