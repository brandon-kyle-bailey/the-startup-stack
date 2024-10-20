import { ILogManager } from "@/lib/common/port/log/log-manager.port";
import { AuthAdapter } from "@/lib/infrastructure/adapters/auth/auth.adapter";
import { AuthSignupRequestDto } from "@/lib/interface/dtos/auth/signup.request.dto";

export class SignupApplicationService {
  constructor(
    private readonly logManager: ILogManager,
    private readonly adapter: AuthAdapter,
  ) {}
  async execute(input: AuthSignupRequestDto) {
    this.logManager.debug("SignupApplicationService.execute invoked:", input);
    const result = await this.adapter.signup(input);
    if (result.error) {
      this.logManager.error(
        "SignupApplicationService.execute encountered an error:",
        result.error.message,
      );
    }
    return result;
  }
}
