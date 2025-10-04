import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOASymbolsListReq extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_REQ;
  ctidTraderAccountId: number;
  includeArchivedSymbols?: boolean;
}
