import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOATrendbarPeriod } from "../enums/ProtoOATrendbarPeriod.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAUnsubscribeLiveTrendbarReq extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ;
  ctidTraderAccountId: number;
  period: ProtoOATrendbarPeriod;
  symbolId: number;
}
