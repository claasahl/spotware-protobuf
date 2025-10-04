import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAOrderDetailsReq extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_ORDER_DETAILS_REQ;
  ctidTraderAccountId: number;
  orderId: number;
}
