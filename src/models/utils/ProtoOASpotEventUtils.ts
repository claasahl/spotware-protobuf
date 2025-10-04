import Pbf from "pbf";

import { ProtoOATrendbarUtils } from "./ProtoOATrendbarUtils.js";
import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOASpotEvent } from "../interfaces/ProtoOASpotEvent.js";

export class ProtoOASpotEventUtils {
  static default(partialMessage?: Partial<ProtoOASpotEvent>): ProtoOASpotEvent {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_SPOT_EVENT,
      ctidTraderAccountId: 0,
      symbolId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOASpotEvent {
    return pbf.readFields(
      ProtoOASpotEventUtils._readField,
      ProtoOASpotEventUtils.default(),
      end,
    );
  }

  private static _readField(tag: number, message: ProtoOASpotEvent, pbf: Pbf) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) message.symbolId = pbf.readVarint64();
    if (tag === 4) message.bid = pbf.readVarint64();
    if (tag === 5) message.ask = pbf.readVarint64();
    if (tag === 6)
      message.trendbar = [
        ...(message.trendbar ?? []),
        ProtoOATrendbarUtils.read(pbf, pbf.readVarint() + pbf.pos),
      ];
    if (tag === 7) message.sessionClose = pbf.readVarint64();
    if (tag === 8) message.timestamp = pbf.readVarint64();
  }

  static write(message: ProtoOASpotEvent, pbf: Pbf): void {
    const {
      payloadType,
      ctidTraderAccountId,
      symbolId,
      bid,
      ask,
      trendbar,
      sessionClose,
      timestamp,
    } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (symbolId !== undefined && symbolId !== null)
      pbf.writeVarintField(3, symbolId);
    if (bid !== undefined && bid !== null) pbf.writeVarintField(4, bid);
    if (ask !== undefined && ask !== null) pbf.writeVarintField(5, ask);
    if (trendbar !== undefined && trendbar !== null)
      trendbar.forEach((trendbar) => ProtoOATrendbarUtils.write(trendbar, pbf));
    if (sessionClose !== undefined && sessionClose !== null)
      pbf.writeVarintField(7, sessionClose);
    if (timestamp !== undefined && timestamp !== null)
      pbf.writeVarintField(8, timestamp);
  }
}
