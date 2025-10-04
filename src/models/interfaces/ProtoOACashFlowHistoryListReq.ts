import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOACashFlowHistoryListReq extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ;
  ctidTraderAccountId: number;
  fromTimestamp: number;
  toTimestamp: number;
}
