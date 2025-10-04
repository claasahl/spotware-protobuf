import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAMarginCallListReq extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_LIST_REQ;
  ctidTraderAccountId: number;
}
