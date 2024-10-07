import {
  InternalServerErrorException,
  NotFoundException,
} from "@/lib/common/exceptions/exceptions";
import { ILogManager } from "@/lib/common/port/log/log-manager.port";
import { InvitationsPort } from "@/lib/core/application/ports/invitations.port";
import { InvitationEntity } from "@/lib/core/domain/entities/invitation.entity";
import { UpdateInvitationRequestDto } from "@/lib/interface/dtos/invitations/update-invitation.request.dto";

export class UpdateInvitationApplicationService {
  constructor(
    private readonly logManager: ILogManager,
    private readonly port: InvitationsPort,
  ) {}
  async execute(input: UpdateInvitationRequestDto): Promise<InvitationEntity> {
    this.logManager.debug(
      "UpdateInvitationApplicationService.execute invoked:",
      input,
    );
    try {
      const foundEntity = await this.port.getById(input.id);
      if (!foundEntity) {
        throw new NotFoundException();
      }
      foundEntity.setStatus(input.status);
      return await this.port.update(foundEntity.id, foundEntity);
    } catch (error) {
      this.logManager.error(
        "UpdateInvitationApplicationService.execute encountered an error:",
        error,
      );
      throw new InternalServerErrorException();
    }
  }
}
