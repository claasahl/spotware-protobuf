import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAAccountsTokenInvalidatedEvent extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT;
  ctidTraderAccountIds?: ReadonlyArray<number>;
  reason?: string;
}
