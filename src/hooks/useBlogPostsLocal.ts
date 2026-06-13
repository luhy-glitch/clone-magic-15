import { useQuery } from "@tanstack/react-query";
import type { DbBlogPost } from "@/hooks/useBlogPosts";
import blogPostsData from "@/data/blogPosts.json";

export type { DbBlogPost };

/**
 * Some posts store `content` as an array of markdown lines instead of a single
 * string. BloggArtikel calls `content.split(...)`, which throws on arrays and
 * makes the page fall back to NotFound (soft-404, no H1). Normalise array
 * content to a newline-joined markdown string so every post renders correctly.
 */
type RawPost = Omit<DbBlogPost, "content"> & { content: string | string[]; scheduled_date?: string };
type LocalBlogPost = DbBlogPost & { scheduled_date?: string };

const posts: LocalBlogPost[] = (blogPostsData as RawPost[]).map((p) => ({
  ...p,
  content: Array.isArray(p.content) ? p.content.join("\n\n") : p.content,
}));

const today = new Date().toISOString().slice(0, 10);
const publishedPosts = posts.filter(
  (p) => !p.scheduled_date || p.scheduled_date <= today
);

export const useBlogPosts = () => {
  return useQuery({
    queryKey: ["blog-posts-local"],
    queryFn: () => publishedPosts,
    initialData: publishedPosts,
  });
};

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
