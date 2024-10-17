/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly SUPABASE_URL: string;
  readonly SUPABASE_ANON_KEY: string;
  readonly PUBLIC_NODE_ENV: string;
  readonly PUBLIC_COMMENTS_HOST_PROD: string;
  readonly PUBLIC_COMMENTS_HOST_DEV: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
