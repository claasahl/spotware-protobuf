import Pbf from "pbf";

import { ProtoOAAccessRights } from "../enums/ProtoOAAccessRights.js";
import { ProtoOATotalMarginCalculationType } from "../enums/ProtoOATotalMarginCalculationType.js";
import { ProtoOAAccountType } from "../enums/ProtoOAAccountType.js";
import { ProtoOALimitedRiskMarginCalculationStrategy } from "../enums/ProtoOALimitedRiskMarginCalculationStrategy.js";
import { ProtoOAStopOutStrategy } from "../enums/ProtoOAStopOutStrategy.js";
import { ProtoOATrader } from "../interfaces/ProtoOATrader.js";

export class ProtoOATraderUtils {
  static default(partialMessage?: Partial<ProtoOATrader>): ProtoOATrader {
    return {
      ctidTraderAccountId: 0,
      balance: 0,
      depositAssetId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOATrader {
    return pbf.readFields(
      ProtoOATraderUtils._readField,
      ProtoOATraderUtils.default(),
      end,
    );
  }

  private static _readField(tag: number, message: ProtoOATrader, pbf: Pbf) {
    if (tag === 1) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 2) message.balance = pbf.readVarint64();
    if (tag === 3) message.balanceVersion = pbf.readVarint64();
    if (tag === 4) message.managerBonus = pbf.readVarint64();
    if (tag === 5) message.ibBonus = pbf.readVarint64();
    if (tag === 6) message.nonWithdrawableBonus = pbf.readVarint64();
    if (tag === 7) message.accessRights = pbf.readVarint();
    if (tag === 8) message.depositAssetId = pbf.readVarint64();
    if (tag === 9) message.swapFree = pbf.readBoolean();
    if (tag === 10) message.leverageInCents = pbf.readVarint();
    if (tag === 11) message.totalMarginCalculationType = pbf.readVarint();
    if (tag === 12) message.maxLeverage = pbf.readVarint();
    if (tag === 13) message.frenchRisk = pbf.readBoolean();
    if (tag === 14) message.traderLogin = pbf.readVarint64();
    if (tag === 15) message.accountType = pbf.readVarint();
    if (tag === 16) message.brokerName = pbf.readString();
    if (tag === 17) message.registrationTimestamp = pbf.readVarint64();
    if (tag === 18) message.isLimitedRisk = pbf.readBoolean();
    if (tag === 19)
      message.limitedRiskMarginCalculationStrategy = pbf.readVarint();
    if (tag === 20) message.moneyDigits = pbf.readVarint();
    if (tag === 21) message.fairStopOut = pbf.readBoolean();
    if (tag === 22) message.stopOutStrategy = pbf.readVarint();
  }

  static write(message: ProtoOATrader, pbf: Pbf): void {
    const {
      ctidTraderAccountId,
      balance,
      balanceVersion,
      managerBonus,
      ibBonus,
      nonWithdrawableBonus,
      accessRights,
      depositAssetId,
      swapFree,
      leverageInCents,
      totalMarginCalculationType,
      maxLeverage,
      frenchRisk,
      traderLogin,
      accountType,
      brokerName,
      registrationTimestamp,
      isLimitedRisk,
      limitedRiskMarginCalculationStrategy,
      moneyDigits,
      fairStopOut,
      stopOutStrategy,
    } = message;
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(1, ctidTraderAccountId);
    if (balance !== undefined && balance !== null)
      pbf.writeVarintField(2, balance);
    if (balanceVersion !== undefined && balanceVersion !== null)
      pbf.writeVarintField(3, balanceVersion);
    if (managerBonus !== undefined && managerBonus !== null)
      pbf.writeVarintField(4, managerBonus);
    if (ibBonus !== undefined && ibBonus !== null)
      pbf.writeVarintField(5, ibBonus);
    if (nonWithdrawableBonus !== undefined && nonWithdrawableBonus !== null)
      pbf.writeVarintField(6, nonWithdrawableBonus);
    if (accessRights !== undefined && accessRights !== null)
      pbf.writeVarintField(7, accessRights);
    if (depositAssetId !== undefined && depositAssetId !== null)
      pbf.writeVarintField(8, depositAssetId);
    if (swapFree !== undefined && swapFree !== null)
      pbf.writeBooleanField(9, swapFree);
    if (leverageInCents !== undefined && leverageInCents !== null)
      pbf.writeVarintField(10, leverageInCents);
    if (
      totalMarginCalculationType !== undefined &&
      totalMarginCalculationType !== null
    )
      pbf.writeVarintField(11, totalMarginCalculationType);
    if (maxLeverage !== undefined && maxLeverage !== null)
      pbf.writeVarintField(12, maxLeverage);
    if (frenchRisk !== undefined && frenchRisk !== null)
      pbf.writeBooleanField(13, frenchRisk);
    if (traderLogin !== undefined && traderLogin !== null)
      pbf.writeVarintField(14, traderLogin);
    if (accountType !== undefined && accountType !== null)
      pbf.writeVarintField(15, accountType);
    if (brokerName !== undefined && brokerName !== null)
      pbf.writeStringField(16, brokerName);
    if (registrationTimestamp !== undefined && registrationTimestamp !== null)
      pbf.writeVarintField(17, registrationTimestamp);
    if (isLimitedRisk !== undefined && isLimitedRisk !== null)
      pbf.writeBooleanField(18, isLimitedRisk);
    if (
      limitedRiskMarginCalculationStrategy !== undefined &&
      limitedRiskMarginCalculationStrategy !== null
    )
      pbf.writeVarintField(19, limitedRiskMarginCalculationStrategy);
    if (moneyDigits !== undefined && moneyDigits !== null)
      pbf.writeVarintField(20, moneyDigits);
    if (fairStopOut !== undefined && fairStopOut !== null)
      pbf.writeBooleanField(21, fairStopOut);
    if (stopOutStrategy !== undefined && stopOutStrategy !== null)
      pbf.writeVarintField(22, stopOutStrategy);
  }
}
