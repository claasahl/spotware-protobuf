import Pbf from "pbf";

import { ProtoOAClosePositionDetail } from "../interfaces/ProtoOAClosePositionDetail.js";

export class ProtoOAClosePositionDetailUtils {
  static default(
    partialMessage?: Partial<ProtoOAClosePositionDetail>,
  ): ProtoOAClosePositionDetail {
    return {
      entryPrice: 0,
      grossProfit: 0,
      swap: 0,
      commission: 0,
      balance: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAClosePositionDetail {
    return pbf.readFields(
      ProtoOAClosePositionDetailUtils._readField,
      ProtoOAClosePositionDetailUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAClosePositionDetail,
    pbf: Pbf,
  ) {
    if (tag === 1) message.entryPrice = pbf.readDouble();
    if (tag === 2) message.grossProfit = pbf.readVarint64();
    if (tag === 3) message.swap = pbf.readVarint64();
    if (tag === 4) message.commission = pbf.readVarint64();
    if (tag === 5) message.balance = pbf.readVarint64();
    if (tag === 6) message.quoteToDepositConversionRate = pbf.readDouble();
    if (tag === 7) message.closedVolume = pbf.readVarint64();
    if (tag === 8) message.balanceVersion = pbf.readVarint64();
    if (tag === 9) message.moneyDigits = pbf.readVarint();
    if (tag === 10) message.pnlConversionFee = pbf.readVarint64();
  }

  static write(message: ProtoOAClosePositionDetail, pbf: Pbf): void {
    const {
      entryPrice,
      grossProfit,
      swap,
      commission,
      balance,
      quoteToDepositConversionRate,
      closedVolume,
      balanceVersion,
      moneyDigits,
      pnlConversionFee,
    } = message;
    if (entryPrice !== undefined && entryPrice !== null)
      pbf.writeDoubleField(1, entryPrice);
    if (grossProfit !== undefined && grossProfit !== null)
      pbf.writeVarintField(2, grossProfit);
    if (swap !== undefined && swap !== null) pbf.writeVarintField(3, swap);
    if (commission !== undefined && commission !== null)
      pbf.writeVarintField(4, commission);
    if (balance !== undefined && balance !== null)
      pbf.writeVarintField(5, balance);
    if (
      quoteToDepositConversionRate !== undefined &&
      quoteToDepositConversionRate !== null
    )
      pbf.writeDoubleField(6, quoteToDepositConversionRate);
    if (closedVolume !== undefined && closedVolume !== null)
      pbf.writeVarintField(7, closedVolume);
    if (balanceVersion !== undefined && balanceVersion !== null)
      pbf.writeVarintField(8, balanceVersion);
    if (moneyDigits !== undefined && moneyDigits !== null)
      pbf.writeVarintField(9, moneyDigits);
    if (pnlConversionFee !== undefined && pnlConversionFee !== null)
      pbf.writeVarintField(10, pnlConversionFee);
  }
}
