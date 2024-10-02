import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function useFormSchema(schema: z.ZodSchema, defaultValues: any) {
  return useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues,
  });
}
