import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAOrderErrorEvent extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_ORDER_ERROR_EVENT;
  ctidTraderAccountId: number;
  errorCode: string;
  orderId?: number;
  positionId?: number;
  description?: string;
}
