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
  SignupFormSchema,
  SignupFormSchemaDefaults,
} from "@/lib/common/interface/forms/sign-up-form.schema";
import { useFormSchema } from "@/lib/common/utils/create-form-instance.util";
import SignupAction from "@/lib/interface/controllers/auth/sign-up.action.controller";
import { useSearchParams } from "next/navigation";
import { z } from "zod";

export default function Page() {
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirectUrl");
  const priceId = searchParams.get("priceId");
  const invitationId = searchParams.get("invitationId");
  const { toast } = useToast();
  const form = useFormSchema(SignupFormSchema, SignupFormSchemaDefaults);
  async function onSubmit(data: z.infer<typeof SignupFormSchema>) {
    const error = await SignupAction({
      redirectUrl: redirectUrl || "",
      priceId: priceId || "",
      invitationId: invitationId || "",
      name: data.name,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
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
          <FormLabel htmlFor="name">Name:</FormLabel>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="text" {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
          <FormLabel htmlFor="confirmPassword">Confirm Password:</FormLabel>
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="password" {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Register</Button>
        </form>
      </Form>
    </>
  );
}
