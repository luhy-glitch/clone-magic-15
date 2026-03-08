-- Create rate limits table for persistent rate limiting
CREATE TABLE IF NOT EXISTS public.admin_rate_limits (
  ip text PRIMARY KEY,
  attempt_count integer NOT NULL DEFAULT 1,
  reset_at timestamptz NOT NULL
);

ALTER TABLE public.admin_rate_limits ENABLE ROW LEVEL SECURITY;

-- Add restrictive deny-all policies for admin-only tables
CREATE POLICY "Deny all access to admin_sessions"
  ON public.admin_sessions
  FOR ALL
  TO anon, authenticated
  USING (false);

CREATE POLICY "Deny all access to admin_audit_log"
  ON public.admin_audit_log
  FOR ALL
  TO anon, authenticated
  USING (false);

CREATE POLICY "Deny all access to admin_rate_limits"
  ON public.admin_rate_limits
  FOR ALL
  TO anon, authenticated
  USING (false);

-- contact_submissions: insert allowed for anonymous (contact form), rest denied
CREATE POLICY "Allow anonymous insert for contact form"
  ON public.contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Deny read access for contact_submissions"
  ON public.contact_submissions
  FOR SELECT
  TO anon, authenticated
  USING (false);