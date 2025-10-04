import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAMarginCallUpdateRes extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_RES;
}
