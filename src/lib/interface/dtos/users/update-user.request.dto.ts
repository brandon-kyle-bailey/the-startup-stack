import { UserRoleEnum } from "@/lib/common/enum/user-role.enum";

export interface UpdateUserRequestDto {
  id: number;
  name?: string;
  email?: string;
  password_hash?: string;
  role?: UserRoleEnum;
}
