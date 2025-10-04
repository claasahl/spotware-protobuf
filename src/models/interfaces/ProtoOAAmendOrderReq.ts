import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOAOrderTriggerMethod } from "../enums/ProtoOAOrderTriggerMethod.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAAmendOrderReq extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_AMEND_ORDER_REQ;
  ctidTraderAccountId: number;
  orderId: number;
  volume?: number;
  limitPrice?: number;
  stopPrice?: number;
  expirationTimestamp?: number;
  stopLoss?: number;
  takeProfit?: number;
  slippageInPoints?: number;
  relativeStopLoss?: number;
  relativeTakeProfit?: number;
  guaranteedStopLoss?: boolean;
  trailingStopLoss?: boolean;
  stopTriggerMethod?: ProtoOAOrderTriggerMethod;
}
