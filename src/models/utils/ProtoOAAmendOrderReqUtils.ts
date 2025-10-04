import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAOrderTriggerMethod } from "../enums/ProtoOAOrderTriggerMethod.js";
import { ProtoOAAmendOrderReq } from "../interfaces/ProtoOAAmendOrderReq.js";

export class ProtoOAAmendOrderReqUtils {
  static default(
    partialMessage?: Partial<ProtoOAAmendOrderReq>,
  ): ProtoOAAmendOrderReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_AMEND_ORDER_REQ,
      ctidTraderAccountId: 0,
      orderId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAAmendOrderReq {
    return pbf.readFields(
      ProtoOAAmendOrderReqUtils._readField,
      ProtoOAAmendOrderReqUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAAmendOrderReq,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) message.orderId = pbf.readVarint64();
    if (tag === 4) message.volume = pbf.readVarint64();
    if (tag === 5) message.limitPrice = pbf.readDouble();
    if (tag === 6) message.stopPrice = pbf.readDouble();
    if (tag === 7) message.expirationTimestamp = pbf.readVarint64();
    if (tag === 8) message.stopLoss = pbf.readDouble();
    if (tag === 9) message.takeProfit = pbf.readDouble();
    if (tag === 10) message.slippageInPoints = pbf.readVarint();
    if (tag === 11) message.relativeStopLoss = pbf.readVarint64();
    if (tag === 12) message.relativeTakeProfit = pbf.readVarint64();
    if (tag === 13) message.guaranteedStopLoss = pbf.readBoolean();
    if (tag === 14) message.trailingStopLoss = pbf.readBoolean();
    if (tag === 15) message.stopTriggerMethod = pbf.readVarint();
  }

  static write(message: ProtoOAAmendOrderReq, pbf: Pbf): void {
    const {
      payloadType,
      ctidTraderAccountId,
      orderId,
      volume,
      limitPrice,
      stopPrice,
      expirationTimestamp,
      stopLoss,
      takeProfit,
      slippageInPoints,
      relativeStopLoss,
      relativeTakeProfit,
      guaranteedStopLoss,
      trailingStopLoss,
      stopTriggerMethod,
    } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (orderId !== undefined && orderId !== null)
      pbf.writeVarintField(3, orderId);
    if (volume !== undefined && volume !== null)
      pbf.writeVarintField(4, volume);
    if (limitPrice !== undefined && limitPrice !== null)
      pbf.writeDoubleField(5, limitPrice);
    if (stopPrice !== undefined && stopPrice !== null)
      pbf.writeDoubleField(6, stopPrice);
    if (expirationTimestamp !== undefined && expirationTimestamp !== null)
      pbf.writeVarintField(7, expirationTimestamp);
    if (stopLoss !== undefined && stopLoss !== null)
      pbf.writeDoubleField(8, stopLoss);
    if (takeProfit !== undefined && takeProfit !== null)
      pbf.writeDoubleField(9, takeProfit);
    if (slippageInPoints !== undefined && slippageInPoints !== null)
      pbf.writeVarintField(10, slippageInPoints);
    if (relativeStopLoss !== undefined && relativeStopLoss !== null)
      pbf.writeVarintField(11, relativeStopLoss);
    if (relativeTakeProfit !== undefined && relativeTakeProfit !== null)
      pbf.writeVarintField(12, relativeTakeProfit);
    if (guaranteedStopLoss !== undefined && guaranteedStopLoss !== null)
      pbf.writeBooleanField(13, guaranteedStopLoss);
    if (trailingStopLoss !== undefined && trailingStopLoss !== null)
      pbf.writeBooleanField(14, trailingStopLoss);
    if (stopTriggerMethod !== undefined && stopTriggerMethod !== null)
      pbf.writeVarintField(15, stopTriggerMethod);
  }
}
