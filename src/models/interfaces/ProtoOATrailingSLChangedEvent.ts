import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOATrailingSLChangedEvent extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_TRAILING_SL_CHANGED_EVENT;
  ctidTraderAccountId: number;
  positionId: number;
  orderId: number;
  stopPrice: number;
  utcLastUpdateTimestamp: number;
}
