import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOADealOffsetListReq extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_DEAL_OFFSET_LIST_REQ;
  ctidTraderAccountId: number;
  dealId: number;
}
