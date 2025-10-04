import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAAccountAuthReq extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_REQ;
  ctidTraderAccountId: number;
  accessToken: string;
}
