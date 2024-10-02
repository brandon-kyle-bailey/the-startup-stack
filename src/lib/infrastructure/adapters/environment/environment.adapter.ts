export const container = {
  debug: process.env.DEBUG === "true" ? true : false,
  auth: {
    emailRedirectTo: `${process.env.HOST!}/dashboard`,
    updatePasswordRedirectTo: `${process.env.HOST!}/update-password`,
  },
  web: {
    host: process.env.HOST!,
  },
  db: {
    host: process.env.DATABASE_URL,
  },
  supabase: {
    api_url: process.env.SUPABASE_API_URL!,
    gql_url: process.env.SUPABASE_GQL_URL!,
    storage_url: process.env.SUPABASE_STORAGE_URL!,
    studio_url: process.env.SUPABASE_STUDIO_URL!,
    inbucket_url: process.env.SUPABASE_INBUCKET_URL!,
    jwt_secret: process.env.SUPABASE_JWT_SECRET!,
    anon_key: process.env.SUPABASE_ANON_KEY!,
    service_role_key: process.env.SUPABASE_SERVICE_ROLE_KEY!,
    s3_access_key: process.env.SUPABASE_S3_ACCESS_KEY!,
    s3_secret_key: process.env.SUPABASE_S3_SECRET_KEY!,
    s3_region: process.env.SUPABASE_S3_REGION!,
  },
  stripe: {
    secret_key: process.env.STRIPE_SECRET_KEY!,
    webhook_secret: process.env.STRIPE_WEBHOOK_SECRET!,
    public_key: process.env.STRIPE_PUBLIC_KEY!,
  },
};
