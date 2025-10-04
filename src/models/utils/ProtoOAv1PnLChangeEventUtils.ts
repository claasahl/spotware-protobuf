import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAv1PnLChangeEvent } from "../interfaces/ProtoOAv1PnLChangeEvent.js";

export class ProtoOAv1PnLChangeEventUtils {
  static default(
    partialMessage?: Partial<ProtoOAv1PnLChangeEvent>,
  ): ProtoOAv1PnLChangeEvent {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_V1_PNL_CHANGE_EVENT,
      ctidTraderAccountId: 0,
      grossUnrealizedPnL: 0,
      netUnrealizedPnL: 0,
      moneyDigits: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAv1PnLChangeEvent {
    return pbf.readFields(
      ProtoOAv1PnLChangeEventUtils._readField,
      ProtoOAv1PnLChangeEventUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAv1PnLChangeEvent,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) message.grossUnrealizedPnL = pbf.readVarint64();
    if (tag === 4) message.netUnrealizedPnL = pbf.readVarint64();
    if (tag === 5) message.moneyDigits = pbf.readVarint();
  }

  static write(message: ProtoOAv1PnLChangeEvent, pbf: Pbf): void {
    const {
      payloadType,
      ctidTraderAccountId,
      grossUnrealizedPnL,
      netUnrealizedPnL,
      moneyDigits,
    } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (grossUnrealizedPnL !== undefined && grossUnrealizedPnL !== null)
      pbf.writeVarintField(3, grossUnrealizedPnL);
    if (netUnrealizedPnL !== undefined && netUnrealizedPnL !== null)
      pbf.writeVarintField(4, netUnrealizedPnL);
    if (moneyDigits !== undefined && moneyDigits !== null)
      pbf.writeVarintField(5, moneyDigits);
  }
}
