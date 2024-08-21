import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getMarkdownForSlug } from "@/lib/markdown";
import { cache } from "react";

const cachedGetMarkdownForSlug = cache(getMarkdownForSlug);

export async function getCachedMarkdown(path: string) {
  const res = await cachedGetMarkdownForSlug(path);
  if (!res) {
    revalidatePath("/not-found", "layout");
    redirect("/not-found");
  }
  return res;
}
