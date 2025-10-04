import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAOrderDetailsReq extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_ORDER_DETAILS_REQ;
  ctidTraderAccountId: number;
  orderId: number;
}
