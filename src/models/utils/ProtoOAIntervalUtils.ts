import Pbf from "pbf";

import { ProtoOAInterval } from "../interfaces/ProtoOAInterval.js";

export class ProtoOAIntervalUtils {
  static default(partialMessage?: Partial<ProtoOAInterval>): ProtoOAInterval {
    return {
      startSecond: 0,
      endSecond: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAInterval {
    return pbf.readFields(
      ProtoOAIntervalUtils._readField,
      ProtoOAIntervalUtils.default(),
      end,
    );
  }

  private static _readField(tag: number, message: ProtoOAInterval, pbf: Pbf) {
    if (tag === 3) message.startSecond = pbf.readVarint();
    if (tag === 4) message.endSecond = pbf.readVarint();
  }

  static write(message: ProtoOAInterval, pbf: Pbf): void {
    const { startSecond, endSecond } = message;
    if (startSecond !== undefined && startSecond !== null)
      pbf.writeVarintField(3, startSecond);
    if (endSecond !== undefined && endSecond !== null)
      pbf.writeVarintField(4, endSecond);
  }
}
