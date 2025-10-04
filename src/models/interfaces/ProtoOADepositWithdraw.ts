import type { ProtoOAChangeBalanceType } from "../enums/ProtoOAChangeBalanceType.ts";

export interface ProtoOADepositWithdraw {
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
