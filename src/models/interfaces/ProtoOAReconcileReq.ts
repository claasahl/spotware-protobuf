import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAReconcileReq extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_RECONCILE_REQ;
  ctidTraderAccountId: number;
  returnProtectionOrders?: boolean;
}
