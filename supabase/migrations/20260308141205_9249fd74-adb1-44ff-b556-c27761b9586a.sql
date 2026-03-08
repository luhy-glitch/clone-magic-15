-- Drop the restrictive INSERT policy and replace with a permissive one
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