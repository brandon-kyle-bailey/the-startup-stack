"use client";
import { redirectAfterDelay } from "@/app/payment/gateway/stripe/success/actions";
import { Hexagon } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function PaymentGatewayStripeSuccessPage() {
  useEffect(() => {
    async function redirect() {
      await redirectAfterDelay({ delay: 5000, url: "/" });
    }
    redirect();
  }, []);

  return (
    <main className="flex min-h-screen">
      <div className="p-4 w-1/2 bg-background flex flex-col gap-4 justify-center text-primary items-center">
        <h1 className="text-4xl">Congratulations!</h1>
        <p className="text-muted-foreground">
          Let&apos;s get you started. You will be redirected in a moment. If
          you&apos;re not redirected,{" "}
          <Link className="text-muted-foreground underline" href={"/"}>
            click here
          </Link>
        </p>
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
