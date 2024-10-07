import { IMapper } from "@/lib/common/ddd/mapper.base";
import { UserEntity } from "@/lib/core/domain/entities/user.entity";
import { UserDto } from "@/lib/interface/dtos/users/user.dto";

export class UsersMapper implements IMapper<any, any, UserDto> {
  toPersistence(entity: UserEntity) {
    return {
      name: entity.name(),
      email: entity.email(),
      password_hash: entity.password_hash(),
      role: entity.role(),
    };
  }
  toDomain(record: any): UserEntity {
    return UserEntity.create(
      {
        name: record.name,
        email: record.email,
        password_hash: record.password_hash,
        role: record.role,
      },
      record.id,
    );
  }
  toResponse(entity: UserEntity): UserDto {
    return {
      id: entity.id,
      name: entity.name(),
      email: entity.email(),
      role: entity.role(),
    };
  }
}
