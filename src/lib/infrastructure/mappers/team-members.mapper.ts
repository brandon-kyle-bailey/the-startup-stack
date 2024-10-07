import { IMapper } from "@/lib/common/ddd/mapper.base";
import { UserRoleEnum } from "@/lib/common/enum/user-role.enum";
import { TeamMemberEntity } from "@/lib/core/domain/entities/team-member.entity";
import { TeamMemberDto } from "@/lib/interface/dtos/team-member/team-member.dto";

export interface TeamMemberPersistenceDto {
  id: string;
  user_id: string;
  team_id: string;
  role: UserRoleEnum;
  joined_at: Date;
}
export class TeamMembersMapper
  implements IMapper<TeamMemberPersistenceDto, TeamMemberEntity, TeamMemberDto>
{
  toPersistence(entity: TeamMemberEntity): TeamMemberPersistenceDto {
    return {
      id: entity.id,
      user_id: entity.user_id(),
      team_id: entity.team_id(),
      role: entity.role(),
      joined_at: entity.joined_at(),
    };
  }
  toDomain(record: TeamMemberPersistenceDto): TeamMemberEntity {
    return TeamMemberEntity.create(
      {
        user_id: record.user_id,
        team_id: record.team_id,
        role: record.role,
        joined_at: record.joined_at,
      },
      record.id,
    );
  }
  toResponse(entity: TeamMemberEntity): TeamMemberDto {
    return {
      id: entity.id,
      user_id: entity.user_id(),
      team_id: entity.team_id(),
      role: entity.role(),
      joined_at: entity.joined_at(),
    };
  }
}
