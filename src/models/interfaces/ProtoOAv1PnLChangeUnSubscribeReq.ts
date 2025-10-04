import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAv1PnLChangeUnSubscribeReq extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_V1_PNL_CHANGE_UN_SUBSCRIBE_REQ;
  ctidTraderAccountId: number;
}
