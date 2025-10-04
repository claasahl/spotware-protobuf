import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAClientDisconnectEvent extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_CLIENT_DISCONNECT_EVENT;
  reason?: string;
}
