export interface ProtoOAClosePositionDetail {
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
