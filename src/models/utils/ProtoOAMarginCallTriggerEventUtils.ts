import Pbf from "pbf";

import { ProtoOAMarginCallUtils } from "./ProtoOAMarginCallUtils.js";
import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAMarginCallTriggerEvent } from "../interfaces/ProtoOAMarginCallTriggerEvent.js";

export class ProtoOAMarginCallTriggerEventUtils {
  static default(
    partialMessage?: Partial<ProtoOAMarginCallTriggerEvent>,
  ): ProtoOAMarginCallTriggerEvent {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_TRIGGER_EVENT,
      ctidTraderAccountId: 0,
      marginCall: ProtoOAMarginCallUtils.default(),
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAMarginCallTriggerEvent {
    return pbf.readFields(
      ProtoOAMarginCallTriggerEventUtils._readField,
      ProtoOAMarginCallTriggerEventUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAMarginCallTriggerEvent,
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

  static write(message: ProtoOAMarginCallTriggerEvent, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, marginCall } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (marginCall !== undefined && marginCall !== null)
      ProtoOAMarginCallUtils.write(marginCall, pbf);
  }
}
