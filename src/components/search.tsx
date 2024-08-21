"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CommandIcon, FileTextIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export default function Search({
  links,
}: {
  links: { title: string; href: string }[];
}) {
  const [searchedInput, setSearchedInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        setIsOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const results = useMemo(
    () =>
      links.filter((item) =>
        item.title.toLowerCase().includes(searchedInput.toLowerCase()),
      ),
    [searchedInput, links],
  );

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) setSearchedInput("");
        setIsOpen(open);
      }}
    >
      <DialogTrigger asChild>
        <div className="relative flex items-center gap-2 border rounded-md px-2">
          <Input className="border-none" placeholder="Search" type="search" />
          <div className="right-4 absolute flex items-center text-muted-foreground bg-accent rounded-md border">
            <CommandIcon />
            <span>k</span>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0">
        <DialogHeader>
          <Input
            value={searchedInput}
            onChange={(e) => setSearchedInput(e.target.value)}
            placeholder="Type something to search..."
            autoFocus
            className="h-14 focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </DialogHeader>
        {results.length == 0 && searchedInput && (
          <p className="m-auto text-muted-foreground">
            No results found for{" "}
            <span className="text-primary">{`"${searchedInput}"`}</span>
          </p>
        )}
        <ScrollArea className="max-h-80">
          <ul className="flex flex-col items-start gap-2 overflow-y-auto text-muted-foreground p-2">
            {results.map((res) => {
              return (
                <li
                  key={res.href}
                  className="w-full hover:bg-muted rounded-md p-2"
                >
                  <DialogClose onChange={(val) => console.log(val)} asChild>
                    <Link href={res.href} className="flex items-center gap-2">
                      <FileTextIcon className="h-6 w-6" />
                      <span>{res.title}</span>
                    </Link>
                  </DialogClose>
                </li>
              );
            })}
          </ul>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
