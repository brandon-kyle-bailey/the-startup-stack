import { IMapper } from "@/lib/common/ddd/mapper.base";
import { ILogManager } from "@/lib/common/port/log/log-manager.port";
import { BasePort } from "@/lib/core/application/ports/base/base.port";
import { databaseAdapter } from "@/lib/infrastructure/adapters/database/database.adapter";

export type IUsersPort = BasePort<any>;

export class UsersPort extends BasePort<any> implements IUsersPort {
  private _model: typeof databaseAdapter.users;
  constructor(
    private readonly adapter: typeof databaseAdapter,
    private readonly modelMapper: IMapper<any, any, any>,
    protected readonly logManager: ILogManager,
  ) {
    super(adapter.users, modelMapper, logManager);
    this._model = this.adapter.users;
  }

  async getByEmail(email: string): Promise<any> {
    const record = await this._model.findUnique({ where: { email } });
    return this.modelMapper.toDomain(record);
  }
}
