import Pbf from "pbf";

import { ProtoPayloadType } from "../enums/ProtoPayloadType.js";
import { ProtoHeartbeatEvent } from "../interfaces/ProtoHeartbeatEvent.js";

export class ProtoHeartbeatEventUtils {
  static default(
    partialMessage?: Partial<ProtoHeartbeatEvent>,
  ): ProtoHeartbeatEvent {
    return {
      payloadType: ProtoPayloadType.HEARTBEAT_EVENT,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoHeartbeatEvent {
    return pbf.readFields(
      ProtoHeartbeatEventUtils._readField,
      ProtoHeartbeatEventUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoHeartbeatEvent,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
  }

  static write(message: ProtoHeartbeatEvent, pbf: Pbf): void {
    const { payloadType } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
  }
}
