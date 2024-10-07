import { UserRoleEnum } from "@/lib/common/enum/user-role.enum";

export interface CreateTeamMemberRequestDto {
  user_id: string;
  team_id: string;
  role: UserRoleEnum;
  joined_at: Date;
}
