import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAOrderErrorEvent } from "../interfaces/ProtoOAOrderErrorEvent.js";

export class ProtoOAOrderErrorEventUtils {
  static default(
    partialMessage?: Partial<ProtoOAOrderErrorEvent>,
  ): ProtoOAOrderErrorEvent {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_ORDER_ERROR_EVENT,
      ctidTraderAccountId: 0,
      errorCode: "",
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAOrderErrorEvent {
    return pbf.readFields(
      ProtoOAOrderErrorEventUtils._readField,
      ProtoOAOrderErrorEventUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAOrderErrorEvent,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 5) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 2) message.errorCode = pbf.readString();
    if (tag === 3) message.orderId = pbf.readVarint64();
    if (tag === 6) message.positionId = pbf.readVarint64();
    if (tag === 7) message.description = pbf.readString();
  }

  static write(message: ProtoOAOrderErrorEvent, pbf: Pbf): void {
    const {
      payloadType,
      ctidTraderAccountId,
      errorCode,
      orderId,
      positionId,
      description,
    } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(5, ctidTraderAccountId);
    if (errorCode !== undefined && errorCode !== null)
      pbf.writeStringField(2, errorCode);
    if (orderId !== undefined && orderId !== null)
      pbf.writeVarintField(3, orderId);
    if (positionId !== undefined && positionId !== null)
      pbf.writeVarintField(6, positionId);
    if (description !== undefined && description !== null)
      pbf.writeStringField(7, description);
  }
}
