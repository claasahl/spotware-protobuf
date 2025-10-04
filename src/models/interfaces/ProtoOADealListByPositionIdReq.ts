import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOADealListByPositionIdReq extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_DEAL_LIST_BY_POSITION_ID_REQ;
  ctidTraderAccountId: number;
  positionId: number;
  fromTimestamp?: number;
  toTimestamp?: number;
}
