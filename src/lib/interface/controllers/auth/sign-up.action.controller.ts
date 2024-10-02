"use server";

import { AuthAdapter } from "@/lib/infrastructure/adapters/auth/auth.adapter";
import { SignupRequestDto } from "@/lib/interface/dtos/auth/signup.request.dto";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

class SignupActionController {
  static async execute(formdata: FormData) {
    const input: SignupRequestDto = {
      email: formdata.get("email") as string,
      password: formdata.get("password") as string,
    };
    const result = await AuthAdapter.Signup(input);

    if (result.error) {
      console.log(result.error.message);
      return;
    }

    revalidatePath("/dashboard", "layout");
    redirect("/dashboard");
  }
}

const SignupAction = SignupActionController.execute;
export default SignupAction;
