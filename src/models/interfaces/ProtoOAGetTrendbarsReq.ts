import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOATrendbarPeriod } from "../enums/ProtoOATrendbarPeriod.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAGetTrendbarsReq extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_REQ;
  ctidTraderAccountId: number;
  fromTimestamp?: number;
  toTimestamp?: number;
  period: ProtoOATrendbarPeriod;
  symbolId: number;
  count?: number;
}
