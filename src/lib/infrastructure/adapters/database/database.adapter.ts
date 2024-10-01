import { container } from "@/lib/infrastructure/adapters/environment/environment.adapter";
import { PrismaClient } from "@prisma/client";

function getClient() {
  if (container.debug) {
    const client = new PrismaClient({
      log: [
        { level: "warn", emit: "event" },
        { level: "info", emit: "event" },
        { level: "error", emit: "event" },
      ],
    });

    client.$on("warn", (e) => {
      console.log(e);
    });

    client.$on("info", (e) => {
      console.log(e);
    });

    client.$on("error", (e) => {
      console.log(e);
    });
    return client;
  }
  return new PrismaClient();
}

export const databaseAdapter = getClient();
