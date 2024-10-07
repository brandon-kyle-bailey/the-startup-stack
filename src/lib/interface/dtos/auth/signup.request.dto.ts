import { UserRoleEnum } from "@/lib/common/enum/user-role.enum";

export interface AuthSignupRequestDto {
  email: string;
  password: string;
}

export interface SignupRequestDto extends AuthSignupRequestDto {
  name: string;
  confirmPassword: string;
  role?: UserRoleEnum;
  priceId?: string;
  invitationId?: string;
  redirectUrl?: string;
}
