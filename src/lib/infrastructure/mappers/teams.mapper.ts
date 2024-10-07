import { IMapper } from "@/lib/common/ddd/mapper.base";
import { TeamEntity } from "@/lib/core/domain/entities/team.entity";
import { TeamDto } from "@/lib/interface/dtos/teams/team.dto";

export interface TeamPersistenceDto {
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
  stripe_customer_id?: string;
  stripe_subscription_id?: string;
  stripe_product_id?: string;
  plan_name?: string;
  subscription_status?: string;
}
export class TeamsMapper
  implements IMapper<TeamPersistenceDto, TeamEntity, TeamDto>
{
  toPersistence(entity: TeamEntity): TeamPersistenceDto {
    return {
      id: entity.id,
      name: entity.name(),
      created_at: entity.created_at(),
      updated_at: entity.updated_at(),
      stripe_customer_id: entity.stripe_customer_id(),
      stripe_subscription_id: entity.stripe_subscription_id(),
      stripe_product_id: entity.stripe_product_id(),
      plan_name: entity.plan_name(),
      subscription_status: entity.subscription_status(),
    };
  }
  toDomain(record: TeamPersistenceDto): TeamEntity {
    return TeamEntity.create(
      {
        name: record.name,
        created_at: record.created_at,
        updated_at: record.updated_at,
        stripe_customer_id: record.stripe_customer_id,
        stripe_subscription_id: record.stripe_subscription_id,
        stripe_product_id: record.stripe_product_id,
        plan_name: record.plan_name,
        subscription_status: record.subscription_status,
      },
      record.id,
    );
  }
  toResponse(entity: TeamEntity): TeamDto {
    return {
      id: entity.id,
      name: entity.name(),
      created_at: entity.created_at(),
      updated_at: entity.updated_at(),
      stripe_customer_id: entity.stripe_customer_id(),
      stripe_subscription_id: entity.stripe_subscription_id(),
      stripe_product_id: entity.stripe_product_id(),
      plan_name: entity.plan_name(),
      subscription_status: entity.subscription_status(),
    };
  }
}
