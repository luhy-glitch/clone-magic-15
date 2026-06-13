import { useQuery } from "@tanstack/react-query";
import type { DbBlogPost } from "@/hooks/useBlogPosts";
import blogPostsData from "@/data/blogPosts.json";

export type { DbBlogPost };

const posts = blogPostsData as DbBlogPost[];

const today = new Date().toISOString().slice(0, 10);
const publishedPosts = posts.filter(
  (p) => !(p as any).scheduled_date || (p as any).scheduled_date <= today
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
