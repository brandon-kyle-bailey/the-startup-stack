import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer id="footer">
      <ul className="flex gap-8 items-center justify-between">
        <li>&copy; Copyright 2024 The Startup Stack</li>
        <li>
          <Link href="/terms-of-service">Terms of Service</Link>
        </li>
        <li>
          <Link href="privacy-policy">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/docs">Documentation</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <div className="">
            <Link
              className=""
              href={"https://x.com/brandonkpbailey"}
              target="_blank"
            >
              Made with ❤️ by brandonkpbailey
            </Link>
            <ModeToggle />
          </div>
        </li>
      </ul>
    </footer>
  );
}
