import { ILogManager } from "@/lib/common/port/log/log-manager.port";
import { SigninWithPasswordApplicationService } from "@/lib/core/application/services/auth/signin-with-password.application-service";
import { SigninRequestDto } from "@/lib/interface/dtos/auth/signin.request.dto";

export class SigninWithPasswordCommand {
  constructor(
    private readonly logManager: ILogManager,
    private readonly service: SigninWithPasswordApplicationService,
  ) {}
  async execute(input: SigninRequestDto) {
    this.logManager.debug("SigninWithPasswordCommand.execute invoked:", input);
    return await this.service.execute(input);
  }
}
