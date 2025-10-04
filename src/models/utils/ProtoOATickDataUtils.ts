import Pbf from "pbf";

import { ProtoOATickData } from "../interfaces/ProtoOATickData.js";

export class ProtoOATickDataUtils {
  static default(partialMessage?: Partial<ProtoOATickData>): ProtoOATickData {
    return {
      timestamp: 0,
      tick: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOATickData {
    return pbf.readFields(
      ProtoOATickDataUtils._readField,
      ProtoOATickDataUtils.default(),
      end,
    );
  }

  private static _readField(tag: number, message: ProtoOATickData, pbf: Pbf) {
    if (tag === 1) message.timestamp = pbf.readVarint64();
    if (tag === 2) message.tick = pbf.readVarint64();
  }

  static write(message: ProtoOATickData, pbf: Pbf): void {
    const { timestamp, tick } = message;
    if (timestamp !== undefined && timestamp !== null)
      pbf.writeVarintField(1, timestamp);
    if (tick !== undefined && tick !== null) pbf.writeVarintField(2, tick);
  }
}
