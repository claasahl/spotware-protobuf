import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOAOrderTriggerMethod } from "../enums/ProtoOAOrderTriggerMethod.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAAmendPositionSLTPReq extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_AMEND_POSITION_SLTP_REQ;
  ctidTraderAccountId: number;
  positionId: number;
  stopLoss?: number;
  takeProfit?: number;
  guaranteedStopLoss?: boolean;
  trailingStopLoss?: boolean;
  stopLossTriggerMethod?: ProtoOAOrderTriggerMethod;
}
