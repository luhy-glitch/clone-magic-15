-- Create contact rate limits table
CREATE TABLE IF NOT EXISTS public.contact_rate_limits (
  ip text PRIMARY KEY,
  attempt_count integer NOT NULL DEFAULT 1,
  reset_at timestamptz NOT NULL
);

ALTER TABLE public.contact_rate_limits ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Deny all access to contact_rate_limits"
  ON public.contact_rate_limits
  FOR ALL
  TO anon, authenticated
  USING (false);

-- Fix overly permissive INSERT policy on contact_submissions
DROP POLICY IF EXISTS "Allow anonymous insert for contact form" ON public.contact_submissions;

CREATE POLICY "Allow anonymous insert for contact form"
  ON public.contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    name IS NOT NULL AND
    email IS NOT NULL AND
    message IS NOT NULL AND
    length(name) <= 100 AND
    length(email) <= 255 AND
    length(message) <= 5000 AND
    (subject IS NULL OR length(subject) <= 200)
  );