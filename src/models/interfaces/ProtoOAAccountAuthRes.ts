import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAAccountAuthRes extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_RES;
  ctidTraderAccountId: number;
}
