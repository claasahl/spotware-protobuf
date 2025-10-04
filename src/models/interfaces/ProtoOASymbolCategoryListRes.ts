import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOASymbolCategory } from "./ProtoOASymbolCategory.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOASymbolCategoryListRes extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_RES;
  ctidTraderAccountId: number;
  symbolCategory?: ReadonlyArray<ProtoOASymbolCategory>;
}
