"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import * as React from "react";

const testimonials = [
  {
    image: "https://avatars.githubusercontent.com/u/39861127?v=4",
    id: 1,
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "John Smith",
    company: "Smith Co.",
  },
  {
    image: "https://avatars.githubusercontent.com/u/39861127?v=4",
    id: 2,
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "John Smith",
    company: "Smith Co.",
  },
  {
    image: "https://avatars.githubusercontent.com/u/39861127?v=4",
    id: 3,
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    name: "John Smith",
    company: "Smith Co.",
  },
];

export default function TestimonialSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  );
  return (
    <section id="testimonials" className="flex flex-col items-center gap-6">
      <h1 className="text-2xl text-center">Hear from our customers</h1>
      <div className="w-full lg:w-3/4 flex gap-8">
        <Carousel
          // @ts-ignore: mismatch type error
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => {
              return (
                <CarouselItem key={testimonial.id} className="lg:basis-1/3">
                  <Card className="flex flex-col gap-4 border-none shadow-none">
                    <CardHeader className="flex flex-col gap-4">
                      <CardDescription className="w-full flex justify-center">
                        <span className="text-lg">
                          &quot;{testimonial.quote}&quot;
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex gap-2 items-center w-full justify-center">
                      <Image
                        alt={testimonial.quote}
                        width={500}
                        height={500}
                        src={testimonial.image}
                        className="w-28 h-28 bg-accent rounded-full border"
                      />
                      <span className="text-muted-foreground">
                        {testimonial.name}
                      </span>
                      <span className="text-muted-foreground">
                        {testimonial.company}
                      </span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
