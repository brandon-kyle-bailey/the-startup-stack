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
    <section id="pricing" className="flex flex-col items-center gap-8">
      <h1 className="">Choose the right pricing plan for you</h1>
      <p>Pricing and Subscription models suitable for all professionals</p>
      <span className="flex gap-4 items-center">
        <Switch id="annual" onCheckedChange={() => setIsAnnual(!isAnnual)} />
        <Label htmlFor="annual">{isAnnual ? "Annually" : "Monthly"}</Label>
        <Badge>Save up to 17% on Annual pricing!</Badge>
      </span>
      <div className="flex gap-8 justify-center">
        {pricingPlans.map((plan) => {
          return (
            <Card
              key={plan.id}
              className={cn(
                "",
                plan.popular ? "bg-primary text-background" : "",
              )}
            >
              <CardHeader className="">
                <div className="flex justify-between">
                  <CardTitle>{plan.name}</CardTitle>
                  <Badge
                    className={cn(
                      plan.popular ? "bg-background text-primary" : "hidden",
                    )}
                  >
                    Our most popular plan
                  </Badge>
                </div>
                <CardDescription className="flex flex-col gap-4">
                  <span className="">
                    <span className="">
                      ${isAnnual ? plan.annualPrice : plan.monthPrice}
                    </span>
                    <span>/ {isAnnual ? "Annually" : "Monthly"}</span>
                  </span>
                  <span>{plan.description}</span>
                  <Button
                    variant="default"
                    className={cn(
                      "",
                      plan.popular ? "bg-background text-primary" : "",
                    )}
                    onClick={() =>
                      handleStripeCheckout(
                        isAnnual ? plan.annualPrice : plan.monthPrice,
                        isAnnual,
                      )
                    }
                  >
                    Get Started
                  </Button>
                </CardDescription>
              </CardHeader>
              <CardContent className="">
                <ul className="flex flex-col gap-8">
                  {plan.fetaures.map((feature) => {
                    return (
                      <li key={feature.id} className="flex gap-4">
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
