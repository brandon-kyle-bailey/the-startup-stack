"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function redirectAfterDelay(props: {
  delay: number;
  url: string;
}) {
  await new Promise((resolve) => setTimeout(resolve, props.delay));
  const error = false;
  if (error) {
    console.log(error);
    redirect("/error");
  }

  revalidatePath(props.url, "layout");
  redirect(props.url);
}
