import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer id="footer">
      <div className="">
        <p>&copy; Copyright 2024 The Startup Stack</p>
        <Link href="/terms-of-service">Terms of Service</Link>
        <Link href="privacy-policy">Privacy Policy</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/docs">Documentation</Link>
        <Link href="/contact">Contact</Link>
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
      </div>
    </footer>
  );
}
