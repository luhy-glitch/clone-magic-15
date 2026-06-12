import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface DbBlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  tag: string;
  excerpt: string;
  content: string;
  image_url: string;
  image_alt: string;
  updated_at: string;
  key_takeaways: string;
  /** Optional concise SEO title (≤60 chars). Falls back to `${title} | LRH Konsult`. */
  metaTitle?: string;
  /** Optional SEO meta description (≤160 chars). Falls back to `excerpt`. */
  metaDescription?: string;
}

export const useBlogPosts = () => {
  return useQuery({
    queryKey: ["blog-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .order("date", { ascending: false });
      if (error) throw error;
      return (data as DbBlogPost[]) || [];
    },
  });
};

export const useBlogPost = (slug: string | undefined) => {
  return useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      if (!slug) return null;
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .maybeSingle();
      if (error) throw error;
      return data as DbBlogPost | null;
    },
    enabled: !!slug,
  });
};
