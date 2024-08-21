"use client";
import { redirectAfterDelay } from "@/app/(product)/payment/gateway/stripe/success/actions";
import { Hexagon } from "lucide-react";
import { useEffect } from "react";

export default function PaymentGatewayStripeCancelPage() {
  useEffect(() => {
    async function redirect() {
      await redirectAfterDelay({ delay: 5000, url: "/" });
    }
    redirect();
  }, []);
  return (
    <main className="flex min-h-screen">
      <div className="p-4 w-1/2 bg-background flex flex-col gap-4 justify-center text-primary items-center">
        <h1 className="text-4xl">Payment Cancelled</h1>
        <p className="text-muted-foreground w-1/2">
          We&apos;re sorry things didn&apos;t work out. Feel free to close this
          window. Your payment has been cancelled and will not be processed.
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
