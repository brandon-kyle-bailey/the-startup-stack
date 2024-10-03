"use server";

import {
  ILogManager,
  LogManager,
} from "@/lib/common/port/log/log-manager.port";
import { SigninWithOtpApplicationService } from "@/lib/core/application/services/auth/sign-in-with-otp.application-service";
import { AuthAdapter } from "@/lib/infrastructure/adapters/auth/auth.adapter";
import { container } from "@/lib/infrastructure/adapters/environment/environment.adapter";
import { SigninWithOtpCommand } from "@/lib/interface/commands/auth/sign-in-with-otp.command";
import { SigninWithOtpRequestDto } from "@/lib/interface/dtos/auth/signin.request.dto";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

class SigninWithOtpActionController {
  constructor(
    private readonly logManager: ILogManager,
    private readonly event: SigninWithOtpCommand,
  ) {}
  async execute(input: SigninWithOtpRequestDto) {
    this.logManager.debug(
      "SigninWithOtpActionController.execute invoked:",
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

export default async function SigninWithOtpAction(
  input: SigninWithOtpRequestDto,
) {
  const logManager = new LogManager({ debug: container.debug });
  const adapter = new AuthAdapter(logManager);
  const applicationService = new SigninWithOtpApplicationService(
    logManager,
    adapter,
  );
  const command = new SigninWithOtpCommand(logManager, applicationService);
  const controller = new SigninWithOtpActionController(logManager, command);
  return await controller.execute(input);
}
