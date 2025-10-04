import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOAMarginCall } from "./ProtoOAMarginCall.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAMarginCallTriggerEvent extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_TRIGGER_EVENT;
  ctidTraderAccountId: number;
  marginCall: ProtoOAMarginCall;
}
