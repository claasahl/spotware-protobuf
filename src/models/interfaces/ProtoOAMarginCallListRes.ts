import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOAMarginCall } from "./ProtoOAMarginCall.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAMarginCallListRes extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_LIST_RES;
  marginCall?: ReadonlyArray<ProtoOAMarginCall>;
}
