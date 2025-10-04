import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOATrailingSLChangedEvent extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_TRAILING_SL_CHANGED_EVENT;
  ctidTraderAccountId: number;
  positionId: number;
  orderId: number;
  stopPrice: number;
  utcLastUpdateTimestamp: number;
}
