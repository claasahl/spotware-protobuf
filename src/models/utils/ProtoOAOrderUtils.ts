import Pbf from "pbf";

import { ProtoOATradeDataUtils } from "./ProtoOATradeDataUtils.js";
import { ProtoOAOrderType } from "../enums/ProtoOAOrderType.js";
import { ProtoOAOrderStatus } from "../enums/ProtoOAOrderStatus.js";
import { ProtoOATimeInForce } from "../enums/ProtoOATimeInForce.js";
import { ProtoOAOrderTriggerMethod } from "../enums/ProtoOAOrderTriggerMethod.js";
import { ProtoOAOrder } from "../interfaces/ProtoOAOrder.js";

export class ProtoOAOrderUtils {
  static default(partialMessage?: Partial<ProtoOAOrder>): ProtoOAOrder {
    return {
      orderId: 0,
      tradeData: ProtoOATradeDataUtils.default(),
      orderType: Object.values(ProtoOAOrderType)[0] as ProtoOAOrderType,
      orderStatus: Object.values(ProtoOAOrderStatus)[0] as ProtoOAOrderStatus,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAOrder {
    return pbf.readFields(
      ProtoOAOrderUtils._readField,
      ProtoOAOrderUtils.default(),
      end,
    );
  }

  private static _readField(tag: number, message: ProtoOAOrder, pbf: Pbf) {
    if (tag === 1) message.orderId = pbf.readVarint64();
    if (tag === 2)
      message.tradeData = ProtoOATradeDataUtils.read(
        pbf,
        pbf.readVarint() + pbf.pos,
      );
    if (tag === 3) message.orderType = pbf.readVarint();
    if (tag === 4) message.orderStatus = pbf.readVarint();
    if (tag === 6) message.expirationTimestamp = pbf.readVarint64();
    if (tag === 7) message.executionPrice = pbf.readDouble();
    if (tag === 8) message.executedVolume = pbf.readVarint64();
    if (tag === 9) message.utcLastUpdateTimestamp = pbf.readVarint64();
    if (tag === 10) message.baseSlippagePrice = pbf.readDouble();
    if (tag === 11) message.slippageInPoints = pbf.readVarint64();
    if (tag === 12) message.closingOrder = pbf.readBoolean();
    if (tag === 13) message.limitPrice = pbf.readDouble();
    if (tag === 14) message.stopPrice = pbf.readDouble();
    if (tag === 15) message.stopLoss = pbf.readDouble();
    if (tag === 16) message.takeProfit = pbf.readDouble();
    if (tag === 17) message.clientOrderId = pbf.readString();
    if (tag === 18) message.timeInForce = pbf.readVarint();
    if (tag === 19) message.positionId = pbf.readVarint64();
    if (tag === 20) message.relativeStopLoss = pbf.readVarint64();
    if (tag === 21) message.relativeTakeProfit = pbf.readVarint64();
    if (tag === 22) message.isStopOut = pbf.readBoolean();
    if (tag === 23) message.trailingStopLoss = pbf.readBoolean();
    if (tag === 24) message.stopTriggerMethod = pbf.readVarint();
  }

  static write(message: ProtoOAOrder, pbf: Pbf): void {
    const {
      orderId,
      tradeData,
      orderType,
      orderStatus,
      expirationTimestamp,
      executionPrice,
      executedVolume,
      utcLastUpdateTimestamp,
      baseSlippagePrice,
      slippageInPoints,
      closingOrder,
      limitPrice,
      stopPrice,
      stopLoss,
      takeProfit,
      clientOrderId,
      timeInForce,
      positionId,
      relativeStopLoss,
      relativeTakeProfit,
      isStopOut,
      trailingStopLoss,
      stopTriggerMethod,
    } = message;
    if (orderId !== undefined && orderId !== null)
      pbf.writeVarintField(1, orderId);
    if (tradeData !== undefined && tradeData !== null)
      ProtoOATradeDataUtils.write(tradeData, pbf);
    if (orderType !== undefined && orderType !== null)
      pbf.writeVarintField(3, orderType);
    if (orderStatus !== undefined && orderStatus !== null)
      pbf.writeVarintField(4, orderStatus);
    if (expirationTimestamp !== undefined && expirationTimestamp !== null)
      pbf.writeVarintField(6, expirationTimestamp);
    if (executionPrice !== undefined && executionPrice !== null)
      pbf.writeDoubleField(7, executionPrice);
    if (executedVolume !== undefined && executedVolume !== null)
      pbf.writeVarintField(8, executedVolume);
    if (utcLastUpdateTimestamp !== undefined && utcLastUpdateTimestamp !== null)
      pbf.writeVarintField(9, utcLastUpdateTimestamp);
    if (baseSlippagePrice !== undefined && baseSlippagePrice !== null)
      pbf.writeDoubleField(10, baseSlippagePrice);
    if (slippageInPoints !== undefined && slippageInPoints !== null)
      pbf.writeVarintField(11, slippageInPoints);
    if (closingOrder !== undefined && closingOrder !== null)
      pbf.writeBooleanField(12, closingOrder);
    if (limitPrice !== undefined && limitPrice !== null)
      pbf.writeDoubleField(13, limitPrice);
    if (stopPrice !== undefined && stopPrice !== null)
      pbf.writeDoubleField(14, stopPrice);
    if (stopLoss !== undefined && stopLoss !== null)
      pbf.writeDoubleField(15, stopLoss);
    if (takeProfit !== undefined && takeProfit !== null)
      pbf.writeDoubleField(16, takeProfit);
    if (clientOrderId !== undefined && clientOrderId !== null)
      pbf.writeStringField(17, clientOrderId);
    if (timeInForce !== undefined && timeInForce !== null)
      pbf.writeVarintField(18, timeInForce);
    if (positionId !== undefined && positionId !== null)
      pbf.writeVarintField(19, positionId);
    if (relativeStopLoss !== undefined && relativeStopLoss !== null)
      pbf.writeVarintField(20, relativeStopLoss);
    if (relativeTakeProfit !== undefined && relativeTakeProfit !== null)
      pbf.writeVarintField(21, relativeTakeProfit);
    if (isStopOut !== undefined && isStopOut !== null)
      pbf.writeBooleanField(22, isStopOut);
    if (trailingStopLoss !== undefined && trailingStopLoss !== null)
      pbf.writeBooleanField(23, trailingStopLoss);
    if (stopTriggerMethod !== undefined && stopTriggerMethod !== null)
      pbf.writeVarintField(24, stopTriggerMethod);
  }
}
