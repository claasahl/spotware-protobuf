import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAGetDynamicLeverageByIDReq extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_GET_DYNAMIC_LEVERAGE_REQ;
  ctidTraderAccountId: number;
  leverageId: number;
}
