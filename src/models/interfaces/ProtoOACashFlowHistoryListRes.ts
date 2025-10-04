import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOADepositWithdraw } from "./ProtoOADepositWithdraw.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOACashFlowHistoryListRes extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_RES;
  ctidTraderAccountId: number;
  depositWithdraw?: ReadonlyArray<ProtoOADepositWithdraw>;
}
