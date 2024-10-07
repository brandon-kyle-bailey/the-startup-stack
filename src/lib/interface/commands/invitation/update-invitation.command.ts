import { ILogManager } from "@/lib/common/port/log/log-manager.port";
import { UpdateInvitationApplicationService } from "@/lib/core/application/services/invitation/update-invitation.application-service";
import { InvitationEntity } from "@/lib/core/domain/entities/invitation.entity";
import { UpdateInvitationRequestDto } from "@/lib/interface/dtos/invitations/update-invitation.request.dto";

export class UpdateInvitationCommand {
  constructor(
    private readonly logManager: ILogManager,
    private readonly service: UpdateInvitationApplicationService,
  ) {}
  async execute(input: UpdateInvitationRequestDto): Promise<InvitationEntity> {
    this.logManager.debug("UpdateInvitationCommand.execute invoked:", input);
    return await this.service.execute(input);
  }
}
