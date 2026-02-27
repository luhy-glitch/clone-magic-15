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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-28">
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
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
                Insikter om <span className="text-primary">webb & SEO</span>
              </h1>
              <p className="mt-6 text-lg text-hero-muted max-w-2xl">
                Artiklar, tips och guider om webbutveckling, sökmotoroptimering och digitala strategier för företag i Västmanland och hela Sverige.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Articles */}
        <section className="py-14 sm:py-20 md:py-28 bg-section-alt">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            {isLoading ? (
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-card rounded-xl border border-border overflow-hidden animate-pulse">
                    <div className="aspect-video bg-muted" />
                    <div className="p-6 sm:p-8 space-y-3">
                      <div className="h-4 bg-muted rounded w-1/4" />
                      <div className="h-6 bg-muted rounded w-3/4" />
                      <div className="h-4 bg-muted rounded w-full" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-8">
                {posts.map((post, i) => (
                  <FadeIn key={post.slug} delay={i * 0.08}>
                    <Link to={`/blogg/${post.slug}`} className="block">
                      <article className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl hover:shadow-primary/5 hover:border-primary/30 transition-all duration-300 group">
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
                            <div className="w-full h-full bg-gradient-to-br from-[hsl(140_18%_18%)] via-[hsl(140_16%_22%)] to-[hsl(140_12%_16%)] flex items-center justify-center">
                              <span className="text-muted-foreground/30 font-serif text-4xl font-bold">{post.title.charAt(0)}</span>
                            </div>
                          )}
                        </div>
                        <div className="p-6 sm:p-8">
                          <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">{post.tag}</span>
                            <span className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Calendar size={14} /> {post.date}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Clock size={14} /> {estimateReadingTime(post.content)} min
                            </span>
                          </div>
                          <h2 className="text-xl sm:text-2xl font-bold font-serif mb-3 group-hover:text-primary transition-colors leading-snug">{post.title}</h2>
                          <p className="text-muted-foreground mb-5 line-clamp-2">{post.excerpt}</p>
                          <span className="inline-flex items-center gap-1.5 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                            Läs artikel <ArrowRight size={14} />
                          </span>
                        </div>
                      </article>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            )}

            {/* Internal links to services */}
            <FadeIn delay={0.3}>
              <div className="mt-16 p-8 bg-card rounded-xl border border-border text-center">
                <h3 className="text-xl font-bold font-serif mb-3">Utforska våra tjänster</h3>
                <p className="text-muted-foreground mb-6">Behöver du hjälp med webbutveckling eller SEO? Vi hjälper företag i hela Västmanland.</p>
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

            <FadeIn delay={0.4}>
              <p className="mt-10 text-center text-muted-foreground text-sm">
                Fler artiklar kommer snart. Följ med för de senaste insikterna inom webbutveckling och SEO!
              </p>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blogg;
