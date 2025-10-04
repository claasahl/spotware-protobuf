import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOADealListReq extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_DEAL_LIST_REQ;
  ctidTraderAccountId: number;
  fromTimestamp?: number;
  toTimestamp?: number;
  maxRows?: number;
}
