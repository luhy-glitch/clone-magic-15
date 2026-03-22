import { useQuery } from "@tanstack/react-query";
import type { DbBlogPost } from "@/hooks/useBlogPosts";
import blogPostsData from "@/data/blogPosts.json";

export type { DbBlogPost };

const posts = blogPostsData as DbBlogPost[];

export const useBlogPosts = () => {
  return useQuery({
    queryKey: ["blog-posts-local"],
    queryFn: () => posts,
    initialData: posts,
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
