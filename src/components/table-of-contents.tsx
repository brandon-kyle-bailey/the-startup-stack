import TableOfContentsObserverComponent from "@/components/table-of-contents-observer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { getTocs } from "@/lib/markdown";

export default async function TableOfContentsComponent({
  path,
}: {
  path: string;
}) {
  const tocs = await getTocs(path);
  return (
    <div className="flex flex-col gap-8 text-muted-foreground">
      <h3>On this page</h3>
      <ScrollArea>
        <TableOfContentsObserverComponent data={tocs} />
      </ScrollArea>
    </div>
  );
}
