"use server";

import { LogManager } from "@/lib/common/port/log/log-manager.port";
import { UsersPort } from "@/lib/core/application/ports/users.port";
import { databaseAdapter } from "@/lib/infrastructure/adapters/database/database.adapter";
import { UsersMapper } from "@/lib/infrastructure/mappers/users.mapper";
import { CreateUserRequestDto } from "@/lib/interface/dtos/users/create-user.request.dto";
import { DeleteUserRequestDto } from "@/lib/interface/dtos/users/delete-user.request.dto";
import { GetUserByIdRequestDto } from "@/lib/interface/dtos/users/get-user-by-id.request.dto";
import { UpdateUserRequestDto } from "@/lib/interface/dtos/users/update-user.request.dto";
import { UserDto } from "@/lib/interface/dtos/users/user.dto";

const logManager = new LogManager({ debug: true });
const userMapper = new UsersMapper();
const userPort = new UsersPort(databaseAdapter, userMapper, logManager);

export async function getUserById(
  input: GetUserByIdRequestDto,
): Promise<UserDto> {
  return userMapper.toResponse(await userPort.getById(input.id));
}

export async function createUser(
  input: CreateUserRequestDto,
): Promise<UserDto> {
  return userMapper.toResponse(
    await userPort.create(userMapper.toDomain(input)),
  );
}

export async function updateUser(
  input: UpdateUserRequestDto,
): Promise<UserDto> {
  return userMapper.toResponse(
    await userPort.update(input.id, userMapper.toDomain(input)),
  );
}

export async function deleteUser(
  input: DeleteUserRequestDto,
): Promise<UserDto> {
  return userMapper.toResponse(await userPort.delete(input.id));
}
