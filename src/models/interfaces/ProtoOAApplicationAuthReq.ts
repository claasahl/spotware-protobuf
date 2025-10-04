import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAApplicationAuthReq extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_APPLICATION_AUTH_REQ;
  clientId: string;
  clientSecret: string;
}
