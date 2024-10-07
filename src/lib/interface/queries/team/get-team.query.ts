import { ILogManager } from "@/lib/common/port/log/log-manager.port";
import { TeamsPort } from "@/lib/core/application/ports/teams.port";
import { TeamEntity } from "@/lib/core/domain/entities/team.entity";
import { GetTeamRequestDto } from "@/lib/interface/dtos/teams/get-team.request.dto";

export class GetTeamQuery {
  constructor(
    private readonly logManager: ILogManager,
    private readonly port: TeamsPort,
  ) {}
  async execute(input: GetTeamRequestDto): Promise<TeamEntity | null> {
    this.logManager.debug("GetTeamQuery.execute invoked:", input);
    const user = await this.port.getById(input.id);
    if (!user) {
      this.logManager.debug("user not found");
      return null;
    }
    return user;
  }
}
