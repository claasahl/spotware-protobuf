import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOASymbolsForConversionReq extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ;
  ctidTraderAccountId: number;
  firstAssetId: number;
  lastAssetId: number;
}
