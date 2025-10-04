import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOADepthQuote } from "./ProtoOADepthQuote.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOADepthEvent extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_DEPTH_EVENT;
  ctidTraderAccountId: number;
  symbolId: number;
  newQuotes?: ReadonlyArray<ProtoOADepthQuote>;
  deletedQuotes?: ReadonlyArray<number>;
}
