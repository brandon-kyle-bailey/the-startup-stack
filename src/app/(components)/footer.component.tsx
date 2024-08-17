import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer id="footer">
      <div className="text-muted-foreground flex max-sm:flex-col justify-between items-center">
        <Link
          className="underline hover:text-blue-500"
          href={"https://x.com/brandonkpbailey"}
          target="_blank"
        >
          Made with ❤️ by brandonkpbailey
        </Link>
        <div className="flex max-sm:flex-col gap-2 items-center">
          <p>&copy; Copyright 2024 The Startup Stack</p>
          <ModeToggle />
        </div>
      </div>
    </footer>
  );
}
