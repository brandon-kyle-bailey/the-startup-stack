import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="flex flex-col items-center gap-12">
      <div className="w-full text-5xl flex flex-col gap-6 items-center">
        <Badge>Limited time offer</Badge>
        <h1 className="font-semibold">The Startup Stack Starter Kit</h1>
        <p className="text-2xl text-muted-foreground">
          The all-in-one solution for launching your startup!
        </p>
        <div className="flex max-sm:flex-col max-sm:w-full gap-4">
          <Link href={"/register"}>
            <Button variant={"default"}>Get started for free</Button>
          </Link>
          <Link href={"/docs"}>
            <Button variant={"secondary"}>Read the Documentation</Button>
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="max-sm:w-full w-3/4">
          <Image
            src={"/dashboard_light.png"}
            alt="Product showcase image"
            width="1920"
            height="1080"
            className="border rounded-lg shadow"
          />
        </div>
      </div>
    </section>
  );
}
