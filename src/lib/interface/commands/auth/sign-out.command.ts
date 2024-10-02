import { ILogManager } from "@/lib/common/port/log/log-manager.port";
import { SignoutApplicationService } from "@/lib/core/application/services/auth/sign-out.application-service";

export class SignoutCommand {
  constructor(
    private readonly logManager: ILogManager,
    private readonly service: SignoutApplicationService,
  ) {}
  async execute() {
    this.logManager.debug("SignoutCommand.execute invoked");
    return await this.service.execute();
  }
}
