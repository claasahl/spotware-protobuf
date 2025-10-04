import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOATraderReq extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_TRADER_REQ;
  ctidTraderAccountId: number;
}
