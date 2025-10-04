import type { ProtoOAChangeBonusType } from "../enums/ProtoOAChangeBonusType.ts";

export interface ProtoOABonusDepositWithdraw {
  operationType: ProtoOAChangeBonusType;
  bonusHistoryId: number;
  managerBonus: number;
  managerDelta: number;
  ibBonus: number;
  ibDelta: number;
  changeBonusTimestamp: number;
  externalNote?: string;
  introducingBrokerId?: number;
  moneyDigits?: number;
}
