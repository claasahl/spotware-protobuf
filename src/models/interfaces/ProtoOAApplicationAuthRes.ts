import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAApplicationAuthRes extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_RES;
}
