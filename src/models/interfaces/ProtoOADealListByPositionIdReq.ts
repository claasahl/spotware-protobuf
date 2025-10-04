import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOADealListByPositionIdReq extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_DEAL_LIST_BY_POSITION_ID_REQ;
  ctidTraderAccountId: number;
  positionId: number;
  fromTimestamp?: number;
  toTimestamp?: number;
}
