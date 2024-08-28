"use client";
import { Hexagon } from "lucide-react";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen">
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
      <div className="p-4 w-1/2 bg-background flex flex-col gap-8 justify-center text-primary items-center">
        <h1 className="text-4xl">Hmmm, something&apos;s missing.</h1>
        <p className="text-muted-foreground">
          We couldn&apos;t find what you were looking for.
        </p>
      </div>
    </main>
  );
}
