import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAClosePositionDetail extends BaseMessage {
  entryPrice: number;
  grossProfit: number;
  swap: number;
  commission: number;
  balance: number;
  quoteToDepositConversionRate?: number;
  closedVolume?: number;
  balanceVersion?: number;
  moneyDigits?: number;
  pnlConversionFee?: number;
}
