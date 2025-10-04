import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOALightSymbol } from "./ProtoOALightSymbol.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOASymbolsForConversionRes extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_RES;
  ctidTraderAccountId: number;
  symbol?: ReadonlyArray<ProtoOALightSymbol>;
}
