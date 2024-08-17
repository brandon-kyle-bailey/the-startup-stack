import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Activity } from "lucide-react";

const features = [
  {
    id: 0,
    title: "some feature title",
    description: "some feature description",
    content: "some feature content",
    footer: "some feature footer",
  },
  {
    id: 1,
    title: "some feature title",
    description: "some feature description",
    content: "some feature content",
    footer: "some feature footer",
  },
  {
    id: 2,
    title: "some feature title",
    description: "some feature description",
    content: "some feature content",
    footer: "some feature footer",
  },
  {
    id: 3,
    title: "some feature title",
    description: "some feature description",
    content: "some feature content",
    footer: "some feature footer",
  },
  {
    id: 4,
    title: "some feature title",
    description: "some feature description",
    content: "some feature content",
    footer: "some feature footer",
  },
  {
    id: 5,
    title: "some feature title",
    description: "some feature description",
    content: "some feature content",
    footer: "some feature footer",
  },
  {
    id: 6,
    title: "some feature title",
    description: "some feature description",
    content: "some feature content",
    footer: "some feature footer",
  },
  {
    id: 7,
    title: "some feature title",
    description: "some feature description",
    content: "some feature content",
    footer: "some feature footer",
  },
  {
    id: 8,
    title: "some feature title",
    description: "some feature description",
    content: "some feature content",
    footer: "some feature footer",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="flex flex-col items-center gap-6 text-muted-foreground"
    >
      <h1 className="text-2xl text-primary">Features</h1>
      <p>Jam packed with all the best technologies</p>
      <div className="w-full lg:w-3/4 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {features.map((feature) => {
          return (
            <Card key={feature.id}>
              <CardHeader>
                <div className="text-primary flex justify-between">
                  <CardTitle>{feature.title}</CardTitle>
                  <Activity />
                </div>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>{feature.content}</CardContent>
              <CardFooter>{feature.footer}</CardFooter>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
