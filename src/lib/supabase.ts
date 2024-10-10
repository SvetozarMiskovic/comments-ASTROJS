import { createClient } from '@supabase/supabase-js';

// const SUPABASE_URL = ;
// const SUPABASE_ANON_KEY = ;
// console.log(SUPABASE_ANON_KEY, 'url', SUPABASE_URL);

export const supabase = createClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.SUPABASE_ANON_KEY
);
