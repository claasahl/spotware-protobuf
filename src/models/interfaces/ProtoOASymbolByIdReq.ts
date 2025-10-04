import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOASymbolByIdReq extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_REQ;
  ctidTraderAccountId: number;
  symbolId?: ReadonlyArray<number>;
}
