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

const Blogg = () => {
  const { data: posts = [], isLoading } = useBlogPosts();

  // First post is featured (large), rest in 2-col grid
  const featured = posts[0];
  const grid = posts.slice(1);

  return (
    <div className="min-h-screen">
      <PageHead
        title="Blogg – Insikter om webbutveckling & SEO | LRH Konsult"
        description="Läs artiklar om webbutveckling, SEO-optimering och digitala strategier från LRH Konsult i Västmanland. Tips för att skapa hemsida och ranka högre på Google."
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
                              decoding="async"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                          ) : (
                            <div className="w-full h-full min-h-[240px] bg-gradient-to-br from-[hsl(140_18%_18%)] via-[hsl(140_16%_22%)] to-[hsl(140_12%_16%)] flex items-center justify-center">
                              <span className="text-muted-foreground/20 font-serif text-6xl font-bold">{featured.title.charAt(0)}</span>
                            </div>
                          )}
                        </div>
                        <div className="p-6 sm:p-8 flex flex-col justify-center">
                          <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold">{featured.tag}</span>
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
                          <div className="aspect-[16/10] w-full overflow-hidden">
                            {post.image_url ? (
                              <img
                                src={post.image_url}
                                alt={post.image_alt || post.title}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                              />
                            ) : (
                              <div className="w-full h-full bg-gradient-to-br from-[hsl(140_18%_18%)] via-[hsl(140_16%_22%)] to-[hsl(140_12%_16%)] flex items-center justify-center">
                                <span className="text-muted-foreground/20 font-serif text-4xl font-bold">{post.title.charAt(0)}</span>
                              </div>
                            )}
                          </div>
                          <div className="p-5 sm:p-6 flex flex-col flex-1">
                            <div className="flex flex-wrap items-center gap-2 mb-3">
                              <span className="px-2.5 py-0.5 rounded-full bg-primary/15 text-primary text-[11px] font-semibold">{post.tag}</span>
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
                  <Link to="/webbutveckling" className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors">
                    Webbutveckling
                  </Link>
                  <Link to="/seo-optimering" className="px-5 py-2.5 rounded-full border border-border text-foreground font-medium text-sm hover:border-primary hover:text-primary transition-colors">
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
