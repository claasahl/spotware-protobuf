import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAOrderListReq extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_ORDER_LIST_REQ;
  ctidTraderAccountId: number;
  fromTimestamp?: number;
  toTimestamp?: number;
}
