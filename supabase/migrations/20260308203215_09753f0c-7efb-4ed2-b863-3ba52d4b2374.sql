
CREATE OR REPLACE FUNCTION public.regenerate_sitemap()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $$
BEGIN
  PERFORM extensions.http_post(
    url := 'https://egantzcnrlrkjccstmpw.supabase.co/functions/v1/generate-sitemap',
    headers := '{"Content-Type": "application/json"}'::jsonb,
    body := '{}'::jsonb
  );
  RETURN COALESCE(NEW, OLD);
END;
$$;

CREATE TRIGGER on_blog_post_change_regenerate_sitemap
AFTER INSERT OR UPDATE OR DELETE ON public.blog_posts
FOR EACH ROW
EXECUTE FUNCTION public.regenerate_sitemap();
