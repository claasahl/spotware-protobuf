import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOASymbolByIdReq extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_REQ;
  ctidTraderAccountId: number;
  symbolId?: ReadonlyArray<number>;
}
