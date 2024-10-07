import { ILogManager } from "@/lib/common/port/log/log-manager.port";
import { UsersPort } from "@/lib/core/application/ports/users.port";
import { UserEntity } from "@/lib/core/domain/entities/user.entity";
import { GetUserByEmailRequestDto } from "@/lib/interface/dtos/users/get-user-by-email.request.dto";

export class GetUserQuery {
  constructor(
    private readonly logManager: ILogManager,
    private readonly port: UsersPort,
  ) {}
  async execute(input: GetUserByEmailRequestDto): Promise<UserEntity | null> {
    this.logManager.debug("GetUserQuery.execute invoked:", input);
    const user = await this.port.getByEmail(input.email);
    if (!user) {
      this.logManager.debug("user not found");
      return null;
    }
    return user;
  }
}
