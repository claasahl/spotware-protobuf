import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOAExecutionType } from "../enums/ProtoOAExecutionType.ts";
import type { ProtoOAPosition } from "./ProtoOAPosition.ts";
import type { ProtoOAOrder } from "./ProtoOAOrder.ts";
import type { ProtoOADeal } from "./ProtoOADeal.ts";
import type { ProtoOABonusDepositWithdraw } from "./ProtoOABonusDepositWithdraw.ts";
import type { ProtoOADepositWithdraw } from "./ProtoOADepositWithdraw.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAExecutionEvent extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_EXECUTION_EVENT;
  ctidTraderAccountId: number;
  executionType: ProtoOAExecutionType;
  position?: ProtoOAPosition;
  order?: ProtoOAOrder;
  deal?: ProtoOADeal;
  bonusDepositWithdraw?: ProtoOABonusDepositWithdraw;
  depositWithdraw?: ProtoOADepositWithdraw;
  errorCode?: string;
  isServerEvent?: boolean;
}
