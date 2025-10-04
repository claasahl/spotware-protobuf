import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAApplicationAuthReq extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_REQ;
  clientId: string;
  clientSecret: string;
}
