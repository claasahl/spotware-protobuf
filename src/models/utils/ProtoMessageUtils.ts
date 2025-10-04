import Pbf from "pbf";

import { ProtoMessage } from "../interfaces/ProtoMessage.js";

export class ProtoMessageUtils {
  static default(partialMessage?: Partial<ProtoMessage>): ProtoMessage {
    return {
      payloadType: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoMessage {
    return pbf.readFields(
      ProtoMessageUtils._readField,
      ProtoMessageUtils.default(),
      end,
    );
  }

  private static _readField(tag: number, message: ProtoMessage, pbf: Pbf) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.payload = pbf.readBytes();
    if (tag === 3) message.clientMsgId = pbf.readString();
  }

  static write(message: ProtoMessage, pbf: Pbf): void {
    const { payloadType, payload, clientMsgId } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (payload !== undefined && payload !== null)
      pbf.writeBytesField(2, payload);
    if (clientMsgId !== undefined && clientMsgId !== null)
      pbf.writeStringField(3, clientMsgId);
  }
}
