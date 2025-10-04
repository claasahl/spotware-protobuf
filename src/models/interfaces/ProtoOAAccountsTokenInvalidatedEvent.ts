import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAAccountsTokenInvalidatedEvent extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT;
  ctidTraderAccountIds?: ReadonlyArray<number>;
  reason?: string;
}
