import { IMapper } from "@/lib/common/ddd/mapper.base";
import { ILogManager } from "@/lib/common/port/log/log-manager.port";
import { BasePort } from "@/lib/core/application/ports/base/base.port";
import { InvitationEntity } from "@/lib/core/domain/entities/invitation.entity";
import { databaseAdapter } from "@/lib/infrastructure/adapters/database/database.adapter";

export type IInvitationsPort = BasePort<InvitationEntity>;

export class InvitationsPort
  extends BasePort<InvitationEntity>
  implements IInvitationsPort
{
  private _model: typeof databaseAdapter.invitations;
  constructor(
    private readonly adapter: typeof databaseAdapter,
    private readonly modelMapper: IMapper<any, any, any>,
    protected readonly logManager: ILogManager,
  ) {
    super(adapter.invitations, modelMapper, logManager);
    this._model = this.adapter.invitations;
  }
}
