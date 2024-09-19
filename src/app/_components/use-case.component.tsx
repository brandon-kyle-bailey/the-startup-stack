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
    <section id="use-case" className="flex flex-col items-center gap-8">
      <h1 className="text-5xl font-semibold">Use Case</h1>
      <p className="text-xl text-muted-foreground">
        Let&apos;s explain how this works
      </p>
      <div className="flex flex-col lg:gap-64">
        <div id="use-case-1" className="flex flex-col lg:flex-row gap-8">
          <Card className="lg:w-1/2 border-none shadow-none flex flex-col gap-8">
            <CardHeader>
              <Badge className="">Some cool badge</Badge>
              <CardTitle>Use case number one</CardTitle>
              <CardDescription>
                short description of the use case
              </CardDescription>
            </CardHeader>
            <CardContent>
              Some more in-depth content about the use case
            </CardContent>
            <CardFooter>
              <div className="flex max-sm:flex-col gap-4">
                <Link href={"/register"}>
                  <Button
                    className="rounded-lg border shadow-lg"
                    variant={"default"}
                  >
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
            </CardFooter>
          </Card>
          <div className="lg:w-1/2">
            <Image
              src={"/dashboard_light.png"}
              alt="Product showcase image"
              width={1920}
              height={1080}
              className="rounded-lg border shadow-lg"
            />
          </div>
        </div>
        <div
          id="use-case-2"
          className="flex max-sm:flex-col-reverse flex-col lg:flex-row gap-8"
        >
          <div className="lg:w-1/2">
            <Image
              src={"/dashboard_light.png"}
              alt="Product showcase image"
              width={1920}
              height={1080}
              className="rounded-lg border shadow-lg"
            />
          </div>
          <Card className="lg:w-1/2 border-none shadow-none flex flex-col gap-8">
            <CardHeader>
              <Badge className="">Some cool badge</Badge>
              <CardTitle>Use case number two</CardTitle>
              <CardDescription>
                short description of the use case
              </CardDescription>
            </CardHeader>
            <CardContent>
              Some more in-depth content about the use case
            </CardContent>
            <CardFooter>
              <div className="flex max-sm:flex-col gap-4">
                <Link href={"/register"}>
                  <Button
                    className="rounded-lg border shadow-lg"
                    variant={"default"}
                  >
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
            </CardFooter>
          </Card>
        </div>
        <div id="use-case-3" className="flex flex-col lg:flex-row gap-8">
          <Card className="lg:w-1/2 border-none shadow-none flex flex-col gap-8">
            <CardHeader>
              <Badge className="">Some cool badge</Badge>
              <CardTitle>Use case number three</CardTitle>
              <CardDescription>
                short description of the use case
              </CardDescription>
            </CardHeader>
            <CardContent>
              Some more in-depth content about the use case
            </CardContent>
            <CardFooter>
              <div className="flex max-sm:flex-col gap-4">
                <Link href={"/register"}>
                  <Button
                    className="rounded-lg border shadow-lg"
                    variant={"default"}
                  >
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
            </CardFooter>
          </Card>
          <div className="lg:w-1/2">
            <Image
              src={"/dashboard_light.png"}
              alt="Product showcase image"
              width={1920}
              height={1080}
              className="rounded-lg border shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
