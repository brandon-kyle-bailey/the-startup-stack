import { ILogManager } from "@/lib/common/port/log/log-manager.port";
import { AuthAdapter } from "@/lib/infrastructure/adapters/auth/auth.adapter";

export class SignoutApplicationService {
  constructor(
    private readonly logManager: ILogManager,
    private readonly adapter: AuthAdapter,
  ) {}
  async execute() {
    this.logManager.debug("SignoutApplicationService.execute invoked");
    const result = await this.adapter.signout();
    if (result.error) {
      this.logManager.error(
        "SignoutApplicationService.execute encountered an error:",
        result.error.message,
      );
    }
    return result;
  }
}
