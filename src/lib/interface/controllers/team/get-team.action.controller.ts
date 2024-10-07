"use server";
import {
  ILogManager,
  LogManager,
} from "@/lib/common/port/log/log-manager.port";
import { TeamsPort } from "@/lib/core/application/ports/teams.port";
import { databaseAdapter } from "@/lib/infrastructure/adapters/database/database.adapter";
import { container } from "@/lib/infrastructure/adapters/environment/environment.adapter";
import { TeamsMapper } from "@/lib/infrastructure/mappers/teams.mapper";
import { GetTeamRequestDto } from "@/lib/interface/dtos/teams/get-team.request.dto";
import { TeamDto } from "@/lib/interface/dtos/teams/team.dto";
import { GetTeamQuery } from "@/lib/interface/queries/team/get-team.query";

class GetTeamActionController {
  constructor(
    private readonly logManager: ILogManager,
    private readonly event: GetTeamQuery,
    private readonly mapper: TeamsMapper,
  ) {}
  async execute(input: GetTeamRequestDto): Promise<TeamDto | null> {
    this.logManager.debug("GetTeamActionController.execute invoked:", input);
    const invitation = await this.event.execute(input);
    if (!invitation) {
      return null;
    }
    return this.mapper.toResponse(invitation);
  }
}

export default async function GetTeamAction(
  input: GetTeamRequestDto,
): Promise<TeamDto | null> {
  const logManager = new LogManager({ debug: container.debug });
  const port = new TeamsPort(databaseAdapter, new TeamsMapper(), logManager);
  const query = new GetTeamQuery(logManager, port);
  const mapper = new TeamsMapper();
  const controller = new GetTeamActionController(logManager, query, mapper);
  return await controller.execute(input);
}
