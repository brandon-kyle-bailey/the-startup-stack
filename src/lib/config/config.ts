export const environmentContainer = {
  web: {
    host: process.env.HOST,
  },
  db: {
    host: process.env.DATABASE_URL,
  },
  supabase: {
    url: process.env.SUPABASE_URL,
    anon_key: process.env.SUPABASE_ANON_KEY,
  },
  stripe: {
    public_key: process.env.STRIPE_PUBLIC_KEY,
    secret_key: process.env.STRIPE_SECRET_KEY,
    webhook_secret: process.env.STRIPE_WEBHOOK_SECRET,
  },
};
