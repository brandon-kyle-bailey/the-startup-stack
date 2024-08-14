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

import { signup } from "@/app/register/actions";
import { Github } from "lucide-react";

const FormSchema = z.object({
  email: z.string().email({
    message: "Email address is required",
  }),
  password: z.string().min(1, {
    message: "Password is required.",
  }),
});

export default function RegisterFormComponent() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    await signup({ email: data.email, password: data.password });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-1/2 flex flex-col gap-4"
      >
        <FormLabel>Email</FormLabel>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="email" placeholder="name@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormLabel>Password</FormLabel>
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
        <Button type="submit">Sign up with Email</Button>
        <p className="text-center text-muted-foreground">or</p>
        <Button variant={"outline"}>
          Sign up with <Github className="m-2" />
        </Button>
      </form>
    </Form>
  );
}
