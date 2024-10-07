import { SignupRequestDto } from "@/lib/interface/dtos/auth/signup.request.dto";
import { z } from "zod";
export const SignupFormSchema = z
  .object({
    name: z.string({
      message: "Name is required",
    }),
    email: z.string().email({
      message: "Email address is required",
    }),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match.",
  });

export const SignupFormSchemaDefaults: SignupRequestDto = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
