"use client";

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
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Check } from "lucide-react";
import { useState } from "react";

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);
  return (
    <section id="pricing" className="flex flex-col items-center gap-6">
      <h1 className="text-2xl">Choose the right pricing plan for you</h1>
      <p className="text-muted-foreground">
        Here are some of the features you&apos;re likely to see in the app.
      </p>
      <span className="flex items-center gap-2">
        <Switch id="annual" onCheckedChange={() => setIsAnnual(!isAnnual)} />
        <Label htmlFor="annual">{isAnnual ? "Annually" : "Monthly"}</Label>
        <Badge>Save up to 17% on Annual pricing!</Badge>
      </span>
      <div className="w-3/4 flex justify-center gap-8">
        <Card className="shadow flex flex-col gap-4 justify-between items-center w-full">
          <CardHeader className="w-full flex flex-col gap-4">
            <CardTitle>Free</CardTitle>
            <CardDescription className="flex flex-col gap-2">
              <span className="flex flex-row gap-2">
                <span className="text-2xl">${isAnnual ? "0" : "0"}</span>
                <span>/ {isAnnual ? "Annually" : "Monthly"}</span>
              </span>
              <span>For the Hobbyist</span>
              <Button variant="outline">Get Started</Button>
            </CardDescription>
          </CardHeader>
          <CardContent className="w-full flex justify-start">
            <ul className="flex flex-col gap-4 text-muted-foreground">
              <li className="flex flex-row items-center justify-center align-middle gap-1">
                <Check />
                <p>Some awesome feature here</p>
              </li>
              <li className="flex flex-row items-center justify-center align-middle gap-1">
                <Check />
                <p>Some awesome feature here</p>
              </li>
              <li className="flex flex-row items-center justify-center align-middle gap-1">
                <Check />
                <p>Some awesome feature here</p>
              </li>
              <li className="flex flex-row items-center justify-center align-middle gap-1">
                <Check />
                <p>Some awesome feature here</p>
              </li>
              <li className="flex flex-row items-center justify-center align-middle gap-1">
                <Check />
                <p>Some awesome feature here</p>
              </li>
              <li className="flex flex-row items-center justify-center align-middle gap-1">
                <Check />
                <p>Some awesome feature here</p>
              </li>
            </ul>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
        <Card className="bg-primary text-secondary shadow flex flex-col gap-4 justify-between items-center w-full">
          <CardHeader className="w-full flex flex-col gap-4">
            <div className="flex gap-2">
              <CardTitle>Pro</CardTitle>
              <Badge className="text-primary bg-secondary hover:bg-secondary hover:text-primary">
                Our most popular plan
              </Badge>
            </div>
            <CardDescription className="flex flex-col gap-2">
              <span className="flex flex-row gap-2">
                <span className="text-2xl">
                  ${isAnnual ? "199.99" : "19.99"}
                </span>
                <span>/ {isAnnual ? "Annually" : "Monthly"}</span>
              </span>
              <span>For the Hobbyist</span>
              <Button variant="outline">Get Started</Button>
            </CardDescription>
          </CardHeader>
          <CardContent className="w-full flex justify-start">
            <ul className="flex flex-col gap-4">
              <li className="flex flex-row items-center justify-center align-middle gap-1">
                <Check />
                <p>Some awesome feature here</p>
              </li>
              <li className="flex flex-row items-center justify-center align-middle gap-1">
                <Check />
                <p>Some awesome feature here</p>
              </li>
              <li className="flex flex-row items-center justify-center align-middle gap-1">
                <Check />
                <p>Some awesome feature here</p>
              </li>
              <li className="flex flex-row items-center justify-center align-middle gap-1">
                <Check />
                <p>Some awesome feature here</p>
              </li>
              <li className="flex flex-row items-center justify-center align-middle gap-1">
                <Check />
                <p>Some awesome feature here</p>
              </li>
              <li className="flex flex-row items-center justify-center align-middle gap-1">
                <Check />
                <p>Some awesome feature here</p>
              </li>
            </ul>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
        <Card className="shadow flex flex-col gap-4 justify-between items-center w-full">
          <CardHeader className="w-full flex flex-col gap-4">
            <CardTitle>Enterprise</CardTitle>
            <CardDescription className="flex flex-col gap-2">
              <span className="flex flex-row gap-2">
                <span className="text-2xl">
                  ${isAnnual ? "999.99" : "99.99"}
                </span>
                <span>/ {isAnnual ? "Annually" : "Monthly"}</span>
              </span>
              <span>For the Hobbyist</span>
              <Button variant="outline">Get Started</Button>
            </CardDescription>
          </CardHeader>
          <CardContent className="w-full flex justify-start">
            <ul className="flex flex-col gap-4 text-muted-foreground">
              <li className="flex flex-row items-center justify-center align-middle gap-1">
                <Check />
                <p>Some awesome feature here</p>
              </li>
              <li className="flex flex-row items-center justify-center align-middle gap-1">
                <Check />
                <p>Some awesome feature here</p>
              </li>
              <li className="flex flex-row items-center justify-center align-middle gap-1">
                <Check />
                <p>Some awesome feature here</p>
              </li>
              <li className="flex flex-row items-center justify-center align-middle gap-1">
                <Check />
                <p>Some awesome feature here</p>
              </li>
              <li className="flex flex-row items-center justify-center align-middle gap-1">
                <Check />
                <p>Some awesome feature here</p>
              </li>
              <li className="flex flex-row items-center justify-center align-middle gap-1">
                <Check />
                <p>Some awesome feature here</p>
              </li>
            </ul>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </section>
  );
}
