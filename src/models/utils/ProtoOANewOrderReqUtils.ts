import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAOrderType } from "../enums/ProtoOAOrderType.js";
import { ProtoOATradeSide } from "../enums/ProtoOATradeSide.js";
import { ProtoOATimeInForce } from "../enums/ProtoOATimeInForce.js";
import { ProtoOAOrderTriggerMethod } from "../enums/ProtoOAOrderTriggerMethod.js";
import { ProtoOANewOrderReq } from "../interfaces/ProtoOANewOrderReq.js";

export class ProtoOANewOrderReqUtils {
  static default(
    partialMessage?: Partial<ProtoOANewOrderReq>,
  ): ProtoOANewOrderReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_NEW_ORDER_REQ,
      ctidTraderAccountId: 0,
      symbolId: 0,
      orderType: Object.values(ProtoOAOrderType)[0] as ProtoOAOrderType,
      tradeSide: Object.values(ProtoOATradeSide)[0] as ProtoOATradeSide,
      volume: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOANewOrderReq {
    return pbf.readFields(
      ProtoOANewOrderReqUtils._readField,
      ProtoOANewOrderReqUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOANewOrderReq,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) message.symbolId = pbf.readVarint64();
    if (tag === 4) message.orderType = pbf.readVarint();
    if (tag === 5) message.tradeSide = pbf.readVarint();
    if (tag === 6) message.volume = pbf.readVarint64();
    if (tag === 7) message.limitPrice = pbf.readDouble();
    if (tag === 8) message.stopPrice = pbf.readDouble();
    if (tag === 9) message.timeInForce = pbf.readVarint();
    if (tag === 10) message.expirationTimestamp = pbf.readVarint64();
    if (tag === 11) message.stopLoss = pbf.readDouble();
    if (tag === 12) message.takeProfit = pbf.readDouble();
    if (tag === 13) message.comment = pbf.readString();
    if (tag === 14) message.baseSlippagePrice = pbf.readDouble();
    if (tag === 15) message.slippageInPoints = pbf.readVarint();
    if (tag === 16) message.label = pbf.readString();
    if (tag === 17) message.positionId = pbf.readVarint64();
    if (tag === 18) message.clientOrderId = pbf.readString();
    if (tag === 19) message.relativeStopLoss = pbf.readVarint64();
    if (tag === 20) message.relativeTakeProfit = pbf.readVarint64();
    if (tag === 21) message.guaranteedStopLoss = pbf.readBoolean();
    if (tag === 22) message.trailingStopLoss = pbf.readBoolean();
    if (tag === 23) message.stopTriggerMethod = pbf.readVarint();
  }

  static write(message: ProtoOANewOrderReq, pbf: Pbf): void {
    const {
      payloadType,
      ctidTraderAccountId,
      symbolId,
      orderType,
      tradeSide,
      volume,
      limitPrice,
      stopPrice,
      timeInForce,
      expirationTimestamp,
      stopLoss,
      takeProfit,
      comment,
      baseSlippagePrice,
      slippageInPoints,
      label,
      positionId,
      clientOrderId,
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
    if (symbolId !== undefined && symbolId !== null)
      pbf.writeVarintField(3, symbolId);
    if (orderType !== undefined && orderType !== null)
      pbf.writeVarintField(4, orderType);
    if (tradeSide !== undefined && tradeSide !== null)
      pbf.writeVarintField(5, tradeSide);
    if (volume !== undefined && volume !== null)
      pbf.writeVarintField(6, volume);
    if (limitPrice !== undefined && limitPrice !== null)
      pbf.writeDoubleField(7, limitPrice);
    if (stopPrice !== undefined && stopPrice !== null)
      pbf.writeDoubleField(8, stopPrice);
    if (timeInForce !== undefined && timeInForce !== null)
      pbf.writeVarintField(9, timeInForce);
    if (expirationTimestamp !== undefined && expirationTimestamp !== null)
      pbf.writeVarintField(10, expirationTimestamp);
    if (stopLoss !== undefined && stopLoss !== null)
      pbf.writeDoubleField(11, stopLoss);
    if (takeProfit !== undefined && takeProfit !== null)
      pbf.writeDoubleField(12, takeProfit);
    if (comment !== undefined && comment !== null)
      pbf.writeStringField(13, comment);
    if (baseSlippagePrice !== undefined && baseSlippagePrice !== null)
      pbf.writeDoubleField(14, baseSlippagePrice);
    if (slippageInPoints !== undefined && slippageInPoints !== null)
      pbf.writeVarintField(15, slippageInPoints);
    if (label !== undefined && label !== null) pbf.writeStringField(16, label);
    if (positionId !== undefined && positionId !== null)
      pbf.writeVarintField(17, positionId);
    if (clientOrderId !== undefined && clientOrderId !== null)
      pbf.writeStringField(18, clientOrderId);
    if (relativeStopLoss !== undefined && relativeStopLoss !== null)
      pbf.writeVarintField(19, relativeStopLoss);
    if (relativeTakeProfit !== undefined && relativeTakeProfit !== null)
      pbf.writeVarintField(20, relativeTakeProfit);
    if (guaranteedStopLoss !== undefined && guaranteedStopLoss !== null)
      pbf.writeBooleanField(21, guaranteedStopLoss);
    if (trailingStopLoss !== undefined && trailingStopLoss !== null)
      pbf.writeBooleanField(22, trailingStopLoss);
    if (stopTriggerMethod !== undefined && stopTriggerMethod !== null)
      pbf.writeVarintField(23, stopTriggerMethod);
  }
}
