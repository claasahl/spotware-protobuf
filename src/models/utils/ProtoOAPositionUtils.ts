import Pbf from "pbf";

import { ProtoOATradeDataUtils } from "./ProtoOATradeDataUtils.js";
import { ProtoOAPositionStatus } from "../enums/ProtoOAPositionStatus.js";
import { ProtoOAOrderTriggerMethod } from "../enums/ProtoOAOrderTriggerMethod.js";
import { ProtoOAPosition } from "../interfaces/ProtoOAPosition.js";

export class ProtoOAPositionUtils {
  static default(partialMessage?: Partial<ProtoOAPosition>): ProtoOAPosition {
    return {
      positionId: 0,
      tradeData: ProtoOATradeDataUtils.default(),
      positionStatus: Object.values(
        ProtoOAPositionStatus,
      )[0] as ProtoOAPositionStatus,
      swap: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAPosition {
    return pbf.readFields(
      ProtoOAPositionUtils._readField,
      ProtoOAPositionUtils.default(),
      end,
    );
  }

  private static _readField(tag: number, message: ProtoOAPosition, pbf: Pbf) {
    if (tag === 1) message.positionId = pbf.readVarint64();
    if (tag === 2)
      message.tradeData = ProtoOATradeDataUtils.read(
        pbf,
        pbf.readVarint() + pbf.pos,
      );
    if (tag === 3) message.positionStatus = pbf.readVarint();
    if (tag === 4) message.swap = pbf.readVarint64();
    if (tag === 5) message.price = pbf.readDouble();
    if (tag === 6) message.stopLoss = pbf.readDouble();
    if (tag === 7) message.takeProfit = pbf.readDouble();
    if (tag === 8) message.utcLastUpdateTimestamp = pbf.readVarint64();
    if (tag === 9) message.commission = pbf.readVarint64();
    if (tag === 10) message.marginRate = pbf.readDouble();
    if (tag === 11) message.mirroringCommission = pbf.readVarint64();
    if (tag === 12) message.guaranteedStopLoss = pbf.readBoolean();
    if (tag === 13) message.usedMargin = pbf.readVarint64();
    if (tag === 14) message.stopLossTriggerMethod = pbf.readVarint();
    if (tag === 15) message.moneyDigits = pbf.readVarint();
    if (tag === 16) message.trailingStopLoss = pbf.readBoolean();
  }

  static write(message: ProtoOAPosition, pbf: Pbf): void {
    const {
      positionId,
      tradeData,
      positionStatus,
      swap,
      price,
      stopLoss,
      takeProfit,
      utcLastUpdateTimestamp,
      commission,
      marginRate,
      mirroringCommission,
      guaranteedStopLoss,
      usedMargin,
      stopLossTriggerMethod,
      moneyDigits,
      trailingStopLoss,
    } = message;
    if (positionId !== undefined && positionId !== null)
      pbf.writeVarintField(1, positionId);
    if (tradeData !== undefined && tradeData !== null)
      ProtoOATradeDataUtils.write(tradeData, pbf);
    if (positionStatus !== undefined && positionStatus !== null)
      pbf.writeVarintField(3, positionStatus);
    if (swap !== undefined && swap !== null) pbf.writeVarintField(4, swap);
    if (price !== undefined && price !== null) pbf.writeDoubleField(5, price);
    if (stopLoss !== undefined && stopLoss !== null)
      pbf.writeDoubleField(6, stopLoss);
    if (takeProfit !== undefined && takeProfit !== null)
      pbf.writeDoubleField(7, takeProfit);
    if (utcLastUpdateTimestamp !== undefined && utcLastUpdateTimestamp !== null)
      pbf.writeVarintField(8, utcLastUpdateTimestamp);
    if (commission !== undefined && commission !== null)
      pbf.writeVarintField(9, commission);
    if (marginRate !== undefined && marginRate !== null)
      pbf.writeDoubleField(10, marginRate);
    if (mirroringCommission !== undefined && mirroringCommission !== null)
      pbf.writeVarintField(11, mirroringCommission);
    if (guaranteedStopLoss !== undefined && guaranteedStopLoss !== null)
      pbf.writeBooleanField(12, guaranteedStopLoss);
    if (usedMargin !== undefined && usedMargin !== null)
      pbf.writeVarintField(13, usedMargin);
    if (stopLossTriggerMethod !== undefined && stopLossTriggerMethod !== null)
      pbf.writeVarintField(14, stopLossTriggerMethod);
    if (moneyDigits !== undefined && moneyDigits !== null)
      pbf.writeVarintField(15, moneyDigits);
    if (trailingStopLoss !== undefined && trailingStopLoss !== null)
      pbf.writeBooleanField(16, trailingStopLoss);
  }
}
