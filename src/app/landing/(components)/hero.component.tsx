import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="flex w-full align-middle items-center justify-between"
    >
      <div className="w-1/2 flex flex-col gap-4">
        <h1 className="text-4xl font-semibold">
          The Startup Stack Starter Kit
        </h1>
        <p className="text-lg">
          The all-in-one solution for launching your startup!
        </p>
        <div className="flex gap-4">
          <Button variant={"default"}>Get started for free</Button>
          <Button variant={"secondary"}>Read the documentation</Button>
        </div>
      </div>
      <div className="w-1/2">
        <Image
          src={"/dashboard_light.png"}
          alt="Product showcase image"
          width="1920"
          height="1080"
          className="rounded-lg border"
        />
      </div>
    </section>
  );
}
