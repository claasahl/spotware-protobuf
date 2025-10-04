import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOAMarginCall } from "./ProtoOAMarginCall.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAMarginCallTriggerEvent extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_TRIGGER_EVENT;
  ctidTraderAccountId: number;
  marginCall: ProtoOAMarginCall;
}
