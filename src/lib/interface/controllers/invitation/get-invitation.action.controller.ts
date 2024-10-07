"use server";
import {
  ILogManager,
  LogManager,
} from "@/lib/common/port/log/log-manager.port";
import { InvitationsPort } from "@/lib/core/application/ports/invitations.port";
import { databaseAdapter } from "@/lib/infrastructure/adapters/database/database.adapter";
import { container } from "@/lib/infrastructure/adapters/environment/environment.adapter";
import { InvitationsMapper } from "@/lib/infrastructure/mappers/invitations.mapper";
import { GetInvitationRequestDto } from "@/lib/interface/dtos/invitations/get-invitation.request.dto";
import { InvitationDto } from "@/lib/interface/dtos/invitations/invitation.dto";
import { GetInvitationQuery } from "@/lib/interface/queries/invitation/get-invitation.query";

class GetInvitationActionController {
  constructor(
    private readonly logManager: ILogManager,
    private readonly event: GetInvitationQuery,
    private readonly mapper: InvitationsMapper,
  ) {}
  async execute(input: GetInvitationRequestDto): Promise<InvitationDto | null> {
    this.logManager.debug(
      "GetInvitationActionController.execute invoked:",
      input,
    );
    const invitation = await this.event.execute(input);
    if (!invitation) {
      return null;
    }
    return this.mapper.toResponse(invitation);
  }
}

export default async function GetInvitationAction(
  input: GetInvitationRequestDto,
): Promise<InvitationDto | null> {
  const logManager = new LogManager({ debug: container.debug });
  const port = new InvitationsPort(
    databaseAdapter,
    new InvitationsMapper(),
    logManager,
  );
  const query = new GetInvitationQuery(logManager, port);
  const mapper = new InvitationsMapper();
  const controller = new GetInvitationActionController(
    logManager,
    query,
    mapper,
  );
  return await controller.execute(input);
}
