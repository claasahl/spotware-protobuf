import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOASubscribeDepthQuotesReq extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ;
  ctidTraderAccountId: number;
  symbolId?: ReadonlyArray<number>;
}
