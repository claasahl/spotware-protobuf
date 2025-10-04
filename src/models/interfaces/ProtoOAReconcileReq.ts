import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAReconcileReq extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_RECONCILE_REQ;
  ctidTraderAccountId: number;
  returnProtectionOrders?: boolean;
}
