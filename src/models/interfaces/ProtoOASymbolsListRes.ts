import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOALightSymbol } from "./ProtoOALightSymbol.ts";
import type { ProtoOAArchivedSymbol } from "./ProtoOAArchivedSymbol.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOASymbolsListRes extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_RES;
  ctidTraderAccountId: number;
  symbol?: ReadonlyArray<ProtoOALightSymbol>;
  archivedSymbol?: ReadonlyArray<ProtoOAArchivedSymbol>;
}
