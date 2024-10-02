"use server";

import {
  ILogManager,
  LogManager,
} from "@/lib/common/port/log/log-manager.port";
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

    await this.event.execute(input);

    revalidatePath("/dashboard", "layout");
    redirect("/dashboard");
  }
}
const logManager = new LogManager({ debug: container.debug });
const controller = new SigninWithPasswordActionController(
  logManager,
  new SigninWithPasswordCommand(logManager),
);
const SigninWithPasswordAction = controller.execute;
export default SigninWithPasswordAction;
