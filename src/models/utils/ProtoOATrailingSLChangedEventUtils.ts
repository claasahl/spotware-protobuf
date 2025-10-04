import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOATrailingSLChangedEvent } from "../interfaces/ProtoOATrailingSLChangedEvent.js";

export class ProtoOATrailingSLChangedEventUtils {
  static default(
    partialMessage?: Partial<ProtoOATrailingSLChangedEvent>,
  ): ProtoOATrailingSLChangedEvent {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_TRAILING_SL_CHANGED_EVENT,
      ctidTraderAccountId: 0,
      positionId: 0,
      orderId: 0,
      stopPrice: 0,
      utcLastUpdateTimestamp: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOATrailingSLChangedEvent {
    return pbf.readFields(
      ProtoOATrailingSLChangedEventUtils._readField,
      ProtoOATrailingSLChangedEventUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOATrailingSLChangedEvent,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) message.positionId = pbf.readVarint64();
    if (tag === 4) message.orderId = pbf.readVarint64();
    if (tag === 5) message.stopPrice = pbf.readDouble();
    if (tag === 6) message.utcLastUpdateTimestamp = pbf.readVarint64();
  }

  static write(message: ProtoOATrailingSLChangedEvent, pbf: Pbf): void {
    const {
      payloadType,
      ctidTraderAccountId,
      positionId,
      orderId,
      stopPrice,
      utcLastUpdateTimestamp,
    } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (positionId !== undefined && positionId !== null)
      pbf.writeVarintField(3, positionId);
    if (orderId !== undefined && orderId !== null)
      pbf.writeVarintField(4, orderId);
    if (stopPrice !== undefined && stopPrice !== null)
      pbf.writeDoubleField(5, stopPrice);
    if (utcLastUpdateTimestamp !== undefined && utcLastUpdateTimestamp !== null)
      pbf.writeVarintField(6, utcLastUpdateTimestamp);
  }
}
