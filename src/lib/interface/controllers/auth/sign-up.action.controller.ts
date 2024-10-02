"use server";

import {
  ILogManager,
  LogManager,
} from "@/lib/common/port/log/log-manager.port";
import { SignupApplicationService } from "@/lib/core/application/services/auth/sign-up.application-service";
import { AuthAdapter } from "@/lib/infrastructure/adapters/auth/auth.adapter";
import { container } from "@/lib/infrastructure/adapters/environment/environment.adapter";
import { SignupCommand } from "@/lib/interface/commands/auth/sign-up.command";
import { SignupRequestDto } from "@/lib/interface/dtos/auth/signup.request.dto";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

class SignupActionController {
  constructor(
    private readonly logManager: ILogManager,
    private readonly event: SignupCommand,
  ) {}
  async execute(input: SignupRequestDto) {
    this.logManager.debug("SignupActionController.execute invoked:", input);
    const result = await this.event.execute(input);
    if (result.error) {
      return result.error.name;
    }
    revalidatePath("/dashboard", "layout");
    redirect("/dashboard");
  }
}

export default async function SignupAction(input: SignupRequestDto) {
  const logManager = new LogManager({ debug: container.debug });
  const adapter = new AuthAdapter(logManager);
  const applicationService = new SignupApplicationService(logManager, adapter);
  const command = new SignupCommand(logManager, applicationService);
  const controller = new SignupActionController(logManager, command);
  return await controller.execute(input);
}
