import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavigationMenuItem } from "@radix-ui/react-navigation-menu";
import { Hexagon } from "lucide-react";
import Link from "next/link";

export default function NavigationSection() {
  return (
    <section id="navigation" className="flex justify-between">
      <NavigationMenu className="">
        <NavigationMenuList className="flex flex-row">
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <div className="flex flex-row gap-4 justify-center items-center">
                  <Hexagon />
                  <h1 className="text-lg">The Startup Stack</h1>
                </div>
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
        </NavigationMenuList>
      </NavigationMenu>
      <div>
        <Link href={"/login"}>
          <Button variant={"ghost"}>Sign in</Button>
        </Link>
        <Link href={"/register"}>
          <Button variant={"default"}>Register</Button>
        </Link>
      </div>
    </section>
  );
}
