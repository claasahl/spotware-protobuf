import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOASubscribeDepthQuotesRes extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES;
  ctidTraderAccountId: number;
}
