"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import { otp } from "@/app/(auth)/otp/actions";

export async function signup(data: { email: string; password: string }) {
  const supabase = createClient();

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    return error.message;
  }

  return await otp({ email: data.email });
}
