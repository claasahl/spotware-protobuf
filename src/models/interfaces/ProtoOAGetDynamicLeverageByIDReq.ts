import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAGetDynamicLeverageByIDReq extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_GET_DYNAMIC_LEVERAGE_REQ;
  ctidTraderAccountId: number;
  leverageId: number;
}
