import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <p>Hello world</p>
      <Link href={"/login"}>
        <Button>Log In</Button>
      </Link>
      <Link href={"/register"}>
        <Button>Register</Button>
      </Link>
    </div>
  );
}
