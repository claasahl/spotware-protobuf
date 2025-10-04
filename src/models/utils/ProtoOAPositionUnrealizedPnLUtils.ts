import Pbf from "pbf";

import { ProtoOAPositionUnrealizedPnL } from "../interfaces/ProtoOAPositionUnrealizedPnL.js";

export class ProtoOAPositionUnrealizedPnLUtils {
  static default(
    partialMessage?: Partial<ProtoOAPositionUnrealizedPnL>,
  ): ProtoOAPositionUnrealizedPnL {
    return {
      positionId: 0,
      grossUnrealizedPnL: 0,
      netUnrealizedPnL: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAPositionUnrealizedPnL {
    return pbf.readFields(
      ProtoOAPositionUnrealizedPnLUtils._readField,
      ProtoOAPositionUnrealizedPnLUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAPositionUnrealizedPnL,
    pbf: Pbf,
  ) {
    if (tag === 1) message.positionId = pbf.readVarint64();
    if (tag === 2) message.grossUnrealizedPnL = pbf.readVarint64();
    if (tag === 3) message.netUnrealizedPnL = pbf.readVarint64();
  }

  static write(message: ProtoOAPositionUnrealizedPnL, pbf: Pbf): void {
    const { positionId, grossUnrealizedPnL, netUnrealizedPnL } = message;
    if (positionId !== undefined && positionId !== null)
      pbf.writeVarintField(1, positionId);
    if (grossUnrealizedPnL !== undefined && grossUnrealizedPnL !== null)
      pbf.writeVarintField(2, grossUnrealizedPnL);
    if (netUnrealizedPnL !== undefined && netUnrealizedPnL !== null)
      pbf.writeVarintField(3, netUnrealizedPnL);
  }
}
