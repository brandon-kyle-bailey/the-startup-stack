"use server";

import { InvitationStatusEnum } from "@/lib/common/enum/invitation-status.enum";
import { UserRoleEnum } from "@/lib/common/enum/user-role.enum";
import {
  AlreadyExistsException,
  InternalServerErrorException,
  NotFoundException,
} from "@/lib/common/exceptions/exceptions";
import {
  ILogManager,
  LogManager,
} from "@/lib/common/port/log/log-manager.port";
import { SignupApplicationService } from "@/lib/core/application/services/auth/sign-up.application-service";
import { PasswordValueObject } from "@/lib/core/domain/value-objects/password.value-object";
import { AuthAdapter } from "@/lib/infrastructure/adapters/auth/auth.adapter";
import { container } from "@/lib/infrastructure/adapters/environment/environment.adapter";
import { SignupCommand } from "@/lib/interface/commands/auth/sign-up.command";
import GetInvitationAction from "@/lib/interface/controllers/invitation/get-invitation.action.controller";
import UpdateInvitationAction from "@/lib/interface/controllers/invitation/update-invitation.action.controller";
import GetTeamAction from "@/lib/interface/controllers/team/get-team.action.controller";
import CreateUserAction from "@/lib/interface/controllers/user/create-user.action.controller";
import GetUserAction from "@/lib/interface/controllers/user/get-user.action.controller";
import { SignupRequestDto } from "@/lib/interface/dtos/auth/signup.request.dto";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

class SignupActionController {
  constructor(
    private readonly logManager: ILogManager,
    private readonly getUserAction: typeof GetUserAction,
    private readonly createUserAction: typeof CreateUserAction,
    private readonly getInvitationAction: typeof GetInvitationAction,
    private readonly updateInvitationAction: typeof UpdateInvitationAction,
    private readonly getTeamAction: typeof GetTeamAction,
    private readonly createTeamMemberAction: typeof CreateTeamMemberAction,
    private readonly event: SignupCommand,
  ) {}
  async execute(input: SignupRequestDto) {
    this.logManager.debug("SignupActionController.execute invoked:", input);
    // TODO: handle user creation in db:
    // x check if user already exists
    // x hash password
    // x if invite id present:
    //  x check if invite has expired
    //  - handle invite status update
    //  - handle team membership creation
    // - if no invite
    // - create team and team membership

    const passwordValueObject = PasswordValueObject.create({
      password: input.password,
    });

    if (!passwordValueObject.compare(input.confirmPassword)) {
      return InternalServerErrorException.message;
    }

    const user = await this.getUserAction({ email: input.email });
    if (user) {
      return AlreadyExistsException.message;
    }

    let role: UserRoleEnum = UserRoleEnum.OWNER;
    let teamId: string;
    if (input.invitationId) {
      const invitation = await this.getInvitationAction({
        id: input.invitationId,
      });
      if (!invitation) {
        return NotFoundException.message;
      }
      role = invitation.role;
      teamId = invitation.team_id;
      await this.updateInvitationAction({
        id: invitation.id,
        status: InvitationStatusEnum.ACCEPTED,
      });

      await this.createTeamMemberAction({ teamId });
    }

    await this.createUserAction({
      name: input.name,
      email: input.email,
      password_hash: passwordValueObject.password(),
      role,
    });
    const result = await this.event.execute({
      email: input.email,
      password: passwordValueObject.password(),
    });
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
  const service = new SignupApplicationService(logManager, adapter);
  const command = new SignupCommand(logManager, service);
  const controller = new SignupActionController(
    logManager,
    GetUserAction,
    CreateUserAction,
    GetInvitationAction,
    UpdateInvitationAction,
    GetTeamAction,
    CreateTeamMemberAction,
    command,
  );
  return await controller.execute(input);
}
