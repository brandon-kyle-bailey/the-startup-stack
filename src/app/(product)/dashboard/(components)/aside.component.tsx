"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Bell, Hexagon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardAsideComponent({
  links,
}: {
  links: { title: string; href: string }[];
}) {
  const pathname = usePathname();
  return (
    <aside className="bg-muted/40 hidden border-r md:block">
      <div className="flex h-full max-h-screen flex-col gap-4">
        <div className="flex h-16 items-center border-b px-4 lg:h-[60px] lg:px-8">
          <Link href="/dashboard" className="flex items-center font-semibold">
            <Hexagon className="h-6 w-6" />
            <span className="">The Startup Stack</span>
          </Link>
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-4 text-sm font-medium">
            {links.map((link) => {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    pathname.toLowerCase() === link.href.toLowerCase()
                      ? "flex items-center gap-4 rounded-lg px-4 py-2 text-primary bg-muted transition-all hover:text-primary"
                      : "flex items-center gap-4 rounded-lg px-4 py-2 text-muted-foreground transition-all hover:text-primary",
                  )}
                >
                  {link.title}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="mt-auto p-4 hidden">
          <Card>
            <CardHeader className="p-4 pt-0">
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4 pt-0 md:pt-0">
              <Button size="sm" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </aside>
  );
}
