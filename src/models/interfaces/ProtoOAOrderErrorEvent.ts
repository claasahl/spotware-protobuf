import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAOrderErrorEvent extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_ORDER_ERROR_EVENT;
  ctidTraderAccountId: number;
  errorCode: string;
  orderId?: number;
  positionId?: number;
  description?: string;
}
