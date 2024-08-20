import { Hexagon } from "lucide-react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <main className="flex min-h-screen">
      <div className="p-4 w-1/2 bg-background flex flex-col gap-8 justify-center text-primary items-center">
        <h1 className="text-4xl">Reset Your Password</h1>
        <p className="text-muted-foreground">Enter your email address</p>
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
