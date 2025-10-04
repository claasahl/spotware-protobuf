import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAVersionRes extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_VERSION_RES;
  version: string;
}
