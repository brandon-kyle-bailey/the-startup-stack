import { container } from "@/lib/infrastructure/adapters/environment/environment.adapter";
import { createBrowserClient } from "@supabase/ssr";

export function createClient() {
  return createBrowserClient(
    container.supabase.api_url!,
    container.supabase.anon_key!,
  );
}
