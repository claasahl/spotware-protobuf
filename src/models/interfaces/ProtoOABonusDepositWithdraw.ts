import type { ProtoOAChangeBonusType } from "../enums/ProtoOAChangeBonusType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOABonusDepositWithdraw extends BaseMessage {
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
