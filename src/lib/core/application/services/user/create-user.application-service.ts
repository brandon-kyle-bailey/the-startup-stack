import { InternalServerErrorException } from "@/lib/common/exceptions/exceptions";
import { ILogManager } from "@/lib/common/port/log/log-manager.port";
import { UsersPort } from "@/lib/core/application/ports/users.port";
import { UserEntity } from "@/lib/core/domain/entities/user.entity";
import { CreateUserRequestDto } from "@/lib/interface/dtos/users/create-user.request.dto";

export class CreateUserApplicationService {
  constructor(
    private readonly logManager: ILogManager,
    private readonly port: UsersPort,
  ) {}
  async execute(input: CreateUserRequestDto): Promise<UserEntity> {
    this.logManager.debug(
      "CreateUserApplicationService.execute invoked:",
      input,
    );
    try {
      const user = UserEntity.create({
        name: input.name,
        email: input.email,
        password_hash: input.password_hash,
        role: input.role,
      });
      return await this.port.create(user);
    } catch (error) {
      this.logManager.error(
        "CreateUserApplicationService.execute encountered an error:",
        error,
      );
      throw new InternalServerErrorException();
    }
  }
}
