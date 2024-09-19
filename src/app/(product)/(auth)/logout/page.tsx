"use client";

import { Button } from "@/components/ui/button";
import { logout } from "./actions";

export default function LogoutPage() {
  return <Button onClick={() => logout()}>Log out</Button>;
}
