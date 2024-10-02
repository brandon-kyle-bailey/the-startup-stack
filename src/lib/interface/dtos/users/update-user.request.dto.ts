import { UserRoleEnum } from "@/lib/common/enum/user-role.enum";

export interface UpdateUserRequestDto {
  id: string;
  name?: string;
  email?: string;
  password_hash?: string;
  role?: UserRoleEnum;
}
