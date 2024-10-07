"use server";

import {
  InternalServerErrorException,
  NotFoundException,
} from "@/lib/common/exceptions/exceptions";
import {
  ILogManager,
  LogManager,
} from "@/lib/common/port/log/log-manager.port";
import { UsersPort } from "@/lib/core/application/ports/users.port";
import { SigninWithPasswordApplicationService } from "@/lib/core/application/services/auth/sign-in-with-password.application-service";
import { AuthAdapter } from "@/lib/infrastructure/adapters/auth/auth.adapter";
import { databaseAdapter } from "@/lib/infrastructure/adapters/database/database.adapter";
import { container } from "@/lib/infrastructure/adapters/environment/environment.adapter";
import { UsersMapper } from "@/lib/infrastructure/mappers/users.mapper";
import { SigninWithPasswordCommand } from "@/lib/interface/commands/auth/sign-in-with-password.command";
import { SigninRequestDto } from "@/lib/interface/dtos/auth/signin.request.dto";
import { compareSync } from "bcryptjs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

class SigninWithPasswordActionController {
  constructor(
    private readonly logManager: ILogManager,
    private readonly userPort: UsersPort,
    private readonly event: SigninWithPasswordCommand,
  ) {}
  async execute(input: SigninRequestDto) {
    this.logManager.debug(
      "SigninWithPasswordActionController.execute invoked:",
      input,
    );

    const user = await this.userPort.getByEmail(input.email);
    if (!user) {
      return NotFoundException.message;
    }

    if (!compareSync(input.password, user.password_hash())) {
      return InternalServerErrorException.message;
    }

    const result = await this.event.execute(input);
    if (result.error) {
      this.logManager.error(result.error.message);
      return InternalServerErrorException.message;
    }

    revalidatePath("/dashboard", "layout");
    redirect("/dashboard");
  }
}

export default async function SigninWithPasswordAction(
  input: SigninRequestDto,
) {
  const logManager = new LogManager({ debug: container.debug });
  const authAdapter = new AuthAdapter(logManager);
  const usersMapper = new UsersMapper();
  const usersPort = new UsersPort(databaseAdapter, usersMapper, logManager);
  const applicationService = new SigninWithPasswordApplicationService(
    logManager,
    authAdapter,
  );
  const command = new SigninWithPasswordCommand(logManager, applicationService);
  const controller = new SigninWithPasswordActionController(
    logManager,
    usersPort,
    command,
  );
  return await controller.execute(input);
}
