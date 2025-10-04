import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOAPositionUnrealizedPnL } from "./ProtoOAPositionUnrealizedPnL.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAGetPositionUnrealizedPnLRes extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_GET_POSITION_UNREALIZED_PNL_RES;
  ctidTraderAccountId: number;
  positionUnrealizedPnL?: ReadonlyArray<ProtoOAPositionUnrealizedPnL>;
  moneyDigits: number;
}
