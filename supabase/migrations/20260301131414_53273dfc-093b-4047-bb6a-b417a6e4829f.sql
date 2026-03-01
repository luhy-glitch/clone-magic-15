
-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS pg_cron WITH SCHEMA pg_catalog;
CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;

-- Create public storage bucket for sitemap
INSERT INTO storage.buckets (id, name, public) VALUES ('sitemap', 'sitemap', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public read access to sitemap bucket
CREATE POLICY "Sitemap is publicly accessible"
ON storage.objects FOR SELECT
USING (bucket_id = 'sitemap');

-- Allow service role to upload (edge function uses service role)
CREATE POLICY "Service role can upload sitemap"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'sitemap');

CREATE POLICY "Service role can update sitemap"
ON storage.objects FOR UPDATE
USING (bucket_id = 'sitemap');
