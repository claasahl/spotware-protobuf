import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOASymbolsListReq extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_REQ;
  ctidTraderAccountId: number;
  includeArchivedSymbols?: boolean;
}
