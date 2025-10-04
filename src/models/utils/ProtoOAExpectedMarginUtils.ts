import Pbf from "pbf";

import { ProtoOAExpectedMargin } from "../interfaces/ProtoOAExpectedMargin.js";

export class ProtoOAExpectedMarginUtils {
  static default(
    partialMessage?: Partial<ProtoOAExpectedMargin>,
  ): ProtoOAExpectedMargin {
    return {
      volume: 0,
      buyMargin: 0,
      sellMargin: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAExpectedMargin {
    return pbf.readFields(
      ProtoOAExpectedMarginUtils._readField,
      ProtoOAExpectedMarginUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAExpectedMargin,
    pbf: Pbf,
  ) {
    if (tag === 1) message.volume = pbf.readVarint64();
    if (tag === 2) message.buyMargin = pbf.readVarint64();
    if (tag === 3) message.sellMargin = pbf.readVarint64();
  }

  static write(message: ProtoOAExpectedMargin, pbf: Pbf): void {
    const { volume, buyMargin, sellMargin } = message;
    if (volume !== undefined && volume !== null)
      pbf.writeVarintField(1, volume);
    if (buyMargin !== undefined && buyMargin !== null)
      pbf.writeVarintField(2, buyMargin);
    if (sellMargin !== undefined && sellMargin !== null)
      pbf.writeVarintField(3, sellMargin);
  }
}
