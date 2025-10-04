import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAAccountDisconnectEvent extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_ACCOUNT_DISCONNECT_EVENT;
  ctidTraderAccountId: number;
}
