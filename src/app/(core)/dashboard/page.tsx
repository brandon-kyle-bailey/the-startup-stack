"use client";

import { Button } from "@/components/ui/button";
import SignoutAction from "@/lib/interface/controllers/auth/sign-out.action.controller";

export default function Page() {
  return (
    <div>
      <h1>Dashboard</h1>
      <form>
        <Button formAction={SignoutAction}>Sign out</Button>
      </form>
    </div>
  );
}
