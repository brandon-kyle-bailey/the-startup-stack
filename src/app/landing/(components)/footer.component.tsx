import Link from "next/link";

export default function FooterSection() {
  return (
    <footer id="footer">
      <div className="flex justify-between">
        <Link
          className="underline hover:text-blue-500"
          href={"https://x.com/brandonkpbailey"}
          target="_blank"
        >
          Made with ❤️ by brandonkpbailey
        </Link>
        <p>&copy; Copyright 2024 The Startup Stack</p>
      </div>
    </footer>
  );
}
