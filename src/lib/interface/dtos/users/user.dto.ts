import { UserRoleEnum } from "@/lib/common/enum/user-role.enum";

export interface UserDto {
  id: number;
  name?: string;
  email: string;
  role?: UserRoleEnum;
}
