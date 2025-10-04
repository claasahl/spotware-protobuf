import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAAccountAuthRes extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_RES;
  ctidTraderAccountId: number;
}
