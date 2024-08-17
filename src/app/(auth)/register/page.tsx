import RegisterFormComponent from "@/app/(auth)/register/(components)/register-form.component";
import { Hexagon } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen">
      <div className="p-4 w-1/2 bg-background flex flex-col gap-8 justify-center text-primary items-center">
        <h1 className="text-4xl">Create an account</h1>
        <p className="text-muted-foreground">
          Enter your email below to create your account
        </p>
        <RegisterFormComponent />
        <Link className="text-muted-foreground underline" href={"/login"}>
          Already have an account? Sign in
        </Link>
        <p className="text-sm text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <Link className="underline" href={"/privacy-policy"}>
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link className="underline" href={"/privacy-policy"}>
            Privacy Policy
          </Link>
        </p>
      </div>
      <div className="p-8 w-1/2 bg-primary flex flex-col justify-between text-background text-2xl">
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
