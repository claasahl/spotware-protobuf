import type { ProtoOAChangeBonusType } from "../enums/ProtoOAChangeBonusType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOABonusDepositWithdraw extends ProtoMessage {
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
