import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOAQuoteType } from "../enums/ProtoOAQuoteType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAGetTickDataReq extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_REQ;
  ctidTraderAccountId: number;
  symbolId: number;
  type: ProtoOAQuoteType;
  fromTimestamp?: number;
  toTimestamp?: number;
}
