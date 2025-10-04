import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAMarginChangedEvent extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_MARGIN_CHANGED_EVENT;
  ctidTraderAccountId: number;
  positionId: number;
  usedMargin: number;
  moneyDigits?: number;
}
