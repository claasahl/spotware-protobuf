import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOASubscribeDepthQuotesReq extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ;
  ctidTraderAccountId: number;
  symbolId?: ReadonlyArray<number>;
}
