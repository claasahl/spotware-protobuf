import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOAPosition } from "./ProtoOAPosition.ts";
import type { ProtoOAOrder } from "./ProtoOAOrder.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAReconcileRes extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_RECONCILE_RES;
  ctidTraderAccountId: number;
  position?: ReadonlyArray<ProtoOAPosition>;
  order?: ReadonlyArray<ProtoOAOrder>;
}
