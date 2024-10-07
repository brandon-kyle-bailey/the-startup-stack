"use server";
import {
  ILogManager,
  LogManager,
} from "@/lib/common/port/log/log-manager.port";
import { TeamMembersPort } from "@/lib/core/application/ports/team-members.port";
import { CreateTeamMemberApplicationService } from "@/lib/core/application/services/team-member/create-team-member.application-service";
import { databaseAdapter } from "@/lib/infrastructure/adapters/database/database.adapter";
import { container } from "@/lib/infrastructure/adapters/environment/environment.adapter";
import { TeamMembersMapper } from "@/lib/infrastructure/mappers/team-members.mapper";
import { CreateTeamMemberCommand } from "@/lib/interface/commands/team-member/create-team-member.command";
import { CreateTeamMemberRequestDto } from "@/lib/interface/dtos/team-member/create-team-member.request.dto";

class CreateTeamMemberActionController {
  constructor(
    private readonly logManager: ILogManager,
    private readonly event: CreateTeamMemberCommand,
  ) {}
  async execute(input: CreateTeamMemberRequestDto) {
    this.logManager.debug(
      "CreateTeamMemberActionController.execute invoked:",
      input,
    );
    return await this.event.execute(input);
  }
}

export default async function CreateTeamMemberAction(
  input: CreateTeamMemberRequestDto,
) {
  const logManager = new LogManager({ debug: container.debug });
  const port = new TeamMembersPort(
    databaseAdapter,
    new TeamMembersMapper(),
    logManager,
  );
  const applicationService = new CreateTeamMemberApplicationService(
    logManager,
    port,
  );
  const command = new CreateTeamMemberCommand(logManager, applicationService);
  const controller = new CreateTeamMemberActionController(logManager, command);
  return await controller.execute(input);
}
