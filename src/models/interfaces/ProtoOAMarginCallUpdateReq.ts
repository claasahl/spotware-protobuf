import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOAMarginCall } from "./ProtoOAMarginCall.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAMarginCallUpdateReq extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_REQ;
  ctidTraderAccountId: number;
  marginCall: ProtoOAMarginCall;
}
