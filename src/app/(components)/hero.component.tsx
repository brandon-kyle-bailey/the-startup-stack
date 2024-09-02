import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="hero" className="flex flex-col items-center text-center gap-4">
      <div className="">
        <Badge>Limited time offer</Badge>
        <h1 className="">The Startup Stack Starter Kit</h1>
        <p className="">The all-in-one solution for launching your startup!</p>
        <div className="flex max-sm:flex-col gap-4">
          <Link href={"/register"}>
            <Button variant={"default"}>Get started for free</Button>
          </Link>
          <Link href={"/docs"}>
            <Button variant={"secondary"}>Read the Documentation</Button>
          </Link>
        </div>
      </div>
      <div className="">
        <div className="">
          <Image
            src={"/dashboard_light.png"}
            alt="Product showcase image"
            width="1920"
            height="1080"
            className=""
          />
        </div>
      </div>
    </section>
  );
}
