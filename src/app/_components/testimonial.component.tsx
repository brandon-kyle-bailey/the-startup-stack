"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
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
    <section id="testimonials" className="flex flex-col items-center gap-4">
      <h1 className="text-5xl font-semibold">Hear from our customers</h1>
      <p className="text-muted-foreground text-xl">
        Hear what some of our customers have to say
      </p>
      <div className="w-full">
        <Carousel
          // @ts-ignore: mismatch type error
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className=""
        >
          <CarouselContent>
            {testimonials.map((testimonial) => {
              return (
                <CarouselItem key={testimonial.id} className="lg:basis-1/3">
                  <Card className="border-none shadow-none flex flex-col items-center">
                    <CardHeader className="w-full">
                      <CardDescription className="">
                        <span className="text-lg">
                          &quot;{testimonial.quote}&quot;
                        </span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center gap-4">
                      <Image
                        alt={testimonial.quote}
                        width={500}
                        height={500}
                        src={testimonial.image}
                        className="rounded-full w-1/4"
                      />
                      <span className="">{testimonial.name}</span>
                      <span className="">{testimonial.company}</span>
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
