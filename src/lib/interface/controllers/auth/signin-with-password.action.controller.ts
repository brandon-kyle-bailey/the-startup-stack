"use server";

import {
  ILogManager,
  LogManager,
} from "@/lib/common/port/log/log-manager.port";
import { SigninWithPasswordApplicationService } from "@/lib/core/application/services/auth/signin-with-password.application-service";
import { AuthAdapter } from "@/lib/infrastructure/adapters/auth/auth.adapter";
import { container } from "@/lib/infrastructure/adapters/environment/environment.adapter";
import { SigninWithPasswordCommand } from "@/lib/interface/commands/auth/signin-with-password.command";
import { SigninRequestDto } from "@/lib/interface/dtos/auth/signin.request.dto";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

class SigninWithPasswordActionController {
  constructor(
    private readonly logManager: ILogManager,
    private readonly event: SigninWithPasswordCommand,
  ) {}
  async execute(formdata: FormData) {
    const input: SigninRequestDto = {
      email: formdata.get("email") as string,
      password: formdata.get("password") as string,
    };
    this.logManager.debug(
      "SigninWithPasswordActionController.execute invoked:",
      input,
    );

    await this.event.execute(input);

    revalidatePath("/dashboard", "layout");
    redirect("/dashboard");
  }
}

export default async function SigninWithPasswordAction(formdata: FormData) {
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
  return await controller.execute(formdata);
}
