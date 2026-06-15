import { useQuery } from "@tanstack/react-query";
import type { DbBlogPost } from "@/hooks/useBlogPosts";
import blogPostsData from "@/data/blogPosts.json";

/**
 * Full article bodies (~450 KB of `content`) live here. ONLY the article route
 * (BloggArtikel) imports this hook, so the blog LIST chunk never pulls in every
 * post's text. The list uses the lightweight meta in useBlogPostsLocal instead.
 *
 * Content is imported statically (synchronous) so the prerendered article HTML
 * hydrates without an async gap — no hydration mismatch / content flash.
 */
type RawPost = Omit<DbBlogPost, "content"> & { content: string | string[]; scheduled_date?: string };
type LocalBlogPost = DbBlogPost & { scheduled_date?: string };

const posts: LocalBlogPost[] = (blogPostsData as RawPost[]).map((p) => ({
  ...p,
  content: Array.isArray(p.content) ? p.content.join("\n\n") : p.content,
}));

export const useBlogPost = (slug: string | undefined) => {
  return useQuery({
    queryKey: ["blog-post-local", slug],
    queryFn: () => {
      if (!slug) return null;
      return posts.find((p) => p.slug === slug) ?? null;
    },
    initialData: slug ? (posts.find((p) => p.slug === slug) ?? null) : null,
    enabled: !!slug,
  });
};
