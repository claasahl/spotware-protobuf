import Pbf from "pbf";

import { ProtoOALightSymbol } from "../interfaces/ProtoOALightSymbol.js";

export class ProtoOALightSymbolUtils {
  static default(
    partialMessage?: Partial<ProtoOALightSymbol>,
  ): ProtoOALightSymbol {
    return {
      symbolId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOALightSymbol {
    return pbf.readFields(
      ProtoOALightSymbolUtils._readField,
      ProtoOALightSymbolUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOALightSymbol,
    pbf: Pbf,
  ) {
    if (tag === 1) message.symbolId = pbf.readVarint64();
    if (tag === 2) message.symbolName = pbf.readString();
    if (tag === 3) message.enabled = pbf.readBoolean();
    if (tag === 4) message.baseAssetId = pbf.readVarint64();
    if (tag === 5) message.quoteAssetId = pbf.readVarint64();
    if (tag === 6) message.symbolCategoryId = pbf.readVarint64();
    if (tag === 7) message.description = pbf.readString();
    if (tag === 8) message.sortingNumber = pbf.readDouble();
  }

  static write(message: ProtoOALightSymbol, pbf: Pbf): void {
    const {
      symbolId,
      symbolName,
      enabled,
      baseAssetId,
      quoteAssetId,
      symbolCategoryId,
      description,
      sortingNumber,
    } = message;
    if (symbolId !== undefined && symbolId !== null)
      pbf.writeVarintField(1, symbolId);
    if (symbolName !== undefined && symbolName !== null)
      pbf.writeStringField(2, symbolName);
    if (enabled !== undefined && enabled !== null)
      pbf.writeBooleanField(3, enabled);
    if (baseAssetId !== undefined && baseAssetId !== null)
      pbf.writeVarintField(4, baseAssetId);
    if (quoteAssetId !== undefined && quoteAssetId !== null)
      pbf.writeVarintField(5, quoteAssetId);
    if (symbolCategoryId !== undefined && symbolCategoryId !== null)
      pbf.writeVarintField(6, symbolCategoryId);
    if (description !== undefined && description !== null)
      pbf.writeStringField(7, description);
    if (sortingNumber !== undefined && sortingNumber !== null)
      pbf.writeDoubleField(8, sortingNumber);
  }
}
