import type { ProtoOAAccessRights } from "../enums/ProtoOAAccessRights.ts";
import type { ProtoOATotalMarginCalculationType } from "../enums/ProtoOATotalMarginCalculationType.ts";
import type { ProtoOAAccountType } from "../enums/ProtoOAAccountType.ts";
import type { ProtoOALimitedRiskMarginCalculationStrategy } from "../enums/ProtoOALimitedRiskMarginCalculationStrategy.ts";
import type { ProtoOAStopOutStrategy } from "../enums/ProtoOAStopOutStrategy.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOATrader extends ProtoMessage {
  ctidTraderAccountId: number;
  balance: number;
  balanceVersion?: number;
  managerBonus?: number;
  ibBonus?: number;
  nonWithdrawableBonus?: number;
  accessRights?: ProtoOAAccessRights;
  depositAssetId: number;
  swapFree?: boolean;
  leverageInCents?: number;
  totalMarginCalculationType?: ProtoOATotalMarginCalculationType;
  maxLeverage?: number;
  frenchRisk?: boolean;
  traderLogin?: number;
  accountType?: ProtoOAAccountType;
  brokerName?: string;
  registrationTimestamp?: number;
  isLimitedRisk?: boolean;
  limitedRiskMarginCalculationStrategy?: ProtoOALimitedRiskMarginCalculationStrategy;
  moneyDigits?: number;
  fairStopOut?: boolean;
  stopOutStrategy?: ProtoOAStopOutStrategy;
}
