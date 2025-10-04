import Pbf from "pbf";

import { ProtoOAChangeBonusType } from "../enums/ProtoOAChangeBonusType.js";
import { ProtoOABonusDepositWithdraw } from "../interfaces/ProtoOABonusDepositWithdraw.js";

export class ProtoOABonusDepositWithdrawUtils {
  static default(
    partialMessage?: Partial<ProtoOABonusDepositWithdraw>,
  ): ProtoOABonusDepositWithdraw {
    return {
      operationType: Object.values(
        ProtoOAChangeBonusType,
      )[0] as ProtoOAChangeBonusType,
      bonusHistoryId: 0,
      managerBonus: 0,
      managerDelta: 0,
      ibBonus: 0,
      ibDelta: 0,
      changeBonusTimestamp: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOABonusDepositWithdraw {
    return pbf.readFields(
      ProtoOABonusDepositWithdrawUtils._readField,
      ProtoOABonusDepositWithdrawUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOABonusDepositWithdraw,
    pbf: Pbf,
  ) {
    if (tag === 1) message.operationType = pbf.readVarint();
    if (tag === 2) message.bonusHistoryId = pbf.readVarint64();
    if (tag === 3) message.managerBonus = pbf.readVarint64();
    if (tag === 4) message.managerDelta = pbf.readVarint64();
    if (tag === 5) message.ibBonus = pbf.readVarint64();
    if (tag === 6) message.ibDelta = pbf.readVarint64();
    if (tag === 7) message.changeBonusTimestamp = pbf.readVarint64();
    if (tag === 8) message.externalNote = pbf.readString();
    if (tag === 9) message.introducingBrokerId = pbf.readVarint64();
    if (tag === 10) message.moneyDigits = pbf.readVarint();
  }

  static write(message: ProtoOABonusDepositWithdraw, pbf: Pbf): void {
    const {
      operationType,
      bonusHistoryId,
      managerBonus,
      managerDelta,
      ibBonus,
      ibDelta,
      changeBonusTimestamp,
      externalNote,
      introducingBrokerId,
      moneyDigits,
    } = message;
    if (operationType !== undefined && operationType !== null)
      pbf.writeVarintField(1, operationType);
    if (bonusHistoryId !== undefined && bonusHistoryId !== null)
      pbf.writeVarintField(2, bonusHistoryId);
    if (managerBonus !== undefined && managerBonus !== null)
      pbf.writeVarintField(3, managerBonus);
    if (managerDelta !== undefined && managerDelta !== null)
      pbf.writeVarintField(4, managerDelta);
    if (ibBonus !== undefined && ibBonus !== null)
      pbf.writeVarintField(5, ibBonus);
    if (ibDelta !== undefined && ibDelta !== null)
      pbf.writeVarintField(6, ibDelta);
    if (changeBonusTimestamp !== undefined && changeBonusTimestamp !== null)
      pbf.writeVarintField(7, changeBonusTimestamp);
    if (externalNote !== undefined && externalNote !== null)
      pbf.writeStringField(8, externalNote);
    if (introducingBrokerId !== undefined && introducingBrokerId !== null)
      pbf.writeVarintField(9, introducingBrokerId);
    if (moneyDigits !== undefined && moneyDigits !== null)
      pbf.writeVarintField(10, moneyDigits);
  }
}
