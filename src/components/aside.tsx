import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

export default function AsideComponent({
  prefix,
  routes,
}: {
  prefix: string;
  routes: {
    title: string;
    href: string;
    items: { title: string; href: string }[];
  }[];
}) {
  return (
    <aside className="hidden md:flex pr-8 h-screen overflow-y-auto">
      <ScrollArea>
        <ul className="w-full text-muted-foreground flex flex-col gap-8">
          {routes.map((ele, idx) => {
            return (
              <li key={idx} className="flex flex-col gap-4">
                <Link
                  href={`${prefix}/${ele.href}`}
                  className="hover:text-primary"
                >
                  {ele.title}
                </Link>
                {ele.items.length > 0 && (
                  <ul className="pl-8 flex flex-col gap-4">
                    {ele.items.map((subele, subeleidx) => {
                      return (
                        <li key={subeleidx}>
                          <Link
                            href={`${prefix}/${ele.href}/${subele.href}`}
                            className="hover:text-primary"
                          >
                            {subele.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </ScrollArea>
    </aside>
  );
}
