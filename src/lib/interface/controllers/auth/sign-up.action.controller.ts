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
import CreateTeamMemberAction from "@/lib/interface/controllers/team-member/create-team-member.action.controller";
import GetTeamAction from "@/lib/interface/controllers/team/get-team.action.controller";
import CreateUserAction from "@/lib/interface/controllers/user/create-user.action.controller";
import GetUserAction from "@/lib/interface/controllers/user/get-user.action.controller";
import { SignupRequestDto } from "@/lib/interface/dtos/auth/signup.request.dto";
import { CreateTeamMemberRequestDto } from "@/lib/interface/dtos/team-member/create-team-member.request.dto";
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
    let createTeamMemberProps: CreateTeamMemberRequestDto = {
      team_id: "",
      role: "" as UserRoleEnum,
      joined_at: new Date(),
      user_id: "",
    };
    if (input.invitationId) {
      const invitation = await this.getInvitationAction({
        id: input.invitationId,
      });
      if (!invitation) {
        return NotFoundException.message;
      }

      const team = await this.getTeamAction({ id: invitation.team_id });
      if (!team) {
        return NotFoundException.message;
      }
      role = invitation.role;
      createTeamMemberProps = {
        team_id: team.id,
        role,
        joined_at: new Date(),
        user_id: "",
      };
      await this.updateInvitationAction({
        id: invitation.id,
        status: InvitationStatusEnum.ACCEPTED,
      });
    }
    const newUser = await this.createUserAction({
      name: input.name,
      email: input.email,
      password_hash: passwordValueObject.password(),
      role,
    });
    await this.createTeamMemberAction({
      ...createTeamMemberProps,
      user_id: newUser.id,
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
