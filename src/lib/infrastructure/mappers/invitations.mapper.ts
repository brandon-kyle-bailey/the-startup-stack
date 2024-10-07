import { IMapper } from "@/lib/common/ddd/mapper.base";
import { InvitationStatusEnum } from "@/lib/common/enum/invitation-status.enum";
import { UserRoleEnum } from "@/lib/common/enum/user-role.enum";
import { InvitationEntity } from "@/lib/core/domain/entities/invitation.entity";
import { InvitationDto } from "@/lib/interface/dtos/invitations/invitation.dto";

export interface InvitationPersistenceDto {
  id: string;
  team_id: string;
  email: string;
  role: UserRoleEnum;
  invited_by: string;
  invited_at: Date;
  status: InvitationStatusEnum;
}

export class InvitationsMapper
  implements IMapper<InvitationPersistenceDto, InvitationEntity, InvitationDto>
{
  toPersistence(entity: InvitationEntity): InvitationPersistenceDto {
    return {
      id: entity.id,
      team_id: entity.team_id(),
      email: entity.email(),
      role: entity.role(),
      invited_by: entity.invited_by(),
      invited_at: entity.invited_at(),
      status: entity.status(),
    };
  }
  toDomain(record: InvitationPersistenceDto): InvitationEntity {
    return InvitationEntity.create(
      {
        team_id: record.team_id,
        email: record.email,
        role: record.role,
        invited_at: record.invited_at,
        invited_by: record.invited_by,
        status: record.status,
      },
      record.id,
    );
  }
  toResponse(entity: InvitationEntity): InvitationDto {
    return {
      id: entity.id,
      team_id: entity.team_id(),
      email: entity.email(),
      role: entity.role(),
      invited_by: entity.invited_by(),
      invited_at: entity.invited_at(),
      status: entity.status(),
    };
  }
}
