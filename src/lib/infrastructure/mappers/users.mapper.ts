import { IMapper } from "@/lib/common/ddd/mapper.base";
import { UserDto } from "@/lib/interface/dtos/users/user.dto";

export class UsersMapper implements IMapper<any, any, UserDto> {
  toPersistence(entity: any) {
    return entity;
  }
  toDomain(record: any) {
    return record;
  }
  toResponse(entity: any): UserDto {
    return entity;
  }
}
