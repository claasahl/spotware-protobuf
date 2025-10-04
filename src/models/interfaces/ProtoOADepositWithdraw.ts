import type { ProtoOAChangeBalanceType } from "../enums/ProtoOAChangeBalanceType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOADepositWithdraw extends ProtoMessage {
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
