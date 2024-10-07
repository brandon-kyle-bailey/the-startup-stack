import { Entity } from "@/lib/common/ddd/entity.base";
import { IMapper } from "@/lib/common/ddd/mapper.base";
import { NotFoundException } from "@/lib/common/exceptions/exceptions";
import { ILogManager } from "@/lib/common/port/log/log-manager.port";
import {
  PaginatedResponse,
  toPaginatedResult,
} from "@/lib/common/utils/paginate.util";

export interface IBasePort<T> {
  getById(id: string): Promise<T | null>;
  create(entity: T): Promise<T>;
  update(id: string, entity: T): Promise<T>;
  list(first?: number, after?: number): Promise<PaginatedResponse<T>>;
  delete(id: string): Promise<T>;
}

export abstract class BasePort<T extends Entity<any>> implements IBasePort<T> {
  constructor(
    private repo: any,
    private mapper: IMapper<any, T, any>,
    protected readonly logManager: ILogManager,
  ) {}
  async getById(id: string): Promise<T | null> {
    const record = await this.repo.findFirst({ where: { id } });
    if (!record) {
      return null;
    }
    return this.mapper.toDomain(record);
  }
  async create(entity: T): Promise<T> {
    const model = this.mapper.toPersistence(entity);
    const record = await this.repo.create({
      data: model,
    });
    return this.mapper.toDomain(record);
  }
  async update(id: string, entity: T): Promise<T> {
    const foundRecord = await this.getById(id);
    if (!foundRecord) {
      throw new NotFoundException(`Cannot find by id: ${id}`);
    }
    const model = this.mapper.toPersistence(entity);
    const record = await this.repo.update({
      where: { id },
      data: model,
    });
    return this.mapper.toDomain(record);
  }
  async list(first?: number, after?: number): Promise<PaginatedResponse<T>> {
    const records = await this.repo.findMany({
      skip: after ?? undefined,
      take: first ?? undefined,
    });
    if (!records) {
      throw new NotFoundException(
        `Cannot find many: first: ${first}, after: ${after}`,
      );
    }
    return toPaginatedResult(
      records.map((record: any) => this.mapper.toDomain(record)),
      records.length,
      after ?? records.length,
    );
  }
  async delete(id: string): Promise<T> {
    const foundRecord = await this.getById(id);
    if (!foundRecord) {
      throw new NotFoundException(`Cannot find by id: ${id}`);
    }
    const record = await this.repo.delete({
      where: { id },
    });
    return this.mapper.toDomain(record);
  }
}
