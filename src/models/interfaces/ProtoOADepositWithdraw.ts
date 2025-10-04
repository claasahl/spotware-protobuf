import type { ProtoOAChangeBalanceType } from "../enums/ProtoOAChangeBalanceType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOADepositWithdraw extends BaseMessage {
  operationType: ProtoOAChangeBalanceType;
  balanceHistoryId: number;
  balance: number;
  delta: number;
  changeBalanceTimestamp: number;
  externalNote?: string;
  balanceVersion?: number;
  equity?: number;
  moneyDigits?: number;
}
