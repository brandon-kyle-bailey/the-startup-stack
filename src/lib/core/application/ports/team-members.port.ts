import { IMapper } from "@/lib/common/ddd/mapper.base";
import { ILogManager } from "@/lib/common/port/log/log-manager.port";
import { BasePort } from "@/lib/core/application/ports/base/base.port";
import { databaseAdapter } from "@/lib/infrastructure/adapters/database/database.adapter";

export type ITeamMembersPort = BasePort<any>;

export class TeamMembersPort extends BasePort<any> implements ITeamMembersPort {
  private _model: typeof databaseAdapter.team_members;
  constructor(
    private readonly adapter: typeof databaseAdapter,
    private readonly modelMapper: IMapper<any, any, any>,
    protected readonly logManager: ILogManager,
  ) {
    super(adapter.team_members, modelMapper, logManager);
    this._model = this.adapter.team_members;
  }
}
