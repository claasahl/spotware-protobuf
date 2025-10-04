import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAClosePositionReq extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_CLOSE_POSITION_REQ;
  ctidTraderAccountId: number;
  positionId: number;
  volume: number;
}
