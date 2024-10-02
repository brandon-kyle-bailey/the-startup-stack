"use server";

import { AuthAdapter } from "@/lib/infrastructure/adapters/auth/auth.adapter";
import { SigninRequestDto } from "@/lib/interface/dtos/auth/signin.request.dto";
import { SignupRequestDto } from "@/lib/interface/dtos/auth/signup.request.dto";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const input: SigninRequestDto = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  const result = await AuthAdapter.SigninWithPassword(input);

  if (result.error) {
    console.log(result.error.message);
    return;
  }

  revalidatePath("/dashboard", "layout");
  redirect("/dashboard");
}

export async function signupAction(formData: FormData) {
  const input: SignupRequestDto = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };
  const result = await AuthAdapter.Signup(input);

  if (result.error) {
    console.log(result.error.message);
    return;
  }

  revalidatePath("/dashboard", "layout");
  redirect("/dashboard");
}
