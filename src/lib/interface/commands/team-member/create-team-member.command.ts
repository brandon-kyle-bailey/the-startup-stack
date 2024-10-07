import { ILogManager } from "@/lib/common/port/log/log-manager.port";
import { CreateTeamMemberApplicationService } from "@/lib/core/application/services/team-member/create-team-member.application-service";
import { TeamMemberEntity } from "@/lib/core/domain/entities/team-member.entity";
import { CreateTeamMemberRequestDto } from "@/lib/interface/dtos/team-member/create-team-member.request.dto";

export class CreateTeamMemberCommand {
  constructor(
    private readonly logManager: ILogManager,
    private readonly service: CreateTeamMemberApplicationService,
  ) {}
  async execute(input: CreateTeamMemberRequestDto): Promise<TeamMemberEntity> {
    this.logManager.debug("CreateTeamMemberCommand.execute invoked:", input);
    return await this.service.execute(input);
  }
}
