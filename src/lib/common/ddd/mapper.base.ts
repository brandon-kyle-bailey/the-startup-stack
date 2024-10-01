import { Entity } from "@/lib/common/ddd/entity.base";

export interface IMapper<
  DbRecord,
  DomainEntity extends Entity<any>,
  Response = any,
> {
  toPersistence(entity: DomainEntity): DbRecord;
  toDomain(record: any): DomainEntity;
  toResponse(entity: DomainEntity): Response;
}
