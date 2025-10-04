import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOAMarginCall } from "./ProtoOAMarginCall.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAMarginCallUpdateReq extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_REQ;
  ctidTraderAccountId: number;
  marginCall: ProtoOAMarginCall;
}
