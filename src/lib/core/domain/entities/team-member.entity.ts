import { Entity } from "@/lib/common/ddd/entity.base";
import { UserRoleEnum } from "@/lib/common/enum/user-role.enum";
import { v4 } from "uuid";

export interface TeamMemberEntityProps {
  user_id: string;
  team_id: string;
  role: UserRoleEnum;
  joined_at: Date;
}
export class TeamMemberEntity extends Entity<TeamMemberEntityProps> {
  protected _id!: string;
  static create(
    props: TeamMemberEntityProps,
    entityId?: string,
  ): TeamMemberEntity {
    const id = entityId || v4();
    const entity = new TeamMemberEntity({
      id,
      props,
    });
    return entity;
  }
  public validate() {}

  public user_id(): string {
    return this.props.user_id;
  }
  public team_id(): string {
    return this.props.team_id;
  }
  public role(): UserRoleEnum {
    return this.props.role;
  }
  public joined_at(): Date {
    return this.props.joined_at;
  }
}
