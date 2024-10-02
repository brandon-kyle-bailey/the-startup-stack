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
import { useToast } from "@/hooks/use-toast";
import {
  SigninFormSchema,
  SigninFormSchemaDefaults,
} from "@/lib/common/interface/forms/sign-in-form.schema";
import { useFormSchema } from "@/lib/common/utils/create-form-instance.util";
import SigninWithPasswordAction from "@/lib/interface/controllers/auth/signin-with-password.action.controller";
import { z } from "zod";

export default function Page() {
  const { toast } = useToast();
  const form = useFormSchema(SigninFormSchema, SigninFormSchemaDefaults);
  async function onSubmit(data: z.infer<typeof SigninFormSchema>) {
    const error = await SigninWithPasswordAction({
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
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormLabel htmlFor="email">Email:</FormLabel>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="email" {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormLabel htmlFor="password">Password:</FormLabel>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="password" {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Log in</Button>
        </form>
      </Form>
    </>
  );
}
