import { ModeToggle } from "@/components/mode-toggle";
import Search from "@/components/search";
import { Button } from "@/components/ui/button";
import { Hexagon } from "lucide-react";
import Link from "next/link";

export default function DashboardTopNavigationComponent({
  links,
}: {
  links: { title: string; href: string }[];
}) {
  return (
    <section id="navigation" className="w-full flex justify-between">
      <div className="max-sm:hidden flex flex-row gap-2 justify-center items-center font-semibold">
        <Link href="/" className="flex gap-2">
          <Hexagon />
          <p>The Startup Stack</p>
        </Link>
      </div>
      <div className="max-sm:hidden flex gap-2">
        <Search links={links} />
        <ModeToggle />
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
