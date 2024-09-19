"use server";

import { redirect } from "next/navigation";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function otp(data: { email: string }) {
  const supabase = createClient();
  const { data: result, error } = await supabase.auth.signInWithOtp({
    email: data.email,
    options: {
      emailRedirectTo: `${process.env.HOST}/dashboard`,
    },
  });

  if (error) {
    console.log(error);
    redirect("/error");
  }
  revalidatePath("/otp/verify", "layout");
  redirect(`/otp/verify?email=${data.email}`);
}

export async function otpVerify(data: { email: string; token: string }) {
  const supabase = createClient();
  const { data: result, error } = await supabase.auth.verifyOtp({
    email: data.email,
    token: data.token,
    type: "email",
  });
  if (error) {
    console.log(error);
    redirect("/error");
  }
  revalidatePath("/dashboard", "layout");
  redirect("/dashboard");
}
