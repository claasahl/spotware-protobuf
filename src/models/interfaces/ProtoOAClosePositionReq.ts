import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAClosePositionReq extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_CLOSE_POSITION_REQ;
  ctidTraderAccountId: number;
  positionId: number;
  volume: number;
}
