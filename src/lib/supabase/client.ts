import { createBrowserClient } from "@supabase/ssr";
import { environmentContainer } from "@/lib/config/config";

export function createClient() {
  return createBrowserClient(
    environmentContainer.supabase.url!,
    environmentContainer.supabase.anon_key!,
  );
}
