import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOACancelOrderReq extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_CANCEL_ORDER_REQ;
  ctidTraderAccountId: number;
  orderId: number;
}
