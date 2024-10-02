"use server";

import { AuthAdapter } from "@/lib/infrastructure/adapters/auth/auth.adapter";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

class SignoutActionController {
  static async execute() {
    const result = await AuthAdapter.Signout();
    if (result.error) {
      console.log(result.error.message);
      return;
    }

    revalidatePath("/", "layout");
    redirect("/");
  }
}

const SignoutAction = SignoutActionController.execute;
export default SignoutAction;
