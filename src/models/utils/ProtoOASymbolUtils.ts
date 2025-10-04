import Pbf from "pbf";

import { ProtoOAIntervalUtils } from "./ProtoOAIntervalUtils.js";
import { ProtoOAHolidayUtils } from "./ProtoOAHolidayUtils.js";
import { ProtoOADayOfWeek } from "../enums/ProtoOADayOfWeek.js";
import { ProtoOACommissionType } from "../enums/ProtoOACommissionType.js";
import { ProtoOASymbolDistanceType } from "../enums/ProtoOASymbolDistanceType.js";
import { ProtoOAMinCommissionType } from "../enums/ProtoOAMinCommissionType.js";
import { ProtoOATradingMode } from "../enums/ProtoOATradingMode.js";
import { ProtoOASwapCalculationType } from "../enums/ProtoOASwapCalculationType.js";
import { ProtoOASymbol } from "../interfaces/ProtoOASymbol.js";

export class ProtoOASymbolUtils {
  static default(partialMessage?: Partial<ProtoOASymbol>): ProtoOASymbol {
    return {
      symbolId: 0,
      digits: 0,
      pipPosition: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOASymbol {
    return pbf.readFields(
      ProtoOASymbolUtils._readField,
      ProtoOASymbolUtils.default(),
      end,
    );
  }

  private static _readField(tag: number, message: ProtoOASymbol, pbf: Pbf) {
    if (tag === 1) message.symbolId = pbf.readVarint64();
    if (tag === 2) message.digits = pbf.readVarint();
    if (tag === 3) message.pipPosition = pbf.readVarint();
    if (tag === 4) message.enableShortSelling = pbf.readBoolean();
    if (tag === 5) message.guaranteedStopLoss = pbf.readBoolean();
    if (tag === 6) message.swapRollover3Days = pbf.readVarint();
    if (tag === 7) message.swapLong = pbf.readDouble();
    if (tag === 8) message.swapShort = pbf.readDouble();
    if (tag === 9) message.maxVolume = pbf.readVarint64();
    if (tag === 10) message.minVolume = pbf.readVarint64();
    if (tag === 11) message.stepVolume = pbf.readVarint64();
    if (tag === 12) message.maxExposure = pbf.readVarint64();
    if (tag === 13)
      message.schedule = [
        ...(message.schedule ?? []),
        ProtoOAIntervalUtils.read(pbf, pbf.readVarint() + pbf.pos),
      ];
    if (tag === 14) message.commission = pbf.readVarint64();
    if (tag === 15) message.commissionType = pbf.readVarint();
    if (tag === 16) message.slDistance = pbf.readVarint();
    if (tag === 17) message.tpDistance = pbf.readVarint();
    if (tag === 18) message.gslDistance = pbf.readVarint();
    if (tag === 19) message.gslCharge = pbf.readVarint64();
    if (tag === 20) message.distanceSetIn = pbf.readVarint();
    if (tag === 21) message.minCommission = pbf.readVarint64();
    if (tag === 22) message.minCommissionType = pbf.readVarint();
    if (tag === 23) message.minCommissionAsset = pbf.readString();
    if (tag === 24) message.rolloverCommission = pbf.readVarint64();
    if (tag === 25) message.skipRolloverDays = pbf.readVarint();
    if (tag === 26) message.scheduleTimeZone = pbf.readString();
    if (tag === 27) message.tradingMode = pbf.readVarint();
    if (tag === 28) message.rolloverCommission3Days = pbf.readVarint();
    if (tag === 29) message.swapCalculationType = pbf.readVarint();
    if (tag === 30) message.lotSize = pbf.readVarint64();
    if (tag === 31) message.preciseTradingCommissionRate = pbf.readVarint64();
    if (tag === 32) message.preciseMinCommission = pbf.readVarint64();
    if (tag === 33)
      message.holiday = [
        ...(message.holiday ?? []),
        ProtoOAHolidayUtils.read(pbf, pbf.readVarint() + pbf.pos),
      ];
    if (tag === 34) message.pnlConversionFeeRate = pbf.readVarint();
    if (tag === 35) message.leverageId = pbf.readVarint64();
    if (tag === 36) message.swapPeriod = pbf.readVarint();
    if (tag === 37) message.swapTime = pbf.readVarint();
    if (tag === 38) message.skipSWAPPeriods = pbf.readVarint();
    if (tag === 39) message.chargeSwapAtWeekends = pbf.readBoolean();
    if (tag === 40) message.measurementUnits = pbf.readString();
  }

  static write(message: ProtoOASymbol, pbf: Pbf): void {
    const {
      symbolId,
      digits,
      pipPosition,
      enableShortSelling,
      guaranteedStopLoss,
      swapRollover3Days,
      swapLong,
      swapShort,
      maxVolume,
      minVolume,
      stepVolume,
      maxExposure,
      schedule,
      commission,
      commissionType,
      slDistance,
      tpDistance,
      gslDistance,
      gslCharge,
      distanceSetIn,
      minCommission,
      minCommissionType,
      minCommissionAsset,
      rolloverCommission,
      skipRolloverDays,
      scheduleTimeZone,
      tradingMode,
      rolloverCommission3Days,
      swapCalculationType,
      lotSize,
      preciseTradingCommissionRate,
      preciseMinCommission,
      holiday,
      pnlConversionFeeRate,
      leverageId,
      swapPeriod,
      swapTime,
      skipSWAPPeriods,
      chargeSwapAtWeekends,
      measurementUnits,
    } = message;
    if (symbolId !== undefined && symbolId !== null)
      pbf.writeVarintField(1, symbolId);
    if (digits !== undefined && digits !== null)
      pbf.writeVarintField(2, digits);
    if (pipPosition !== undefined && pipPosition !== null)
      pbf.writeVarintField(3, pipPosition);
    if (enableShortSelling !== undefined && enableShortSelling !== null)
      pbf.writeBooleanField(4, enableShortSelling);
    if (guaranteedStopLoss !== undefined && guaranteedStopLoss !== null)
      pbf.writeBooleanField(5, guaranteedStopLoss);
    if (swapRollover3Days !== undefined && swapRollover3Days !== null)
      pbf.writeVarintField(6, swapRollover3Days);
    if (swapLong !== undefined && swapLong !== null)
      pbf.writeDoubleField(7, swapLong);
    if (swapShort !== undefined && swapShort !== null)
      pbf.writeDoubleField(8, swapShort);
    if (maxVolume !== undefined && maxVolume !== null)
      pbf.writeVarintField(9, maxVolume);
    if (minVolume !== undefined && minVolume !== null)
      pbf.writeVarintField(10, minVolume);
    if (stepVolume !== undefined && stepVolume !== null)
      pbf.writeVarintField(11, stepVolume);
    if (maxExposure !== undefined && maxExposure !== null)
      pbf.writeVarintField(12, maxExposure);
    if (schedule !== undefined && schedule !== null)
      schedule.forEach((schedule) => ProtoOAIntervalUtils.write(schedule, pbf));
    if (commission !== undefined && commission !== null)
      pbf.writeVarintField(14, commission);
    if (commissionType !== undefined && commissionType !== null)
      pbf.writeVarintField(15, commissionType);
    if (slDistance !== undefined && slDistance !== null)
      pbf.writeVarintField(16, slDistance);
    if (tpDistance !== undefined && tpDistance !== null)
      pbf.writeVarintField(17, tpDistance);
    if (gslDistance !== undefined && gslDistance !== null)
      pbf.writeVarintField(18, gslDistance);
    if (gslCharge !== undefined && gslCharge !== null)
      pbf.writeVarintField(19, gslCharge);
    if (distanceSetIn !== undefined && distanceSetIn !== null)
      pbf.writeVarintField(20, distanceSetIn);
    if (minCommission !== undefined && minCommission !== null)
      pbf.writeVarintField(21, minCommission);
    if (minCommissionType !== undefined && minCommissionType !== null)
      pbf.writeVarintField(22, minCommissionType);
    if (minCommissionAsset !== undefined && minCommissionAsset !== null)
      pbf.writeStringField(23, minCommissionAsset);
    if (rolloverCommission !== undefined && rolloverCommission !== null)
      pbf.writeVarintField(24, rolloverCommission);
    if (skipRolloverDays !== undefined && skipRolloverDays !== null)
      pbf.writeVarintField(25, skipRolloverDays);
    if (scheduleTimeZone !== undefined && scheduleTimeZone !== null)
      pbf.writeStringField(26, scheduleTimeZone);
    if (tradingMode !== undefined && tradingMode !== null)
      pbf.writeVarintField(27, tradingMode);
    if (
      rolloverCommission3Days !== undefined &&
      rolloverCommission3Days !== null
    )
      pbf.writeVarintField(28, rolloverCommission3Days);
    if (swapCalculationType !== undefined && swapCalculationType !== null)
      pbf.writeVarintField(29, swapCalculationType);
    if (lotSize !== undefined && lotSize !== null)
      pbf.writeVarintField(30, lotSize);
    if (
      preciseTradingCommissionRate !== undefined &&
      preciseTradingCommissionRate !== null
    )
      pbf.writeVarintField(31, preciseTradingCommissionRate);
    if (preciseMinCommission !== undefined && preciseMinCommission !== null)
      pbf.writeVarintField(32, preciseMinCommission);
    if (holiday !== undefined && holiday !== null)
      holiday.forEach((holiday) => ProtoOAHolidayUtils.write(holiday, pbf));
    if (pnlConversionFeeRate !== undefined && pnlConversionFeeRate !== null)
      pbf.writeVarintField(34, pnlConversionFeeRate);
    if (leverageId !== undefined && leverageId !== null)
      pbf.writeVarintField(35, leverageId);
    if (swapPeriod !== undefined && swapPeriod !== null)
      pbf.writeVarintField(36, swapPeriod);
    if (swapTime !== undefined && swapTime !== null)
      pbf.writeVarintField(37, swapTime);
    if (skipSWAPPeriods !== undefined && skipSWAPPeriods !== null)
      pbf.writeVarintField(38, skipSWAPPeriods);
    if (chargeSwapAtWeekends !== undefined && chargeSwapAtWeekends !== null)
      pbf.writeBooleanField(39, chargeSwapAtWeekends);
    if (measurementUnits !== undefined && measurementUnits !== null)
      pbf.writeStringField(40, measurementUnits);
  }
}
