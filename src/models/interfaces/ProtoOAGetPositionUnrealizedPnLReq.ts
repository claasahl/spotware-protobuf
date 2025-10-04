import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAGetPositionUnrealizedPnLReq extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_GET_POSITION_UNREALIZED_PNL_REQ;
  ctidTraderAccountId: number;
}
