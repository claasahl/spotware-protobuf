import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOASymbolCategory } from "./ProtoOASymbolCategory.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOASymbolCategoryListRes extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_RES;
  ctidTraderAccountId: number;
  symbolCategory?: ReadonlyArray<ProtoOASymbolCategory>;
}
