"use client";
import { otpVerify } from "@/app/(product)/(auth)/otp/actions";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { Hexagon } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  token: z.string().min(6, {
    message: "Your one-time passcode must be 6 characters.",
  }),
});

export default function OtpVerifyPage() {
  const searchParams = useSearchParams();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      token: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    await otpVerify({ ...data, email: searchParams.get("email")! });
  }
  return (
    <main className="flex flex-col lg:flex-row h-screen">
      <div className="h-full p-4 w-full lg:w-1/2 bg-background flex flex-col gap-8 justify-center text-primary items-center">
        <h1 className="text-4xl">Welcome back</h1>
        <p className="text-muted-foreground">
          Enter your One Time Passcode to sign in to your account
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="token"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
        <Link className="text-muted-foreground underline" href={"/register"}>
          Don&apos;t have an account? Sign up
        </Link>
        <p className="text-sm text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <Link className="underline" href={"/terms-of-service"}>
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link className="underline" href={"/privacy-policy"}>
            Privacy Policy
          </Link>
        </p>
      </div>
      <div className="h-full p-8 w-full lg:w-1/2 bg-primary flex flex-col justify-between text-background text-2xl">
        <div className="flex items-center gap-2">
          <Hexagon />
          <p>The Startup Stack</p>
        </div>
        <blockquote>
          <p>
            &ldquo;This library has saved me countless hours of work and helped
            me deliver stunning designs to my clients faster than ever
            before.&rdquo;
          </p>
          <footer className="text-muted-foreground">You (probably)</footer>
        </blockquote>
      </div>
    </main>
  );
}
