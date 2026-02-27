import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHead from "@/components/PageHead";
import AnimatedSection from "@/components/AnimatedSection";
import { getPostBySlug } from "@/data/blogPosts";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import NotFound from "./NotFound";

const BloggArtikel = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen">
      <PageHead
        title={`${post.title} | LRH Konsult`}
        description={post.metaDescription}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.metaDescription,
            "datePublished": post.date,
            "author": { "@type": "Person", "name": "Lucas", "url": "https://lrhkonsult.se/om-mig" },
            "publisher": { "@type": "Organization", "name": "LRH Konsult", "url": "https://lrhkonsult.se" },
            "mainEntityOfPage": `https://lrhkonsult.se/blogg/${post.slug}`,
          }),
        }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative bg-hero text-hero-foreground pt-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
            <AnimatedSection>
              <Link
                to="/blogg"
                className="inline-flex items-center gap-2 text-sm text-hero-muted hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft size={16} /> Tillbaka till bloggen
              </Link>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  <Tag size={12} /> {post.tag}
                </span>
                <span className="flex items-center gap-1 text-sm text-hero-muted">
                  <Calendar size={14} /> {post.date}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                {post.title}
              </h1>
            </AnimatedSection>
          </div>
        </section>

        {/* Article content */}
        <section className="py-14 sm:py-20 bg-section-alt">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <AnimatedSection>
              <article className="space-y-6">
                {post.content.map((block, i) => {
                  if (block.startsWith("## ")) {
                    return (
                      <h2 key={i} className="text-2xl sm:text-3xl font-bold font-serif mt-10 mb-4 text-foreground">
                        {block.replace("## ", "")}
                      </h2>
                    );
                  }
                  return (
                    <p key={i} className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                      {block}
                    </p>
                  );
                })}
              </article>
            </AnimatedSection>

            {/* CTA */}
            <div className="mt-16 p-8 bg-card rounded-xl border border-border text-center">
              <h3 className="text-xl font-bold font-serif mb-3">Behöver du hjälp?</h3>
              <p className="text-muted-foreground mb-6">
                Kontakta mig för en kostnadsfri konsultation om ditt nästa webbprojekt.
              </p>
              <Link
                to="/kontakt"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Boka samtal
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
