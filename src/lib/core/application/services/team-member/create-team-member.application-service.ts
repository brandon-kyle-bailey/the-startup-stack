import { InternalServerErrorException } from "@/lib/common/exceptions/exceptions";
import { ILogManager } from "@/lib/common/port/log/log-manager.port";
import { TeamMembersPort } from "@/lib/core/application/ports/team-members.port";
import { TeamMemberEntity } from "@/lib/core/domain/entities/team-member.entity";
import { CreateTeamMemberRequestDto } from "@/lib/interface/dtos/team-member/create-team-member.request.dto";

export class CreateTeamMemberApplicationService {
  constructor(
    private readonly logManager: ILogManager,
    private readonly port: TeamMembersPort,
  ) {}
  async execute(input: CreateTeamMemberRequestDto): Promise<TeamMemberEntity> {
    this.logManager.debug(
      "CreateTeamMemberApplicationService.execute invoked:",
      input,
    );
    try {
      const teamMember = TeamMemberEntity.create({
        user_id: input.user_id,
        team_id: input.team_id,
        role: input.role,
        joined_at: input.joined_at,
      });
      return await this.port.create(teamMember);
    } catch (error) {
      this.logManager.error(
        "CreateTeamMemberApplicationService.execute encountered an error:",
        error,
      );
      throw new InternalServerErrorException();
    }
  }
}
