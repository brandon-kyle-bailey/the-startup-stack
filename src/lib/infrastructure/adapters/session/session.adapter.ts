import { SupabaseAdapter } from "@/lib/infrastructure/adapters/supabase/supabase.adapter";
import { type NextRequest } from "next/server";

export class SessionAdapter {
  static async ServerSessionMiddleware(request: NextRequest) {
    return await SupabaseAdapter.ServerSessionClient(request);
  }
  static ClientSession() {
    return SupabaseAdapter.BrowserClient();
  }

  static ServerSession() {
    return SupabaseAdapter.ServerClient();
  }
}
