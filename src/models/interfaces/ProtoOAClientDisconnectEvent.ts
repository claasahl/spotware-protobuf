import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAClientDisconnectEvent extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_CLIENT_DISCONNECT_EVENT;
  reason?: string;
}
