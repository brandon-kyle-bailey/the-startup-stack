import { ILogManager } from "@/lib/common/port/log/log-manager.port";
import { AuthAdapter } from "@/lib/infrastructure/adapters/auth/auth.adapter";
import { SigninWithOtpRequestDto } from "@/lib/interface/dtos/auth/signin.request.dto";

export class SigninWithOtpApplicationService {
  constructor(
    private readonly logManager: ILogManager,
    private readonly adapter: AuthAdapter,
  ) {}
  async execute(input: SigninWithOtpRequestDto) {
    this.logManager.debug(
      "SigninWithOtpApplicationService.execute invoked:",
      input,
    );
    const result = await this.adapter.signinWithOtp(input);
    if (result.error) {
      this.logManager.error(
        "SigninWithOtpApplicationService.execute encountered an error:",
        result.error.message,
      );
    }
    return result;
  }
}
