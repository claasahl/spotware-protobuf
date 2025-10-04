import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOATrendbarPeriod } from "../enums/ProtoOATrendbarPeriod.ts";
import type { ProtoOATrendbar } from "./ProtoOATrendbar.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAGetTrendbarsRes extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_RES;
  ctidTraderAccountId: number;
  period: ProtoOATrendbarPeriod;
  timestamp?: number;
  trendbar?: ReadonlyArray<ProtoOATrendbar>;
  symbolId?: number;
  hasMore?: boolean;
}
