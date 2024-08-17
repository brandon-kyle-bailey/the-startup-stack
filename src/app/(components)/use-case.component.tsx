import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function UsecaseSection() {
  return (
    <section
      id="use-case"
      className="flex flex-col items-center gap-6 text-muted-foreground"
    >
      <h1 className="text-2xl text-primary">Use Case</h1>
      <p>Let&apos;s explain how this works</p>
      <div className="w-full lg:w-3/4 flex flex-col gap-8 lg:gap-64">
        <div id="use-case-1" className="w-full flex flex-col lg:flex-row gap-8">
          <Card className="w-full lg:w-1/2 flex flex-col justify-around border-none shadow-none">
            <CardHeader>
              <Badge className="lg:w-1/4">Some cool badge</Badge>
              <CardTitle>Use case number one</CardTitle>
              <CardDescription>
                short description of the use case
              </CardDescription>
            </CardHeader>
            <CardContent>
              Some more in-depth content about the use case
            </CardContent>
            <CardFooter>
              <div className="flex flex-col lg:flex-row gap-4">
                <Link href={"/register"}>
                  <Button variant={"default"}>Get started for free</Button>
                </Link>
                <Link href={"/docs"}>
                  <Button variant={"secondary"}>Read the Documentation</Button>
                </Link>
              </div>
            </CardFooter>
          </Card>
          <div className="w-full lg:w-1/2">
            <Image
              src={"/dashboard_light.png"}
              alt="Product showcase image"
              width={1920}
              height={1080}
              className="border rounded-lg shadow"
            />
          </div>
        </div>
        <div id="use-case-2" className="w-full flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2">
            <Image
              src={"/dashboard_light.png"}
              alt="Product showcase image"
              width={1920}
              height={1080}
              className="border rounded-lg shadow"
            />
          </div>
          <Card className="w-full lg:w-1/2 flex flex-col justify-around border-none shadow-none">
            <CardHeader>
              <Badge className="lg:w-1/4">Some cool badge</Badge>
              <CardTitle>Use case number two</CardTitle>
              <CardDescription>
                short description of the use case
              </CardDescription>
            </CardHeader>
            <CardContent>
              Some more in-depth content about the use case
            </CardContent>
            <CardFooter>
              <div className="flex flex-col lg:flex-row gap-4">
                <Link href={"/register"}>
                  <Button variant={"default"}>Get started for free</Button>
                </Link>
                <Link href={"/docs"}>
                  <Button variant={"secondary"}>Read the Documentation</Button>
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div id="use-case-3" className="w-full flex flex-col lg:flex-row gap-8">
          <Card className="w-full lg:w-1/2 flex flex-col justify-around border-none shadow-none">
            <CardHeader>
              <Badge className="lg:w-1/4">Some cool badge</Badge>
              <CardTitle>Use case number three</CardTitle>
              <CardDescription>
                short description of the use case
              </CardDescription>
            </CardHeader>
            <CardContent>
              Some more in-depth content about the use case
            </CardContent>
            <CardFooter>
              <div className="flex flex-col lg:flex-row gap-4">
                <Link href={"/register"}>
                  <Button variant={"default"}>Get started for free</Button>
                </Link>
                <Link href={"/docs"}>
                  <Button variant={"secondary"}>Read the Documentation</Button>
                </Link>
              </div>
            </CardFooter>
          </Card>
          <div className="w-full lg:w-1/2">
            <Image
              src={"/dashboard_light.png"}
              alt="Product showcase image"
              width={1920}
              height={1080}
              className="border rounded-lg shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
