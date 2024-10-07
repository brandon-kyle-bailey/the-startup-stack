import { Entity } from "@/lib/common/ddd/entity.base";
import { InvitationStatusEnum } from "@/lib/common/enum/invitation-status.enum";
import { UserRoleEnum } from "@/lib/common/enum/user-role.enum";
import { v4 } from "uuid";

export interface InvitationEntityProps {
  team_id: string;
  email: string;
  role: UserRoleEnum;
  invited_at: Date;
  invited_by: string;
  status: InvitationStatusEnum;
}
export class InvitationEntity extends Entity<InvitationEntityProps> {
  protected _id!: string;
  static create(
    props: InvitationEntityProps,
    entityId?: string,
  ): InvitationEntity {
    const id = entityId || v4();
    const entity = new InvitationEntity({
      id,
      props,
    });
    return entity;
  }
  public validate() {}

  public team_id(): string {
    return this.props.team_id;
  }
  public email(): string {
    return this.props.email;
  }
  public role(): UserRoleEnum {
    return this.props.role;
  }
  public invited_at(): Date {
    return this.props.invited_at;
  }
  public invited_by(): string {
    return this.props.invited_by;
  }
  public status(): InvitationStatusEnum {
    return this.props.status;
  }

  public setStatus(status: InvitationStatusEnum): void {
    this.props.status = status;
  }
}
