import { PropsWithChildren } from "react";

export default function MarkdownComponent({ children }: PropsWithChildren) {
  return (
    <div className="prose dark:prose-invert prose-code:font-code dark:prose-code:bg-neutral-900 dark:prose-pre:bg-neutral-900 prose-code:bg-neutral-100 prose-pre:bg-neutral-100 prose-headings:scroll-m-20 prose-code:text-primary prose-code:overflow-x-auto prose-code:w-[100vw]">
      {children}
    </div>
  );
}
