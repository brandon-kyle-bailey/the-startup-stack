import { ILogManager } from "@/lib/common/port/log/log-manager.port";
import { CreateUserApplicationService } from "@/lib/core/application/services/user/create-user.application-service";
import { UserEntity } from "@/lib/core/domain/entities/user.entity";
import { CreateUserRequestDto } from "@/lib/interface/dtos/users/create-user.request.dto";

export class CreateUserCommand {
  constructor(
    private readonly logManager: ILogManager,
    private readonly service: CreateUserApplicationService,
  ) {}
  async execute(input: CreateUserRequestDto): Promise<UserEntity> {
    this.logManager.debug("CreateUserCommand.execute invoked:", input);
    return await this.service.execute(input);
  }
}
