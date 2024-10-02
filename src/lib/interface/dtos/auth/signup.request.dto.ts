import { UserRoleEnum } from "@/lib/common/enum/user-role.enum";

export interface SignupRequestDto {
  name?: string;
  email: string;
  password: string;
  role?: UserRoleEnum;
}
