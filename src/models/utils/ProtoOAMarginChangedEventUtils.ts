import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAMarginChangedEvent } from "../interfaces/ProtoOAMarginChangedEvent.js";

export class ProtoOAMarginChangedEventUtils {
  static default(
    partialMessage?: Partial<ProtoOAMarginChangedEvent>,
  ): ProtoOAMarginChangedEvent {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_MARGIN_CHANGED_EVENT,
      ctidTraderAccountId: 0,
      positionId: 0,
      usedMargin: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAMarginChangedEvent {
    return pbf.readFields(
      ProtoOAMarginChangedEventUtils._readField,
      ProtoOAMarginChangedEventUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAMarginChangedEvent,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) message.positionId = pbf.readVarint64();
    if (tag === 4) message.usedMargin = pbf.readVarint64();
    if (tag === 5) message.moneyDigits = pbf.readVarint();
  }

  static write(message: ProtoOAMarginChangedEvent, pbf: Pbf): void {
    const {
      payloadType,
      ctidTraderAccountId,
      positionId,
      usedMargin,
      moneyDigits,
    } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (positionId !== undefined && positionId !== null)
      pbf.writeVarintField(3, positionId);
    if (usedMargin !== undefined && usedMargin !== null)
      pbf.writeVarintField(4, usedMargin);
    if (moneyDigits !== undefined && moneyDigits !== null)
      pbf.writeVarintField(5, moneyDigits);
  }
}
