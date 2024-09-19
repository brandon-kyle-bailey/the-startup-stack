"use server";

import { otp } from "@/app/(product)/(auth)/otp/actions";
import { createClient } from "@/lib/supabase/server";

export async function signup(data: { email: string; password: string }) {
  const supabase = createClient();

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    return error.message;
  }

  return await otp({ email: data.email });
}
