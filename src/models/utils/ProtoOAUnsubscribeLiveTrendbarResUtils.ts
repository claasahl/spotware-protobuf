import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAUnsubscribeLiveTrendbarRes } from "../interfaces/ProtoOAUnsubscribeLiveTrendbarRes.js";

export class ProtoOAUnsubscribeLiveTrendbarResUtils {
  static default(
    partialMessage?: Partial<ProtoOAUnsubscribeLiveTrendbarRes>,
  ): ProtoOAUnsubscribeLiveTrendbarRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_LIVE_TRENDBAR_RES,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAUnsubscribeLiveTrendbarRes {
    return pbf.readFields(
      ProtoOAUnsubscribeLiveTrendbarResUtils._readField,
      ProtoOAUnsubscribeLiveTrendbarResUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAUnsubscribeLiveTrendbarRes,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
  }

  static write(message: ProtoOAUnsubscribeLiveTrendbarRes, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
  }
}
