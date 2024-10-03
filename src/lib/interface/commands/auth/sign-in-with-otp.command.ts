import { ILogManager } from "@/lib/common/port/log/log-manager.port";
import { SigninWithOtpApplicationService } from "@/lib/core/application/services/auth/sign-in-with-otp.application-service";
import { SigninWithOtpRequestDto } from "@/lib/interface/dtos/auth/signin.request.dto";

export class SigninWithOtpCommand {
  constructor(
    private readonly logManager: ILogManager,
    private readonly service: SigninWithOtpApplicationService,
  ) {}
  async execute(input: SigninWithOtpRequestDto) {
    this.logManager.debug("SigninWithOtpCommand.execute invoked:", input);
    return await this.service.execute(input);
  }
}
