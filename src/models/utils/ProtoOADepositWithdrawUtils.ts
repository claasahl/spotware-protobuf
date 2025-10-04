import Pbf from "pbf";

import { ProtoOAChangeBalanceType } from "../enums/ProtoOAChangeBalanceType.js";
import { ProtoOADepositWithdraw } from "../interfaces/ProtoOADepositWithdraw.js";

export class ProtoOADepositWithdrawUtils {
  static default(
    partialMessage?: Partial<ProtoOADepositWithdraw>,
  ): ProtoOADepositWithdraw {
    return {
      operationType: Object.values(
        ProtoOAChangeBalanceType,
      )[0] as ProtoOAChangeBalanceType,
      balanceHistoryId: 0,
      balance: 0,
      delta: 0,
      changeBalanceTimestamp: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOADepositWithdraw {
    return pbf.readFields(
      ProtoOADepositWithdrawUtils._readField,
      ProtoOADepositWithdrawUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOADepositWithdraw,
    pbf: Pbf,
  ) {
    if (tag === 1) message.operationType = pbf.readVarint();
    if (tag === 2) message.balanceHistoryId = pbf.readVarint64();
    if (tag === 3) message.balance = pbf.readVarint64();
    if (tag === 4) message.delta = pbf.readVarint64();
    if (tag === 5) message.changeBalanceTimestamp = pbf.readVarint64();
    if (tag === 6) message.externalNote = pbf.readString();
    if (tag === 7) message.balanceVersion = pbf.readVarint64();
    if (tag === 8) message.equity = pbf.readVarint64();
    if (tag === 9) message.moneyDigits = pbf.readVarint();
  }

  static write(message: ProtoOADepositWithdraw, pbf: Pbf): void {
    const {
      operationType,
      balanceHistoryId,
      balance,
      delta,
      changeBalanceTimestamp,
      externalNote,
      balanceVersion,
      equity,
      moneyDigits,
    } = message;
    if (operationType !== undefined && operationType !== null)
      pbf.writeVarintField(1, operationType);
    if (balanceHistoryId !== undefined && balanceHistoryId !== null)
      pbf.writeVarintField(2, balanceHistoryId);
    if (balance !== undefined && balance !== null)
      pbf.writeVarintField(3, balance);
    if (delta !== undefined && delta !== null) pbf.writeVarintField(4, delta);
    if (changeBalanceTimestamp !== undefined && changeBalanceTimestamp !== null)
      pbf.writeVarintField(5, changeBalanceTimestamp);
    if (externalNote !== undefined && externalNote !== null)
      pbf.writeStringField(6, externalNote);
    if (balanceVersion !== undefined && balanceVersion !== null)
      pbf.writeVarintField(7, balanceVersion);
    if (equity !== undefined && equity !== null)
      pbf.writeVarintField(8, equity);
    if (moneyDigits !== undefined && moneyDigits !== null)
      pbf.writeVarintField(9, moneyDigits);
  }
}
