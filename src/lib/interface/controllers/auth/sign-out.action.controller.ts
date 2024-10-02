"use server";

import {
  ILogManager,
  LogManager,
} from "@/lib/common/port/log/log-manager.port";
import { SignoutApplicationService } from "@/lib/core/application/services/auth/sign-out.application-service";
import { AuthAdapter } from "@/lib/infrastructure/adapters/auth/auth.adapter";
import { container } from "@/lib/infrastructure/adapters/environment/environment.adapter";
import { SignoutCommand } from "@/lib/interface/commands/auth/sign-out.command";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

class SignoutActionController {
  constructor(
    private readonly logManager: ILogManager,
    private readonly event: SignoutCommand,
  ) {}
  async execute() {
    this.logManager.debug("SignoutActionController.execute invoked");
    await this.event.execute();
    revalidatePath("/", "layout");
    redirect("/");
  }
}

export default async function SignoutAction() {
  const logManager = new LogManager({ debug: container.debug });
  const adapter = new AuthAdapter(logManager);
  const applicationService = new SignoutApplicationService(logManager, adapter);
  const command = new SignoutCommand(logManager, applicationService);
  const controller = new SignoutActionController(logManager, command);
  return await controller.execute();
}
