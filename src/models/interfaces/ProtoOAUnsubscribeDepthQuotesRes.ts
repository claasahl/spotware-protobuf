import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAUnsubscribeDepthQuotesRes extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES;
  ctidTraderAccountId: number;
}
