import { IMapper } from "@/lib/common/ddd/mapper.base";

export class ActivityLogsMapper implements IMapper<any, any, any> {
  toPersistence(entity: any) {
    return entity;
  }
  toDomain(record: any) {
    return record;
  }
  toResponse(entity: any): any {
    return entity;
  }
}
