import Pbf from "pbf";

import { ProtoOAMarginCallUtils } from "./ProtoOAMarginCallUtils.js";
import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAMarginCallUpdateEvent } from "../interfaces/ProtoOAMarginCallUpdateEvent.js";

export class ProtoOAMarginCallUpdateEventUtils {
  static default(
    partialMessage?: Partial<ProtoOAMarginCallUpdateEvent>,
  ): ProtoOAMarginCallUpdateEvent {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_UPDATE_EVENT,
      ctidTraderAccountId: 0,
      marginCall: ProtoOAMarginCallUtils.default(),
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAMarginCallUpdateEvent {
    return pbf.readFields(
      ProtoOAMarginCallUpdateEventUtils._readField,
      ProtoOAMarginCallUpdateEventUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAMarginCallUpdateEvent,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      message.marginCall = ProtoOAMarginCallUtils.read(
        pbf,
        pbf.readVarint() + pbf.pos,
      );
  }

  static write(message: ProtoOAMarginCallUpdateEvent, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, marginCall } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (marginCall !== undefined && marginCall !== null)
      ProtoOAMarginCallUtils.write(marginCall, pbf);
  }
}
