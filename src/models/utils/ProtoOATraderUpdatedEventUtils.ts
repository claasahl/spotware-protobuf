import Pbf from "pbf";

import { ProtoOATraderUtils } from "./ProtoOATraderUtils.js";
import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOATraderUpdatedEvent } from "../interfaces/ProtoOATraderUpdatedEvent.js";

export class ProtoOATraderUpdatedEventUtils {
  static default(
    partialMessage?: Partial<ProtoOATraderUpdatedEvent>,
  ): ProtoOATraderUpdatedEvent {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_TRADER_UPDATE_EVENT,
      ctidTraderAccountId: 0,
      trader: ProtoOATraderUtils.default(),
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOATraderUpdatedEvent {
    return pbf.readFields(
      ProtoOATraderUpdatedEventUtils._readField,
      ProtoOATraderUpdatedEventUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOATraderUpdatedEvent,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      message.trader = ProtoOATraderUtils.read(pbf, pbf.readVarint() + pbf.pos);
  }

  static write(message: ProtoOATraderUpdatedEvent, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, trader } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (trader !== undefined && trader !== null)
      ProtoOATraderUtils.write(trader, pbf);
  }
}
