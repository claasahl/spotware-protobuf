import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOASymbol } from "./ProtoOASymbol.ts";
import type { ProtoOAArchivedSymbol } from "./ProtoOAArchivedSymbol.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOASymbolByIdRes extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_RES;
  ctidTraderAccountId: number;
  symbol?: ReadonlyArray<ProtoOASymbol>;
  archivedSymbol?: ReadonlyArray<ProtoOAArchivedSymbol>;
}
