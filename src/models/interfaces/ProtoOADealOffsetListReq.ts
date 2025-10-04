import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOADealOffsetListReq extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_DEAL_OFFSET_LIST_REQ;
  ctidTraderAccountId: number;
  dealId: number;
}
