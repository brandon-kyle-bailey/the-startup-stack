import { ILogManager } from "@/lib/common/port/log/log-manager.port";
import { SignupApplicationService } from "@/lib/core/application/services/auth/sign-up.application-service";
import { SigninRequestDto } from "@/lib/interface/dtos/auth/signin.request.dto";

export class SignupCommand {
  constructor(
    private readonly logManager: ILogManager,
    private readonly service: SignupApplicationService,
  ) {}
  async execute(input: SigninRequestDto) {
    this.logManager.debug("SignupCommand.execute invoked:", input);
    return await this.service.execute(input);
  }
}
