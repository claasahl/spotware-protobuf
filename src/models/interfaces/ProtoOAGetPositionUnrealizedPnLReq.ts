import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAGetPositionUnrealizedPnLReq extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_GET_POSITION_UNREALIZED_PNL_REQ;
  ctidTraderAccountId: number;
}
