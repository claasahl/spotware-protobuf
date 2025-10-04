import type { ProtoOATradeData } from "./ProtoOATradeData.ts";
import type { ProtoOAPositionStatus } from "../enums/ProtoOAPositionStatus.ts";
import type { ProtoOAOrderTriggerMethod } from "../enums/ProtoOAOrderTriggerMethod.ts";

export interface ProtoOAPosition {
  positionId: number;
  tradeData: ProtoOATradeData;
  positionStatus: ProtoOAPositionStatus;
  swap: number;
  price?: number;
  stopLoss?: number;
  takeProfit?: number;
  utcLastUpdateTimestamp?: number;
  commission?: number;
  marginRate?: number;
  mirroringCommission?: number;
  guaranteedStopLoss?: boolean;
  usedMargin?: number;
  stopLossTriggerMethod?: ProtoOAOrderTriggerMethod;
  moneyDigits?: number;
  trailingStopLoss?: boolean;
}
