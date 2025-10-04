import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOATraderReq extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_TRADER_REQ;
  ctidTraderAccountId: number;
}
