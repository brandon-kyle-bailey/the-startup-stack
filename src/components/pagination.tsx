import { getPreviousNext } from "@/lib/markdown";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";

export default function PaginationComponent({
  routes,
  current,
}: {
  routes: { title: string; href: string }[];
  current: string;
}) {
  const res = getPreviousNext(routes, current);
  return (
    <div className="w-full flex justify-between">
      {res.prev && (
        <Link href={`/${res.prev.href}`} className="flex gap-2 items-center">
          <ChevronLeftIcon />
          <p>{res.prev.title}</p>
        </Link>
      )}
      {res.next && (
        <Link href={`/${res.next.href}`} className="flex gap-2 items-center">
          <p>{res.next.title}</p>
          <ChevronRightIcon />
        </Link>
      )}
    </div>
  );
}
