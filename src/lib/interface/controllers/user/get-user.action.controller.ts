"use server";
import {
  ILogManager,
  LogManager,
} from "@/lib/common/port/log/log-manager.port";
import { UsersPort } from "@/lib/core/application/ports/users.port";
import { databaseAdapter } from "@/lib/infrastructure/adapters/database/database.adapter";
import { container } from "@/lib/infrastructure/adapters/environment/environment.adapter";
import { UsersMapper } from "@/lib/infrastructure/mappers/users.mapper";
import { GetUserByEmailRequestDto } from "@/lib/interface/dtos/users/get-user-by-email.request.dto";
import { UserDto } from "@/lib/interface/dtos/users/user.dto";
import { GetUserQuery } from "@/lib/interface/queries/user/get-user.query";

class GetUserActionController {
  constructor(
    private readonly logManager: ILogManager,
    private readonly event: GetUserQuery,
    private readonly mapper: UsersMapper,
  ) {}
  async execute(input: GetUserByEmailRequestDto): Promise<UserDto | null> {
    this.logManager.debug("GetUserActionController.execute invoked:", input);
    const user = await this.event.execute(input);
    if (!user) {
      return null;
    }
    return this.mapper.toResponse(user);
  }
}

export default async function GetUserAction(
  input: GetUserByEmailRequestDto,
): Promise<UserDto | null> {
  const logManager = new LogManager({ debug: container.debug });
  const port = new UsersPort(databaseAdapter, new UsersMapper(), logManager);
  const query = new GetUserQuery(logManager, port);
  const mapper = new UsersMapper();
  const controller = new GetUserActionController(logManager, query, mapper);
  return await controller.execute(input);
}
