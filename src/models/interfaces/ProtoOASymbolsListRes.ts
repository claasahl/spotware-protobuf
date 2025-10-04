import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOALightSymbol } from "./ProtoOALightSymbol.ts";
import type { ProtoOAArchivedSymbol } from "./ProtoOAArchivedSymbol.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOASymbolsListRes extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_RES;
  ctidTraderAccountId: number;
  symbol?: ReadonlyArray<ProtoOALightSymbol>;
  archivedSymbol?: ReadonlyArray<ProtoOAArchivedSymbol>;
}
