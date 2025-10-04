import Pbf from "pbf";

import { ProtoOALightSymbolUtils } from "./ProtoOALightSymbolUtils.js";
import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOASymbolsForConversionRes } from "../interfaces/ProtoOASymbolsForConversionRes.js";

export class ProtoOASymbolsForConversionResUtils {
  static default(
    partialMessage?: Partial<ProtoOASymbolsForConversionRes>,
  ): ProtoOASymbolsForConversionRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_RES,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOASymbolsForConversionRes {
    return pbf.readFields(
      ProtoOASymbolsForConversionResUtils._readField,
      ProtoOASymbolsForConversionResUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOASymbolsForConversionRes,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      message.symbol = [
        ...(message.symbol ?? []),
        ProtoOALightSymbolUtils.read(pbf, pbf.readVarint() + pbf.pos),
      ];
  }

  static write(message: ProtoOASymbolsForConversionRes, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, symbol } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (symbol !== undefined && symbol !== null)
      symbol.forEach((symbol) => ProtoOALightSymbolUtils.write(symbol, pbf));
  }
}
