import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOATrendbarPeriod } from "../enums/ProtoOATrendbarPeriod.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAUnsubscribeLiveTrendbarReq extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ;
  ctidTraderAccountId: number;
  period: ProtoOATrendbarPeriod;
  symbolId: number;
}
