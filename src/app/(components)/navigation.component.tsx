import { getUser } from "@/app/actions";
import { ModeToggle } from "@/components/mode-toggle";
import Search from "@/components/search";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import { Hexagon } from "lucide-react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

export default async function NavigationSection({
  links,
}: {
  links: { title: string; href: string }[];
}) {
  const user = await getUser();
  return (
    <section id="navigation" className="flex justify-between">
      <div className="hidden max-sm:flex">
        <Sheet>
          <SheetTrigger asChild>
            <GiHamburgerMenu />
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col">
            <SheetHeader>
              <SheetTitle className="flex items-center">
                <Link href="/">
                  <Hexagon />
                  <p>The Startup Stack</p>
                </Link>
              </SheetTitle>
            </SheetHeader>
            <SheetClose asChild>
              <Link href="/#use-case">
                <Button variant="outline" className="w-full">
                  Use Case
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/#features">
                <Button variant="outline" className="w-full">
                  Features
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/#testimonials">
                <Button variant="outline" className="w-full">
                  Testimonials
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/#faq">
                <Button variant="outline" className="w-full">
                  FAQ
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/blog">
                <Button variant="outline" className="w-full">
                  Blog
                </Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/docs">
                <Button variant="outline" className="w-full">
                  Documentation
                </Button>
              </Link>
            </SheetClose>
            {user ? (
              <>
                <SheetClose asChild>
                  <Link href="/dashboard">
                    <Button variant="default" className="w-full">
                      Dashboard
                    </Button>
                  </Link>
                </SheetClose>
              </>
            ) : (
              <>
                <SheetClose asChild>
                  <Link href="/login">
                    <Button variant="ghost" className="w-full">
                      Sign in
                    </Button>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/register">
                    <Button variant="default" className="w-full">
                      Register
                    </Button>
                  </Link>
                </SheetClose>
              </>
            )}
            <SheetFooter></SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      <div className="max-sm:hidden flex items-center">
        <Link href="/" className="flex">
          <Hexagon />
          <p>The Startup Stack</p>
        </Link>
        <NavigationMenu className="">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/#use-case" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Use Case
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/#features" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Features
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/#testimonials" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Testimonials
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/#faq" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  FAQ
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/#pricing" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Pricing
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/docs" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Documentation
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="max-sm:hidden flex items-center gap-4">
        <Search links={links} />
        <ModeToggle />
        {user ? (
          <Link href={"/dashboard"}>
            <Button variant={"default"}>Dashboard</Button>
          </Link>
        ) : (
          <>
            <Link href={"/login"}>
              <Button variant={"ghost"}>Sign in</Button>
            </Link>
            <Link href={"/register"}>
              <Button variant={"default"}>Register</Button>
            </Link>
          </>
        )}
      </div>
    </section>
  );
}
