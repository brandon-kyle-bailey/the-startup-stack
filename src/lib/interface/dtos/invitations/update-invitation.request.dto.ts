import { InvitationStatusEnum } from "@/lib/common/enum/invitation-status.enum";

export interface UpdateInvitationRequestDto {
  id: string;
  status: InvitationStatusEnum;
}
