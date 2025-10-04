import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAClientDisconnectEvent } from "../interfaces/ProtoOAClientDisconnectEvent.js";

export class ProtoOAClientDisconnectEventUtils {
  static default(
    partialMessage?: Partial<ProtoOAClientDisconnectEvent>,
  ): ProtoOAClientDisconnectEvent {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_CLIENT_DISCONNECT_EVENT,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAClientDisconnectEvent {
    return pbf.readFields(
      ProtoOAClientDisconnectEventUtils._readField,
      ProtoOAClientDisconnectEventUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAClientDisconnectEvent,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.reason = pbf.readString();
  }

  static write(message: ProtoOAClientDisconnectEvent, pbf: Pbf): void {
    const { payloadType, reason } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (reason !== undefined && reason !== null)
      pbf.writeStringField(2, reason);
  }
}
