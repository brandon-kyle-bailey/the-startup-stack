import { SigninRequestDto } from "@/lib/interface/dtos/auth/signin.request.dto";
import { z } from "zod";
export const SigninFormSchema = z.object({
  email: z.string().email({
    message: "Email address is required",
  }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
});

export const SigninFormSchemaDefaults: SigninRequestDto = {
  email: "",
  password: "",
};
