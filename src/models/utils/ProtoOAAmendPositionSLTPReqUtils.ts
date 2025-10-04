import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAOrderTriggerMethod } from "../enums/ProtoOAOrderTriggerMethod.js";
import { ProtoOAAmendPositionSLTPReq } from "../interfaces/ProtoOAAmendPositionSLTPReq.js";

export class ProtoOAAmendPositionSLTPReqUtils {
  static default(
    partialMessage?: Partial<ProtoOAAmendPositionSLTPReq>,
  ): ProtoOAAmendPositionSLTPReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_AMEND_POSITION_SLTP_REQ,
      ctidTraderAccountId: 0,
      positionId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAAmendPositionSLTPReq {
    return pbf.readFields(
      ProtoOAAmendPositionSLTPReqUtils._readField,
      ProtoOAAmendPositionSLTPReqUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAAmendPositionSLTPReq,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) message.positionId = pbf.readVarint64();
    if (tag === 4) message.stopLoss = pbf.readDouble();
    if (tag === 5) message.takeProfit = pbf.readDouble();
    if (tag === 7) message.guaranteedStopLoss = pbf.readBoolean();
    if (tag === 8) message.trailingStopLoss = pbf.readBoolean();
    if (tag === 9) message.stopLossTriggerMethod = pbf.readVarint();
  }

  static write(message: ProtoOAAmendPositionSLTPReq, pbf: Pbf): void {
    const {
      payloadType,
      ctidTraderAccountId,
      positionId,
      stopLoss,
      takeProfit,
      guaranteedStopLoss,
      trailingStopLoss,
      stopLossTriggerMethod,
    } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (positionId !== undefined && positionId !== null)
      pbf.writeVarintField(3, positionId);
    if (stopLoss !== undefined && stopLoss !== null)
      pbf.writeDoubleField(4, stopLoss);
    if (takeProfit !== undefined && takeProfit !== null)
      pbf.writeDoubleField(5, takeProfit);
    if (guaranteedStopLoss !== undefined && guaranteedStopLoss !== null)
      pbf.writeBooleanField(7, guaranteedStopLoss);
    if (trailingStopLoss !== undefined && trailingStopLoss !== null)
      pbf.writeBooleanField(8, trailingStopLoss);
    if (stopLossTriggerMethod !== undefined && stopLossTriggerMethod !== null)
      pbf.writeVarintField(9, stopLossTriggerMethod);
  }
}
