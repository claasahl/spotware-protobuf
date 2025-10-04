import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAAccountLogoutReq extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_REQ;
  ctidTraderAccountId: number;
}
