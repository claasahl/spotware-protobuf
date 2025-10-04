import Pbf from "pbf";

import { ProtoOATradeSide } from "../enums/ProtoOATradeSide.js";
import { ProtoOATradeData } from "../interfaces/ProtoOATradeData.js";

export class ProtoOATradeDataUtils {
  static default(partialMessage?: Partial<ProtoOATradeData>): ProtoOATradeData {
    return {
      symbolId: 0,
      volume: 0,
      tradeSide: Object.values(ProtoOATradeSide)[0] as ProtoOATradeSide,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOATradeData {
    return pbf.readFields(
      ProtoOATradeDataUtils._readField,
      ProtoOATradeDataUtils.default(),
      end,
    );
  }

  private static _readField(tag: number, message: ProtoOATradeData, pbf: Pbf) {
    if (tag === 1) message.symbolId = pbf.readVarint64();
    if (tag === 2) message.volume = pbf.readVarint64();
    if (tag === 3) message.tradeSide = pbf.readVarint();
    if (tag === 4) message.openTimestamp = pbf.readVarint64();
    if (tag === 5) message.label = pbf.readString();
    if (tag === 6) message.guaranteedStopLoss = pbf.readBoolean();
    if (tag === 7) message.comment = pbf.readString();
    if (tag === 8) message.measurementUnits = pbf.readString();
    if (tag === 9) message.closeTimestamp = pbf.readVarint64();
  }

  static write(message: ProtoOATradeData, pbf: Pbf): void {
    const {
      symbolId,
      volume,
      tradeSide,
      openTimestamp,
      label,
      guaranteedStopLoss,
      comment,
      measurementUnits,
      closeTimestamp,
    } = message;
    if (symbolId !== undefined && symbolId !== null)
      pbf.writeVarintField(1, symbolId);
    if (volume !== undefined && volume !== null)
      pbf.writeVarintField(2, volume);
    if (tradeSide !== undefined && tradeSide !== null)
      pbf.writeVarintField(3, tradeSide);
    if (openTimestamp !== undefined && openTimestamp !== null)
      pbf.writeVarintField(4, openTimestamp);
    if (label !== undefined && label !== null) pbf.writeStringField(5, label);
    if (guaranteedStopLoss !== undefined && guaranteedStopLoss !== null)
      pbf.writeBooleanField(6, guaranteedStopLoss);
    if (comment !== undefined && comment !== null)
      pbf.writeStringField(7, comment);
    if (measurementUnits !== undefined && measurementUnits !== null)
      pbf.writeStringField(8, measurementUnits);
    if (closeTimestamp !== undefined && closeTimestamp !== null)
      pbf.writeVarintField(9, closeTimestamp);
  }
}
