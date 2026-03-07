CREATE TABLE public.admin_sessions (
  token TEXT PRIMARY KEY,
  expires_at TIMESTAMPTZ NOT NULL
);

ALTER TABLE public.admin_sessions ENABLE ROW LEVEL SECURITY;