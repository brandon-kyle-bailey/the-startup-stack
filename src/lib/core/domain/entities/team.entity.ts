import { Entity } from "@/lib/common/ddd/entity.base";
import { v4 } from "uuid";

export interface TeamEntityProps {
  name: string;
  created_at: string;
  updated_at: string;
  stripe_customer_id?: string;
  stripe_subscription_id?: string;
  stripe_product_id?: string;
  plan_name?: string;
  subscription_status?: string;
}
export class TeamEntity extends Entity<TeamEntityProps> {
  protected _id!: string;
  static create(props: TeamEntityProps, entityId?: string): TeamEntity {
    const id = entityId || v4();
    const entity = new TeamEntity({
      id,
      props,
    });
    return entity;
  }
  public validate() {}

  public name(): string {
    return this.props.name;
  }
  public created_at(): string {
    return this.props.name;
  }
  public updated_at(): string {
    return this.props.name;
  }
  public stripe_customer_id(): string {
    return this.props.name;
  }
  public stripe_subscription_id(): string {
    return this.props.name;
  }
  public stripe_product_id(): string {
    return this.props.name;
  }
  public plan_name(): string {
    return this.props.name;
  }
  public subscription_status(): string {
    return this.props.name;
  }
}
