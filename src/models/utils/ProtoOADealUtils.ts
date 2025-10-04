import Pbf from "pbf";

import { ProtoOAClosePositionDetailUtils } from "./ProtoOAClosePositionDetailUtils.js";
import { ProtoOATradeSide } from "../enums/ProtoOATradeSide.js";
import { ProtoOADealStatus } from "../enums/ProtoOADealStatus.js";
import { ProtoOADeal } from "../interfaces/ProtoOADeal.js";

export class ProtoOADealUtils {
  static default(partialMessage?: Partial<ProtoOADeal>): ProtoOADeal {
    return {
      dealId: 0,
      orderId: 0,
      positionId: 0,
      volume: 0,
      filledVolume: 0,
      symbolId: 0,
      createTimestamp: 0,
      executionTimestamp: 0,
      tradeSide: Object.values(ProtoOATradeSide)[0] as ProtoOATradeSide,
      dealStatus: Object.values(ProtoOADealStatus)[0] as ProtoOADealStatus,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOADeal {
    return pbf.readFields(
      ProtoOADealUtils._readField,
      ProtoOADealUtils.default(),
      end,
    );
  }

  private static _readField(tag: number, message: ProtoOADeal, pbf: Pbf) {
    if (tag === 1) message.dealId = pbf.readVarint64();
    if (tag === 2) message.orderId = pbf.readVarint64();
    if (tag === 3) message.positionId = pbf.readVarint64();
    if (tag === 4) message.volume = pbf.readVarint64();
    if (tag === 5) message.filledVolume = pbf.readVarint64();
    if (tag === 6) message.symbolId = pbf.readVarint64();
    if (tag === 7) message.createTimestamp = pbf.readVarint64();
    if (tag === 8) message.executionTimestamp = pbf.readVarint64();
    if (tag === 9) message.utcLastUpdateTimestamp = pbf.readVarint64();
    if (tag === 10) message.executionPrice = pbf.readDouble();
    if (tag === 11) message.tradeSide = pbf.readVarint();
    if (tag === 12) message.dealStatus = pbf.readVarint();
    if (tag === 13) message.marginRate = pbf.readDouble();
    if (tag === 14) message.commission = pbf.readVarint64();
    if (tag === 15) message.baseToUsdConversionRate = pbf.readDouble();
    if (tag === 16)
      message.closePositionDetail = ProtoOAClosePositionDetailUtils.read(
        pbf,
        pbf.readVarint() + pbf.pos,
      );
    if (tag === 17) message.moneyDigits = pbf.readVarint();
  }

  static write(message: ProtoOADeal, pbf: Pbf): void {
    const {
      dealId,
      orderId,
      positionId,
      volume,
      filledVolume,
      symbolId,
      createTimestamp,
      executionTimestamp,
      utcLastUpdateTimestamp,
      executionPrice,
      tradeSide,
      dealStatus,
      marginRate,
      commission,
      baseToUsdConversionRate,
      closePositionDetail,
      moneyDigits,
    } = message;
    if (dealId !== undefined && dealId !== null)
      pbf.writeVarintField(1, dealId);
    if (orderId !== undefined && orderId !== null)
      pbf.writeVarintField(2, orderId);
    if (positionId !== undefined && positionId !== null)
      pbf.writeVarintField(3, positionId);
    if (volume !== undefined && volume !== null)
      pbf.writeVarintField(4, volume);
    if (filledVolume !== undefined && filledVolume !== null)
      pbf.writeVarintField(5, filledVolume);
    if (symbolId !== undefined && symbolId !== null)
      pbf.writeVarintField(6, symbolId);
    if (createTimestamp !== undefined && createTimestamp !== null)
      pbf.writeVarintField(7, createTimestamp);
    if (executionTimestamp !== undefined && executionTimestamp !== null)
      pbf.writeVarintField(8, executionTimestamp);
    if (utcLastUpdateTimestamp !== undefined && utcLastUpdateTimestamp !== null)
      pbf.writeVarintField(9, utcLastUpdateTimestamp);
    if (executionPrice !== undefined && executionPrice !== null)
      pbf.writeDoubleField(10, executionPrice);
    if (tradeSide !== undefined && tradeSide !== null)
      pbf.writeVarintField(11, tradeSide);
    if (dealStatus !== undefined && dealStatus !== null)
      pbf.writeVarintField(12, dealStatus);
    if (marginRate !== undefined && marginRate !== null)
      pbf.writeDoubleField(13, marginRate);
    if (commission !== undefined && commission !== null)
      pbf.writeVarintField(14, commission);
    if (
      baseToUsdConversionRate !== undefined &&
      baseToUsdConversionRate !== null
    )
      pbf.writeDoubleField(15, baseToUsdConversionRate);
    if (closePositionDetail !== undefined && closePositionDetail !== null)
      ProtoOAClosePositionDetailUtils.write(closePositionDetail, pbf);
    if (moneyDigits !== undefined && moneyDigits !== null)
      pbf.writeVarintField(17, moneyDigits);
  }
}
