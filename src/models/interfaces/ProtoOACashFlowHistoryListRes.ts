import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOADepositWithdraw } from "./ProtoOADepositWithdraw.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOACashFlowHistoryListRes extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_RES;
  ctidTraderAccountId: number;
  depositWithdraw?: ReadonlyArray<ProtoOADepositWithdraw>;
}
