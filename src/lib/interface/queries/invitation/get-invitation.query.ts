import { ILogManager } from "@/lib/common/port/log/log-manager.port";
import { InvitationsPort } from "@/lib/core/application/ports/invitations.port";
import { InvitationEntity } from "@/lib/core/domain/entities/invitation.entity";
import { GetInvitationRequestDto } from "@/lib/interface/dtos/invitations/get-invitation.request.dto";

export class GetInvitationQuery {
  constructor(
    private readonly logManager: ILogManager,
    private readonly port: InvitationsPort,
  ) {}
  async execute(
    input: GetInvitationRequestDto,
  ): Promise<InvitationEntity | null> {
    this.logManager.debug("GetInvitationQuery.execute invoked:", input);
    const invitation = await this.port.getById(input.id);
    if (!invitation) {
      this.logManager.debug("invitation not found");
      return null;
    }
    return invitation;
  }
}
