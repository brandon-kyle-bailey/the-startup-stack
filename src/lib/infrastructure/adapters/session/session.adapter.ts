import { SupabaseAdapter } from "@/lib/infrastructure/adapters/supabase/supabase.adapter";
import { type NextRequest } from "next/server";

export class SessionAdapter {
  static async ServerSession(request: NextRequest) {
    return await SupabaseAdapter.ServerSessionClient(request);
  }
}
