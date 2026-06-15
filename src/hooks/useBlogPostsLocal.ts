import { useQuery } from "@tanstack/react-query";
import type { DbBlogPost } from "@/hooks/useBlogPosts";
import blogPostsMeta from "@/data/blogPostsMeta.json";

export type { DbBlogPost };

/**
 * Lightweight post metadata for the blog LIST and related-article cards — every
 * field EXCEPT the heavy `content` (article bodies are ~84% of blogPosts.json and
 * live in useBlogPost instead). Keeps the blog-list chunk tiny (~80 KB vs ~530 KB),
 * so the Blogg tab loads fast. `readingMinutes` is precomputed by
 * scripts/generate-blog-meta.mjs (generated FIRST in build-smart.mjs).
 */
export type BlogPostMeta = Omit<DbBlogPost, "content" | "id" | "key_takeaways"> & {
  scheduled_date?: string;
  readingMinutes: number;
};

const meta = blogPostsMeta as unknown as BlogPostMeta[];

// Swedish local date (Europe/Stockholm, DST-safe) so a post scheduled for
// "today" isn't hidden client-side until 02:00 CEST / 01:00 CET.
const today = new Date().toLocaleDateString("sv-SE", { timeZone: "Europe/Stockholm" });
const publishedPosts = meta.filter(
  (p) => !p.scheduled_date || p.scheduled_date <= today
);

export const useBlogPosts = () => {
  return useQuery({
    queryKey: ["blog-posts-local-meta"],
    queryFn: () => publishedPosts,
    initialData: publishedPosts,
  });
};
