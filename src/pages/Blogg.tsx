import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import AnimatedSection, { FadeIn } from "@/components/AnimatedSection";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useBlogPosts } from "@/hooks/useBlogPosts";

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
              <p className="text-center text-muted-foreground">Laddar artiklar...</p>
            ) : (
              <div className="space-y-6">
                {posts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.1}>
                    <Link to={`/blogg/${post.slug}`} className="block">
                      <article className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all group">
                        <div className="aspect-video w-full overflow-hidden">
                          {post.image_url ? (
                            <img
                              src={post.image_url}
                              alt={post.image_alt || post.title}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          ) : (
                            <div className="w-full h-full bg-gradient-to-br from-[hsl(140_18%_18%)] via-[hsl(140_16%_22%)] to-[hsl(140_12%_16%)]" />
                          )}
                        </div>
                        <div className="p-6 sm:p-8">
                          <div className="flex items-center gap-3 mb-4">
                            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">{post.tag}</span>
                            <span className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Calendar size={14} /> {post.date}
                            </span>
                          </div>
                          <h2 className="text-xl font-bold font-serif mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
                          <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                          <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                            Läs mer <ArrowRight size={14} />
                          </span>
                        </div>
                      </article>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            )}

            <FadeIn delay={0.4}>
              <p className="mt-12 text-center text-muted-foreground">
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
