import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAOrderListReq extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_ORDER_LIST_REQ;
  ctidTraderAccountId: number;
  fromTimestamp?: number;
  toTimestamp?: number;
}
