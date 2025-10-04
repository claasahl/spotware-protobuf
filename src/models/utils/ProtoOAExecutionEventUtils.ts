import Pbf from "pbf";

import { ProtoOAPositionUtils } from "./ProtoOAPositionUtils.js";
import { ProtoOAOrderUtils } from "./ProtoOAOrderUtils.js";
import { ProtoOADealUtils } from "./ProtoOADealUtils.js";
import { ProtoOABonusDepositWithdrawUtils } from "./ProtoOABonusDepositWithdrawUtils.js";
import { ProtoOADepositWithdrawUtils } from "./ProtoOADepositWithdrawUtils.js";
import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAExecutionType } from "../enums/ProtoOAExecutionType.js";
import { ProtoOAExecutionEvent } from "../interfaces/ProtoOAExecutionEvent.js";

export class ProtoOAExecutionEventUtils {
  static default(
    partialMessage?: Partial<ProtoOAExecutionEvent>,
  ): ProtoOAExecutionEvent {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_EXECUTION_EVENT,
      ctidTraderAccountId: 0,
      executionType: Object.values(
        ProtoOAExecutionType,
      )[0] as ProtoOAExecutionType,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAExecutionEvent {
    return pbf.readFields(
      ProtoOAExecutionEventUtils._readField,
      ProtoOAExecutionEventUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAExecutionEvent,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) message.executionType = pbf.readVarint();
    if (tag === 4)
      message.position = ProtoOAPositionUtils.read(
        pbf,
        pbf.readVarint() + pbf.pos,
      );
    if (tag === 5)
      message.order = ProtoOAOrderUtils.read(pbf, pbf.readVarint() + pbf.pos);
    if (tag === 6)
      message.deal = ProtoOADealUtils.read(pbf, pbf.readVarint() + pbf.pos);
    if (tag === 7)
      message.bonusDepositWithdraw = ProtoOABonusDepositWithdrawUtils.read(
        pbf,
        pbf.readVarint() + pbf.pos,
      );
    if (tag === 8)
      message.depositWithdraw = ProtoOADepositWithdrawUtils.read(
        pbf,
        pbf.readVarint() + pbf.pos,
      );
    if (tag === 9) message.errorCode = pbf.readString();
    if (tag === 10) message.isServerEvent = pbf.readBoolean();
  }

  static write(message: ProtoOAExecutionEvent, pbf: Pbf): void {
    const {
      payloadType,
      ctidTraderAccountId,
      executionType,
      position,
      order,
      deal,
      bonusDepositWithdraw,
      depositWithdraw,
      errorCode,
      isServerEvent,
    } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (executionType !== undefined && executionType !== null)
      pbf.writeVarintField(3, executionType);
    if (position !== undefined && position !== null)
      ProtoOAPositionUtils.write(position, pbf);
    if (order !== undefined && order !== null)
      ProtoOAOrderUtils.write(order, pbf);
    if (deal !== undefined && deal !== null) ProtoOADealUtils.write(deal, pbf);
    if (bonusDepositWithdraw !== undefined && bonusDepositWithdraw !== null)
      ProtoOABonusDepositWithdrawUtils.write(bonusDepositWithdraw, pbf);
    if (depositWithdraw !== undefined && depositWithdraw !== null)
      ProtoOADepositWithdrawUtils.write(depositWithdraw, pbf);
    if (errorCode !== undefined && errorCode !== null)
      pbf.writeStringField(9, errorCode);
    if (isServerEvent !== undefined && isServerEvent !== null)
      pbf.writeBooleanField(10, isServerEvent);
  }
}
