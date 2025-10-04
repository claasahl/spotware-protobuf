import Pbf from "pbf";

import { ProtoOADepthQuote } from "../interfaces/ProtoOADepthQuote.js";

export class ProtoOADepthQuoteUtils {
  static default(
    partialMessage?: Partial<ProtoOADepthQuote>,
  ): ProtoOADepthQuote {
    return {
      id: 0,
      size: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOADepthQuote {
    return pbf.readFields(
      ProtoOADepthQuoteUtils._readField,
      ProtoOADepthQuoteUtils.default(),
      end,
    );
  }

  private static _readField(tag: number, message: ProtoOADepthQuote, pbf: Pbf) {
    if (tag === 1) message.id = pbf.readVarint64();
    if (tag === 3) message.size = pbf.readVarint64();
    if (tag === 4) message.bid = pbf.readVarint64();
    if (tag === 5) message.ask = pbf.readVarint64();
  }

  static write(message: ProtoOADepthQuote, pbf: Pbf): void {
    const { id, size, bid, ask } = message;
    if (id !== undefined && id !== null) pbf.writeVarintField(1, id);
    if (size !== undefined && size !== null) pbf.writeVarintField(3, size);
    if (bid !== undefined && bid !== null) pbf.writeVarintField(4, bid);
    if (ask !== undefined && ask !== null) pbf.writeVarintField(5, ask);
  }
}
