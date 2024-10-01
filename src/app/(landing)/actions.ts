"use server";

import { LogManager } from "@/lib/common/port/log/log-manager.port";
import { UsersPort } from "@/lib/core/application/ports/users.port";
import { databaseAdapter } from "@/lib/infrastructure/adapters/database/database.adapter";
import { UsersMapper } from "@/lib/infrastructure/mappers/users.mapper";

export async function handleOnClick() {
  const logManager = new LogManager({ debug: true });
  const mapper = new UsersMapper();
  const port = new UsersPort(databaseAdapter, mapper, logManager);
  const result = await port.getById(1);
  return mapper.toResponse(result);
}
