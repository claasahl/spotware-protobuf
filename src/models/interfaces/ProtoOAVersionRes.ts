import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAVersionRes extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_VERSION_RES;
  version: string;
}
