"use client";
import { CircleUser, Hexagon, Menu, Search } from "lucide-react";
import Link from "next/link";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { logout } from "@/app/(product)/(auth)/logout/actions";

export default function DashboardHeaderComponent({
  links,
}: {
  links: { title: string; href: string }[];
}) {
  const pathname = usePathname();
  return (
    <header className="bg-muted/40 flex h-16 align-middle items-center gap-4 border-b px-4 lg:h-[60px]">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-8 w-8" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-4 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-4 text-lg font-semibold"
            >
              <Hexagon className="h-8 w-8" />
              <SheetTitle>The Startup Stack</SheetTitle>
              <SheetDescription className="sr-only">
                Dashboard navigation for startup stack
              </SheetDescription>
            </Link>
            {links.map((link) => {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    pathname.toLowerCase() === link.href.toLowerCase()
                      ? "mx-4 flex items-center gap-4 rounded-xl px-4 py-4 bg-muted text-primary hover:text-foreground"
                      : "mx-4 flex items-center gap-4 rounded-xl px-4 py-4 text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.title}
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto">
            <Card>
              <CardHeader>
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </SheetContent>
      </Sheet>
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <CircleUser className="h-6 w-6" />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href="/dashboard/settings">Settings</Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => logout()}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ModeToggle />
    </header>
  );
}
