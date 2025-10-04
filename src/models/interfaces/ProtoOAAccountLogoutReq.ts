import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAAccountLogoutReq extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_REQ;
  ctidTraderAccountId: number;
}
