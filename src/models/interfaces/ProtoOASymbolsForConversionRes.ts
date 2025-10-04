import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOALightSymbol } from "./ProtoOALightSymbol.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOASymbolsForConversionRes extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_RES;
  ctidTraderAccountId: number;
  symbol?: ReadonlyArray<ProtoOALightSymbol>;
}
