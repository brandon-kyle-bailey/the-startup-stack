import { IMapper } from "@/lib/common/ddd/mapper.base";

export class UsersMapper implements IMapper<any, any, any> {
  toPersistence(entity: any) {
    return entity;
  }
  toDomain(record: any) {
    return record;
  }
  toResponse(entity: any) {
    return entity;
  }
}
