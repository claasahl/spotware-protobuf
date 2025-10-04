import Pbf from "pbf";

import { ProtoOADealOffset } from "../interfaces/ProtoOADealOffset.js";

export class ProtoOADealOffsetUtils {
  static default(
    partialMessage?: Partial<ProtoOADealOffset>,
  ): ProtoOADealOffset {
    return {
      dealId: 0,
      volume: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOADealOffset {
    return pbf.readFields(
      ProtoOADealOffsetUtils._readField,
      ProtoOADealOffsetUtils.default(),
      end,
    );
  }

  private static _readField(tag: number, message: ProtoOADealOffset, pbf: Pbf) {
    if (tag === 1) message.dealId = pbf.readVarint64();
    if (tag === 2) message.volume = pbf.readVarint64();
    if (tag === 3) message.executionTimestamp = pbf.readVarint64();
    if (tag === 4) message.executionPrice = pbf.readDouble();
  }

  static write(message: ProtoOADealOffset, pbf: Pbf): void {
    const { dealId, volume, executionTimestamp, executionPrice } = message;
    if (dealId !== undefined && dealId !== null)
      pbf.writeVarintField(1, dealId);
    if (volume !== undefined && volume !== null)
      pbf.writeVarintField(2, volume);
    if (executionTimestamp !== undefined && executionTimestamp !== null)
      pbf.writeVarintField(3, executionTimestamp);
    if (executionPrice !== undefined && executionPrice !== null)
      pbf.writeDoubleField(4, executionPrice);
  }
}
