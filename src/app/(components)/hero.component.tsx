import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="flex flex-col items-center text-center gap-4">
      <div className="flex flex-col items-center gap-4">
        <Badge>Limited time offer</Badge>
        <h1 className="text-5xl font-semibold">
          The Startup Stack Starter Kit
        </h1>
        <p className="text-xl text-muted-foreground">
          The all-in-one solution for launching your startup!
        </p>
        <div className="flex max-sm:flex-col gap-4">
          <Link href={"/register"}>
            <Button className="rounded-lg border shadow-lg" variant={"default"}>
              Get started for free
            </Button>
          </Link>
          <Link href={"/docs"}>
            <Button
              className="rounded-lg border shadow-lg"
              variant={"secondary"}
            >
              Read the Documentation
            </Button>
          </Link>
        </div>
      </div>
      <div className="lg:py-8 lg:px-32">
        <div className="">
          <Image
            src={"/dashboard_light.png"}
            alt="Product showcase image"
            width="1920"
            height="1080"
            className="rounded-lg border shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
