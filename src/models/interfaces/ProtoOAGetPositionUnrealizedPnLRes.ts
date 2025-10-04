import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOAPositionUnrealizedPnL } from "./ProtoOAPositionUnrealizedPnL.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAGetPositionUnrealizedPnLRes extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_GET_POSITION_UNREALIZED_PNL_RES;
  ctidTraderAccountId: number;
  positionUnrealizedPnL?: ReadonlyArray<ProtoOAPositionUnrealizedPnL>;
  moneyDigits: number;
}
