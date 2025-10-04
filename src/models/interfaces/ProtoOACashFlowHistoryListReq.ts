import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOACashFlowHistoryListReq extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ;
  ctidTraderAccountId: number;
  fromTimestamp: number;
  toTimestamp: number;
}
