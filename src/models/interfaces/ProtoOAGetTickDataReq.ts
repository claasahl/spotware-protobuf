import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOAQuoteType } from "../enums/ProtoOAQuoteType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAGetTickDataReq extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_REQ;
  ctidTraderAccountId: number;
  symbolId: number;
  type: ProtoOAQuoteType;
  fromTimestamp?: number;
  toTimestamp?: number;
}
