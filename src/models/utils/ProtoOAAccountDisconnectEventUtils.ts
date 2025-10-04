import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAAccountDisconnectEvent } from "../interfaces/ProtoOAAccountDisconnectEvent.js";

export class ProtoOAAccountDisconnectEventUtils {
  static default(
    partialMessage?: Partial<ProtoOAAccountDisconnectEvent>,
  ): ProtoOAAccountDisconnectEvent {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_ACCOUNT_DISCONNECT_EVENT,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAAccountDisconnectEvent {
    return pbf.readFields(
      ProtoOAAccountDisconnectEventUtils._readField,
      ProtoOAAccountDisconnectEventUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAAccountDisconnectEvent,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
  }

  static write(message: ProtoOAAccountDisconnectEvent, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
  }
}
