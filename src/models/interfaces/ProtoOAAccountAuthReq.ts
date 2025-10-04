import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAAccountAuthReq extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_REQ;
  ctidTraderAccountId: number;
  accessToken: string;
}
