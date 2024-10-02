import { ILogManager } from "@/lib/common/port/log/log-manager.port";
import { SigninRequestDto } from "@/lib/interface/dtos/auth/signin.request.dto";

export class SigninWithPasswordCommand {
  constructor(
    private readonly logManager: ILogManager,
    private readonly service: SigninWithPasswordApplicationService,
  ) {}
  async execute(input: SigninRequestDto) {
    this.logManager.debug("command called", input);
    return await this.service.execute(input);
    const result = await AuthAdapter.SigninWithPassword(input);

    if (result.error) {
      console.log(result.error.message);
      return;
    }
  }
}
