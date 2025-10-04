import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOACancelOrderReq extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_CANCEL_ORDER_REQ;
  ctidTraderAccountId: number;
  orderId: number;
}
