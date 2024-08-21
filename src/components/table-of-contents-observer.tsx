"use client";

import { getTocs } from "@/lib/markdown";
import clsx from "clsx";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

type Props = { data: Awaited<ReturnType<typeof getTocs>> };

export default function TableOfContentsObserverComponent({ data }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      const visibleEntry = entries.find((entry) => entry.isIntersecting);
      if (visibleEntry) {
        setActiveId(visibleEntry.target.id);
      }
    };

    observer.current = new IntersectionObserver(handleIntersect, {
      threshold: 0.75,
    });

    const elements = data.map((item) =>
      document.getElementById(item.href.slice(1)),
    );

    elements.forEach((el) => {
      if (el && observer.current) {
        observer.current.observe(el);
      }
    });

    return () => {
      if (observer.current) {
        elements.forEach((el) => {
          if (el) {
            observer.current!.unobserve(el);
          }
        });
      }
    };
  }, [data]);

  return (
    <ul className="text-muted-foreground flex flex-col gap-2">
      {data.map(({ href, level, text }) => {
        return (
          <li
            key={href}
            className={clsx({
              "pl-0": level == 2,
              "pl-4": level == 3,
              "pl-8 ": level == 4,
              "font-medium text-primary": activeId === href.slice(1),
            })}
          >
            <Link href={href}>{text}</Link>
          </li>
        );
      })}
    </ul>
  );
}
