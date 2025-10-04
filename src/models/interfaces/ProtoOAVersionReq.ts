import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAVersionReq extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_VERSION_REQ;
}
