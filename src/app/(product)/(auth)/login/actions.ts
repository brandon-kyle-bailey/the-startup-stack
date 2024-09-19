"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function otpRedirect() {
  revalidatePath("/otp", "layout");
  redirect("/otp");
}

export async function login(data: { email: string; password: string }) {
  const supabase = createClient();
  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return error.message;
  }

  revalidatePath("/dashboard", "layout");
  redirect("/dashboard");
}
