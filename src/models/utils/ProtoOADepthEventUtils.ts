import Pbf from "pbf";

import { ProtoOADepthQuoteUtils } from "./ProtoOADepthQuoteUtils.js";
import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOADepthEvent } from "../interfaces/ProtoOADepthEvent.js";

export class ProtoOADepthEventUtils {
  static default(
    partialMessage?: Partial<ProtoOADepthEvent>,
  ): ProtoOADepthEvent {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_DEPTH_EVENT,
      ctidTraderAccountId: 0,
      symbolId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOADepthEvent {
    return pbf.readFields(
      ProtoOADepthEventUtils._readField,
      ProtoOADepthEventUtils.default(),
      end,
    );
  }

  private static _readField(tag: number, message: ProtoOADepthEvent, pbf: Pbf) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) message.symbolId = pbf.readVarint64();
    if (tag === 4)
      message.newQuotes = [
        ...(message.newQuotes ?? []),
        ProtoOADepthQuoteUtils.read(pbf, pbf.readVarint() + pbf.pos),
      ];
    if (tag === 5)
      message.deletedQuotes = pbf.readPackedVarint([
        ...(message.deletedQuotes ?? []),
      ]);
  }

  static write(message: ProtoOADepthEvent, pbf: Pbf): void {
    const {
      payloadType,
      ctidTraderAccountId,
      symbolId,
      newQuotes,
      deletedQuotes,
    } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (symbolId !== undefined && symbolId !== null)
      pbf.writeVarintField(3, symbolId);
    if (newQuotes !== undefined && newQuotes !== null)
      newQuotes.forEach((newQuotes) =>
        ProtoOADepthQuoteUtils.write(newQuotes, pbf),
      );
    if (deletedQuotes !== undefined && deletedQuotes !== null)
      pbf.writePackedVarint(5, [...deletedQuotes]);
  }
}
