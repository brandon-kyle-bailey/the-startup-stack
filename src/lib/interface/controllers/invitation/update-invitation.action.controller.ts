"use server";
import {
  ILogManager,
  LogManager,
} from "@/lib/common/port/log/log-manager.port";
import { InvitationsPort } from "@/lib/core/application/ports/invitations.port";
import { UpdateInvitationApplicationService } from "@/lib/core/application/services/invitation/update-invitation.application-service";
import { databaseAdapter } from "@/lib/infrastructure/adapters/database/database.adapter";
import { container } from "@/lib/infrastructure/adapters/environment/environment.adapter";
import { InvitationsMapper } from "@/lib/infrastructure/mappers/invitations.mapper";
import { UpdateInvitationCommand } from "@/lib/interface/commands/invitation/update-invitation.command";
import { InvitationDto } from "@/lib/interface/dtos/invitations/invitation.dto";
import { UpdateInvitationRequestDto } from "@/lib/interface/dtos/invitations/update-invitation.request.dto";

class UpdateInvitationActionController {
  constructor(
    private readonly logManager: ILogManager,
    private readonly event: UpdateInvitationCommand,
    private readonly mapper: InvitationsMapper,
  ) {}
  async execute(input: UpdateInvitationRequestDto): Promise<InvitationDto> {
    this.logManager.debug(
      "UpdateInvitationActionController.execute invoked:",
      input,
    );
    return this.mapper.toResponse(await this.event.execute(input));
  }
}

export default async function UpdateInvitationAction(
  input: UpdateInvitationRequestDto,
): Promise<InvitationDto> {
  const logManager = new LogManager({ debug: container.debug });
  const port = new InvitationsPort(
    databaseAdapter,
    new InvitationsMapper(),
    logManager,
  );
  const service = new UpdateInvitationApplicationService(logManager, port);
  const command = new UpdateInvitationCommand(logManager, service);
  const mapper = new InvitationsMapper();
  const controller = new UpdateInvitationActionController(
    logManager,
    command,
    mapper,
  );
  return await controller.execute(input);
}
