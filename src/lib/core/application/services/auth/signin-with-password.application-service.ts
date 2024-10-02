import { ILogManager } from "@/lib/common/port/log/log-manager.port";
import { AuthAdapter } from "@/lib/infrastructure/adapters/auth/auth.adapter";
import { SigninRequestDto } from "@/lib/interface/dtos/auth/signin.request.dto";

export class SigninWithPasswordApplicationService {
  constructor(
    private readonly logManager: ILogManager,
    private readonly adapter: AuthAdapter,
  ) {}
  async execute(input: SigninRequestDto) {
    this.logManager.debug(
      "signin with password application service executed:",
      input,
    );
    return await this.adapter.signinWithPassword(input);
  }
}
