import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOADepthQuote } from "./ProtoOADepthQuote.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOADepthEvent extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_DEPTH_EVENT;
  ctidTraderAccountId: number;
  symbolId: number;
  newQuotes?: ReadonlyArray<ProtoOADepthQuote>;
  deletedQuotes?: ReadonlyArray<number>;
}
