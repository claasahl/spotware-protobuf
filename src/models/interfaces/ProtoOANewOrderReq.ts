import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOAOrderType } from "../enums/ProtoOAOrderType.ts";
import type { ProtoOATradeSide } from "../enums/ProtoOATradeSide.ts";
import type { ProtoOATimeInForce } from "../enums/ProtoOATimeInForce.ts";
import type { ProtoOAOrderTriggerMethod } from "../enums/ProtoOAOrderTriggerMethod.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOANewOrderReq extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_NEW_ORDER_REQ;
  ctidTraderAccountId: number;
  symbolId: number;
  orderType: ProtoOAOrderType;
  tradeSide: ProtoOATradeSide;
  volume: number;
  limitPrice?: number;
  stopPrice?: number;
  timeInForce?: ProtoOATimeInForce;
  expirationTimestamp?: number;
  stopLoss?: number;
  takeProfit?: number;
  comment?: string;
  baseSlippagePrice?: number;
  slippageInPoints?: number;
  label?: string;
  positionId?: number;
  clientOrderId?: string;
  relativeStopLoss?: number;
  relativeTakeProfit?: number;
  guaranteedStopLoss?: boolean;
  trailingStopLoss?: boolean;
  stopTriggerMethod?: ProtoOAOrderTriggerMethod;
}
