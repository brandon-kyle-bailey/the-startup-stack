"use client";

import { handleStripeCheckout } from "@/app/actions";
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
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { useState } from "react";

const pricingPlans = [
  {
    id: 0,
    popular: false,
    externalProductId: "price_1Pork5BPkmIjU4TJidywH5kc",
    externalProductIdAnnual: "price_1Pork5BPkmIjU4TJidywH5kc",
    name: "Free",
    description: "For the Hobbyist",
    monthPrice: "0",
    annualPrice: "0",
    fetaures: [
      {
        id: 0,
        description: "some awesome feature",
      },
      {
        id: 1,
        description: "some awesome feature",
      },
      {
        id: 2,
        description: "some awesome feature",
      },
      {
        id: 3,
        description: "some awesome feature",
      },
      {
        id: 4,
        description: "some awesome feature",
      },
      {
        id: 5,
        description: "some awesome feature",
      },
    ],
    footer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
  },
  {
    id: 1,
    popular: true,
    externalProductId: "price_1PorP2BPkmIjU4TJLNlnbwGw",
    externalProductIdAnnual: "price_1PorQNBPkmIjU4TJ8pkwQj3M",
    name: "Pro",
    description: "For the Hobbyist",
    monthPrice: "19.99",
    annualPrice: "199.99",
    fetaures: [
      {
        id: 0,
        description: "some awesome feature",
      },
      {
        id: 1,
        description: "some awesome feature",
      },
      {
        id: 2,
        description: "some awesome feature",
      },
      {
        id: 3,
        description: "some awesome feature",
      },
      {
        id: 4,
        description: "some awesome feature",
      },
      {
        id: 5,
        description: "some awesome feature",
      },
    ],
    footer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
  },
  {
    id: 2,
    popular: false,
    name: "Enterprise",
    externalProductId: "price_1PorPdBPkmIjU4TJ0st7UIYz",
    externalProductIdAnnual: "price_1PorR1BPkmIjU4TJH9p9rysU",
    description: "For the Hobbyist",
    monthPrice: "99.99",
    annualPrice: "999.99",
    fetaures: [
      {
        id: 0,
        description: "some awesome feature",
      },
      {
        id: 1,
        description: "some awesome feature",
      },
      {
        id: 2,
        description: "some awesome feature",
      },
      {
        id: 3,
        description: "some awesome feature",
      },
      {
        id: 4,
        description: "some awesome feature",
      },
      {
        id: 5,
        description: "some awesome feature",
      },
    ],
    footer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
  },
];

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);
  return (
    <section
      id="pricing"
      className="flex flex-col items-center gap-6 text-muted-foreground"
    >
      <h1 className="text-2xl text-primary">
        Choose the right pricing plan for you
      </h1>
      <p>Pricing and Subscription models suitable for all professionals</p>
      <span className="flex items-center gap-2">
        <Switch id="annual" onCheckedChange={() => setIsAnnual(!isAnnual)} />
        <Label htmlFor="annual">{isAnnual ? "Annually" : "Monthly"}</Label>
        <Badge>Save up to 17% on Annual pricing!</Badge>
      </span>
      <div className="lg:w-3/4 flex flex-col lg:flex-row justify-center gap-8">
        {pricingPlans.map((plan) => {
          return (
            <Card
              key={plan.id}
              className={cn(
                "shadow flex flex-col gap-4 justify-between items-center w-full text-muted-foreground",
                plan.popular
                  ? "bg-gradient-to-br from-background to-secondary from-50%"
                  : "",
              )}
            >
              <CardHeader className="w-full flex flex-col gap-4">
                <div className="flex gap-2 text-primary">
                  <CardTitle>{plan.name}</CardTitle>
                  <Badge className={cn(!plan.popular ? "hidden" : "")}>
                    Our most popular plan
                  </Badge>
                </div>
                <CardDescription className="flex flex-col gap-2">
                  <span className="flex flex-row gap-2">
                    <span className="text-2xl">
                      ${isAnnual ? plan.annualPrice : plan.monthPrice}
                    </span>
                    <span>/ {isAnnual ? "Annually" : "Monthly"}</span>
                  </span>
                  <span>{plan.description}</span>
                  <Button
                    variant="default"
                    onClick={() =>
                      handleStripeCheckout(
                        isAnnual
                          ? plan.externalProductId
                          : plan.externalProductIdAnnual,
                      )
                    }
                  >
                    Get Started
                  </Button>
                </CardDescription>
              </CardHeader>
              <CardContent className="w-full flex justify-start">
                <ul className="flex flex-col gap-4">
                  {plan.fetaures.map((feature) => {
                    return (
                      <li
                        key={feature.id}
                        className="flex flex-row items-center justify-center align-middle gap-1"
                      >
                        <Check />
                        <p>{feature.description}</p>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
              <CardFooter>{plan.footer}</CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
