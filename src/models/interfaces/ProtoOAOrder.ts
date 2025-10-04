import type { ProtoOATradeData } from "./ProtoOATradeData.ts";
import type { ProtoOAOrderType } from "../enums/ProtoOAOrderType.ts";
import type { ProtoOAOrderStatus } from "../enums/ProtoOAOrderStatus.ts";
import type { ProtoOATimeInForce } from "../enums/ProtoOATimeInForce.ts";
import type { ProtoOAOrderTriggerMethod } from "../enums/ProtoOAOrderTriggerMethod.ts";

export interface ProtoOAOrder {
  orderId: number;
  tradeData: ProtoOATradeData;
  orderType: ProtoOAOrderType;
  orderStatus: ProtoOAOrderStatus;
  expirationTimestamp?: number;
  executionPrice?: number;
  executedVolume?: number;
  utcLastUpdateTimestamp?: number;
  baseSlippagePrice?: number;
  slippageInPoints?: number;
  closingOrder?: boolean;
  limitPrice?: number;
  stopPrice?: number;
  stopLoss?: number;
  takeProfit?: number;
  clientOrderId?: string;
  timeInForce?: ProtoOATimeInForce;
  positionId?: number;
  relativeStopLoss?: number;
  relativeTakeProfit?: number;
  isStopOut?: boolean;
  trailingStopLoss?: boolean;
  stopTriggerMethod?: ProtoOAOrderTriggerMethod;
}
