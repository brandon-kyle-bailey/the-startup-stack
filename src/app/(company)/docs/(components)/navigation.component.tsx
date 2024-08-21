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

export default function DocsNavigationComponent() {
  return (
    <div className="flex justify-between">
      <div className="hidden max-sm:flex">
        <Sheet>
          <SheetTrigger asChild>
            <GiHamburgerMenu />
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col gap-2">
            <SheetHeader>
              <SheetTitle className="flex flex-row gap-2 justify-center items-center font-semibold">
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
            <SheetFooter></SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
      <div className="max-sm:hidden flex flex-row gap-2 justify-center items-center font-semibold">
        <Link href="/" className="flex gap-2">
          <Hexagon />
          <p>The Startup Stack</p>
        </Link>
        <NavigationMenu className="text-muted-foreground">
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
      <div className="max-sm:hidden flex gap-2">
        <Search links={[]} />
        <ModeToggle />
        <Link href={"/login"}>
          <Button variant={"ghost"}>Sign in</Button>
        </Link>
        <Link href={"/register"}>
          <Button variant={"default"}>Register</Button>
        </Link>
      </div>
    </div>
  );
}
