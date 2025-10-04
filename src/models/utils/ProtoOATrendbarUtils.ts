import Pbf from "pbf";

import { ProtoOATrendbarPeriod } from "../enums/ProtoOATrendbarPeriod.js";
import { ProtoOATrendbar } from "../interfaces/ProtoOATrendbar.js";

export class ProtoOATrendbarUtils {
  static default(partialMessage?: Partial<ProtoOATrendbar>): ProtoOATrendbar {
    return {
      volume: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOATrendbar {
    return pbf.readFields(
      ProtoOATrendbarUtils._readField,
      ProtoOATrendbarUtils.default(),
      end,
    );
  }

  private static _readField(tag: number, message: ProtoOATrendbar, pbf: Pbf) {
    if (tag === 3) message.volume = pbf.readVarint64();
    if (tag === 4) message.period = pbf.readVarint();
    if (tag === 5) message.low = pbf.readVarint64();
    if (tag === 6) message.deltaOpen = pbf.readVarint64();
    if (tag === 7) message.deltaClose = pbf.readVarint64();
    if (tag === 8) message.deltaHigh = pbf.readVarint64();
    if (tag === 9) message.utcTimestampInMinutes = pbf.readVarint();
  }

  static write(message: ProtoOATrendbar, pbf: Pbf): void {
    const {
      volume,
      period,
      low,
      deltaOpen,
      deltaClose,
      deltaHigh,
      utcTimestampInMinutes,
    } = message;
    if (volume !== undefined && volume !== null)
      pbf.writeVarintField(3, volume);
    if (period !== undefined && period !== null)
      pbf.writeVarintField(4, period);
    if (low !== undefined && low !== null) pbf.writeVarintField(5, low);
    if (deltaOpen !== undefined && deltaOpen !== null)
      pbf.writeVarintField(6, deltaOpen);
    if (deltaClose !== undefined && deltaClose !== null)
      pbf.writeVarintField(7, deltaClose);
    if (deltaHigh !== undefined && deltaHigh !== null)
      pbf.writeVarintField(8, deltaHigh);
    if (utcTimestampInMinutes !== undefined && utcTimestampInMinutes !== null)
      pbf.writeVarintField(9, utcTimestampInMinutes);
  }
}
