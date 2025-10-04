import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOASymbolCategoryListReq extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_REQ;
  ctidTraderAccountId: number;
}
