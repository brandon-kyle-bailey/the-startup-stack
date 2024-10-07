import { InvitationStatusEnum } from "@/lib/common/enum/invitation-status.enum";
import { UserRoleEnum } from "@/lib/common/enum/user-role.enum";

export interface InvitationDto {
  id: string;
  team_id: string;
  email: string;
  role: UserRoleEnum;
  invited_at: Date;
  invited_by: string;
  status: InvitationStatusEnum;
}
