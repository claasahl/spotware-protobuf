import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAApplicationAuthRes extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_RES;
}
