import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAAccountLogoutRes extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_RES;
  ctidTraderAccountId: number;
}
