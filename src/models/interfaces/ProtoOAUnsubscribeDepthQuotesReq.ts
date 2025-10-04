import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAUnsubscribeDepthQuotesReq extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ;
  ctidTraderAccountId: number;
  symbolId?: ReadonlyArray<number>;
}
