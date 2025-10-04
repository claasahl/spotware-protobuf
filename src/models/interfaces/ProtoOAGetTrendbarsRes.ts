import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOATrendbarPeriod } from "../enums/ProtoOATrendbarPeriod.ts";
import type { ProtoOATrendbar } from "./ProtoOATrendbar.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAGetTrendbarsRes extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_RES;
  ctidTraderAccountId: number;
  period: ProtoOATrendbarPeriod;
  timestamp?: number;
  trendbar?: ReadonlyArray<ProtoOATrendbar>;
  symbolId?: number;
  hasMore?: boolean;
}
