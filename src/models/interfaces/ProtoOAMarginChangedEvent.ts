import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAMarginChangedEvent extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_MARGIN_CHANGED_EVENT;
  ctidTraderAccountId: number;
  positionId: number;
  usedMargin: number;
  moneyDigits?: number;
}
