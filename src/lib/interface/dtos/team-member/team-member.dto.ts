import { UserRoleEnum } from "@/lib/common/enum/user-role.enum";

export interface TeamMemberDto {
  id: string;
  user_id: string;
  team_id: string;
  role: UserRoleEnum;
  joined_at: Date;
}
