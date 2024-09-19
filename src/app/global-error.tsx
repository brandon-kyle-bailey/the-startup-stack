"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { Hexagon } from "lucide-react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export default function ErrorPage() {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex min-h-screen">
            <div className="p-8 w-1/2 bg-primary flex flex-col justify-between text-background text-2xl">
              <div className="flex items-center gap-2">
                <Hexagon />
                <p>The Startup Stack</p>
              </div>
              <blockquote>
                <p>
                  &ldquo;This library has saved me countless hours of work and
                  helped me deliver stunning designs to my clients faster than
                  ever before.&rdquo;
                </p>
                <footer className="text-muted-foreground">
                  You (probably)
                </footer>
              </blockquote>
            </div>
            <div className="p-4 w-1/2 bg-background flex flex-col gap-8 justify-center text-primary items-center">
              <h1 className="text-4xl">Opps!</h1>
              <p className="text-muted-foreground">
                It&apos;s not you, it&apos;s us
              </p>
            </div>
          </main>
          <Toaster />
          <Sonner />
        </ThemeProvider>
      </body>
    </html>
  );
}
