"use server";
import {
  ILogManager,
  LogManager,
} from "@/lib/common/port/log/log-manager.port";
import { UsersPort } from "@/lib/core/application/ports/users.port";
import { CreateUserApplicationService } from "@/lib/core/application/services/user/create-user.application-service";
import { databaseAdapter } from "@/lib/infrastructure/adapters/database/database.adapter";
import { container } from "@/lib/infrastructure/adapters/environment/environment.adapter";
import { UsersMapper } from "@/lib/infrastructure/mappers/users.mapper";
import { CreateUserCommand } from "@/lib/interface/commands/user/create-user.command";
import { CreateUserRequestDto } from "@/lib/interface/dtos/users/create-user.request.dto";
import { UserDto } from "@/lib/interface/dtos/users/user.dto";

class CreateUserActionController {
  constructor(
    private readonly logManager: ILogManager,
    private readonly event: CreateUserCommand,
    private readonly mapper: UsersMapper,
  ) {}
  async execute(input: CreateUserRequestDto): Promise<UserDto> {
    this.logManager.debug("CreateUserActionController.execute invoked:", input);
    const user = await this.event.execute(input);
    return this.mapper.toResponse(user);
  }
}

export default async function CreateUserAction(
  input: CreateUserRequestDto,
): Promise<UserDto> {
  const logManager = new LogManager({ debug: container.debug });
  const port = new UsersPort(databaseAdapter, new UsersMapper(), logManager);
  const applicationService = new CreateUserApplicationService(logManager, port);
  const command = new CreateUserCommand(logManager, applicationService);
  const controller = new CreateUserActionController(
    logManager,
    command,
    new UsersMapper(),
  );
  return await controller.execute(input);
}
