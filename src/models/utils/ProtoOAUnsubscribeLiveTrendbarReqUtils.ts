import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOATrendbarPeriod } from "../enums/ProtoOATrendbarPeriod.js";
import { ProtoOAUnsubscribeLiveTrendbarReq } from "../interfaces/ProtoOAUnsubscribeLiveTrendbarReq.js";

export class ProtoOAUnsubscribeLiveTrendbarReqUtils {
  static default(
    partialMessage?: Partial<ProtoOAUnsubscribeLiveTrendbarReq>,
  ): ProtoOAUnsubscribeLiveTrendbarReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_REQ,
      ctidTraderAccountId: 0,
      period: Object.values(ProtoOATrendbarPeriod)[0] as ProtoOATrendbarPeriod,
      symbolId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAUnsubscribeLiveTrendbarReq {
    return pbf.readFields(
      ProtoOAUnsubscribeLiveTrendbarReqUtils._readField,
      ProtoOAUnsubscribeLiveTrendbarReqUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAUnsubscribeLiveTrendbarReq,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) message.period = pbf.readVarint();
    if (tag === 4) message.symbolId = pbf.readVarint64();
  }

  static write(message: ProtoOAUnsubscribeLiveTrendbarReq, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, period, symbolId } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (period !== undefined && period !== null)
      pbf.writeVarintField(3, period);
    if (symbolId !== undefined && symbolId !== null)
      pbf.writeVarintField(4, symbolId);
  }
}
