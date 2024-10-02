"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SignupAction from "@/lib/interface/controllers/auth/sign-up.action.controller";
import SigninWithPasswordAction from "@/lib/interface/controllers/auth/signin-with-password.action.controller";

export default function Page() {
  return (
    <form>
      <Label htmlFor="email">Email:</Label>
      <Input id="email" name="email" type="email" required />
      <Label htmlFor="password">Password:</Label>
      <Input id="password" name="password" type="password" required />
      <Button formAction={SigninWithPasswordAction}>Log in</Button>
      <Button formAction={SignupAction}>Sign up</Button>
    </form>
  );
}
