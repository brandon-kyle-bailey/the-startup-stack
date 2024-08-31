"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { login, otpRedirect } from "@/app/(auth)/login/actions";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  email: z.string().email({
    message: "Email address is required",
  }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
});

export default function LoginFormComponent() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const error = await login({
      email: data.email,
      password: data.password,
    });
    if (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: `There was a problem with your request. ${error}`,
      });
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full lg:w-1/2 flex flex-col gap-4"
        >
          <FormLabel>Email</FormLabel>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="name@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-between items-center">
            <FormLabel>Password</FormLabel>
            <Link className="underline" href={"/forgot-password"}>
              Forgot your password?
            </Link>
          </div>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Sign in with Email</Button>
        </form>
      </Form>
      <p className="text-center text-muted-foreground">or</p>
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <Button variant={"outline"} onClick={() => otpRedirect()}>
          Sign in with a OTP
        </Button>
        <Button variant={"outline"}>Sign in with GitHub</Button>
      </div>
    </>
  );
}
