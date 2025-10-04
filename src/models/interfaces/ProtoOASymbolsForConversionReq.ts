import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOASymbolsForConversionReq extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ;
  ctidTraderAccountId: number;
  firstAssetId: number;
  lastAssetId: number;
}
