import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOASymbolCategoryListReq extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_REQ;
  ctidTraderAccountId: number;
}
