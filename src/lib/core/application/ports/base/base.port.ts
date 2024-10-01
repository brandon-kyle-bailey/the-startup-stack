import { Entity } from "@/lib/common/ddd/entity.base";
import { IMapper } from "@/lib/common/ddd/mapper.base";
import { NotFoundException } from "@/lib/common/exceptions/exceptions";
import { ILogManager } from "@/lib/common/port/log/log-manager.port";

export interface IBasePort<T> {
  getById(id: number): Promise<T>;
  // create(entity: T, createdBy: string): Promise<T>;
  // update(entity: T, updatedBy: string): Promise<T>;
  // list(first?: number, after?: number): Promise<PaginatedResponse<T>>;
  // delete(id: string, accountId: string, deletedBy: string): Promise<T>;
}

export abstract class BasePort<T extends Entity<any>> implements IBasePort<T> {
  constructor(
    private repo: any,
    private mapper: IMapper<any, T, any>,
    protected readonly logManager: ILogManager,
  ) {}
  async getById(id: number): Promise<T> {
    this.logManager.debug(`executing getById: ${id}`);
    const record = await this.repo.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(`Cannot find by id: ${id}`);
    }
    return this.mapper.toDomain(record);
  }
  // async create(entity: T, createdBy: string): Promise<T> {}
  // async update(entity: T, updatedBy: string): Promise<T> {}
  // async list(first?: number, after?: number): Promise<PaginatedResponse<T>> {}
  // async delete(id: string, accountId: string, deletedBy: string): Promise<T> {}
}
