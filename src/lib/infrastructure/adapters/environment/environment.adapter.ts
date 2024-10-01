export const container = {
  debug: process.env.DEBUG === "true" ? true : false,
  web: {
    host: process.env.HOST!,
  },
  db: {
    host: process.env.DATABASE_URL,
  },
  supabase: {
    api_url: process.env.SUPABASE_API_URL!,
    gql_url: process.env.SUPABASE_GQL_URL!,
    s3_storage_url: process.env.SUPABASE_S3_STORAGE_URL!,
    s3_studio_url: process.env.SUPABASE_S3_STUDIO_URL!,
    s3_inbucket_url: process.env.SUPABASE_S3_INBUCKET_URL!,
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
