import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOASubscribeLiveTrendbarRes extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_RES;
  ctidTraderAccountId: number;
}
