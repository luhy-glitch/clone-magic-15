
-- Add image_alt column
ALTER TABLE public.blog_posts ADD COLUMN image_alt text NOT NULL DEFAULT '';

-- Create storage bucket for blog images
INSERT INTO storage.buckets (id, name, public) VALUES ('blog-images', 'blog-images', true);

-- Allow anyone to read blog images
CREATE POLICY "Public read blog images"
ON storage.objects FOR SELECT
USING (bucket_id = 'blog-images');

-- Allow uploads via service role (edge function handles auth)
-- No INSERT/UPDATE/DELETE policies needed for anon since we upload via service role in edge function
