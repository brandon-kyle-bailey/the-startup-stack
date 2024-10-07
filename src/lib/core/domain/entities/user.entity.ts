import { Entity } from "@/lib/common/ddd/entity.base";
import { UserRoleEnum } from "@/lib/common/enum/user-role.enum";
import { v4 } from "uuid";

export interface UserEntityProps {
  name: string;
  email: string;
  password_hash: string;
  role: UserRoleEnum;
}
export class UserEntity extends Entity<UserEntityProps> {
  protected _id!: string;
  static create(props: UserEntityProps, entityId?: string): UserEntity {
    const id = entityId || v4();
    const entity = new UserEntity({
      id,
      props,
    });
    return entity;
  }
  public validate() {}

  public name(): string {
    return this.props.name;
  }
  public email(): string {
    return this.props.email;
  }
  public password_hash(): string {
    return this.props.password_hash;
  }
  public role(): UserRoleEnum {
    return this.props.role;
  }
}
