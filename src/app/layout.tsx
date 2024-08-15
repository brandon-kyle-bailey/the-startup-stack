import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "The Startup Stack - A brilliant starter kit",
  description:
    "Kickstart your SaaS app development with the Startup Stack Next.js SaaS Starter Pack Template. Built with Next.js, Prisma, Stripe, Supabase, and Shadcn UI for fast, scalable, and secure SaaS solutions.",
  openGraph: {
    description:
      "Kickstart your SaaS app development with the Startup Stack Next.js SaaS Starter Pack Template. Built with Next.js, Prisma, Stripe, Supabase, and Shadcn UI for fast, scalable, and secure SaaS solutions.",
    images: [""],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Startup Stack",
    description:
      "Kickstart your SaaS app development with the Startup Stack Next.js SaaS Starter Pack Template. Built with Next.js, Prisma, Stripe, Supabase, and Shadcn UI for fast, scalable, and secure SaaS solutions.",
    siteId: "",
    creator: "@brandonkpbailey",
    creatorId: "",
    images: [""],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
          {children}
          <Toaster />
          <Sonner />
        </ThemeProvider>
      </body>
    </html>
  );
}
