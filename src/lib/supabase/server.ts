import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { environmentContainer } from "@/lib/config/config";

export function createClient() {
  const cookieStore = cookies();

  return createServerClient(
    environmentContainer.supabase.url!,
    environmentContainer.supabase.anon_key!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  );
}
