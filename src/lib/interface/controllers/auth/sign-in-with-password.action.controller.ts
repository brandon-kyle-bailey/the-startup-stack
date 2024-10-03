"use server";

import {
  ILogManager,
  LogManager,
} from "@/lib/common/port/log/log-manager.port";
import { SigninWithPasswordApplicationService } from "@/lib/core/application/services/auth/sign-in-with-password.application-service";
import { AuthAdapter } from "@/lib/infrastructure/adapters/auth/auth.adapter";
import { container } from "@/lib/infrastructure/adapters/environment/environment.adapter";
import { SigninWithPasswordCommand } from "@/lib/interface/commands/auth/sign-in-with-password.command";
import { SigninRequestDto } from "@/lib/interface/dtos/auth/signin.request.dto";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

class SigninWithPasswordActionController {
  constructor(
    private readonly logManager: ILogManager,
    private readonly event: SigninWithPasswordCommand,
  ) {}
  async execute(input: SigninRequestDto) {
    this.logManager.debug(
      "SigninWithPasswordActionController.execute invoked:",
      input,
    );

    const result = await this.event.execute(input);
    if (result.error) {
      return result.error.name;
    }

    revalidatePath("/dashboard", "layout");
    redirect("/dashboard");
  }
}

export default async function SigninWithPasswordAction(
  input: SigninRequestDto,
) {
  const logManager = new LogManager({ debug: container.debug });
  const adapter = new AuthAdapter(logManager);
  const applicationService = new SigninWithPasswordApplicationService(
    logManager,
    adapter,
  );
  const command = new SigninWithPasswordCommand(logManager, applicationService);
  const controller = new SigninWithPasswordActionController(
    logManager,
    command,
  );
  return await controller.execute(input);
}
