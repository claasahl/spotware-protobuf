import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOASubscribeLiveTrendbarRes } from "../interfaces/ProtoOASubscribeLiveTrendbarRes.js";

export class ProtoOASubscribeLiveTrendbarResUtils {
  static default(
    partialMessage?: Partial<ProtoOASubscribeLiveTrendbarRes>,
  ): ProtoOASubscribeLiveTrendbarRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_LIVE_TRENDBAR_RES,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOASubscribeLiveTrendbarRes {
    return pbf.readFields(
      ProtoOASubscribeLiveTrendbarResUtils._readField,
      ProtoOASubscribeLiveTrendbarResUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOASubscribeLiveTrendbarRes,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
  }

  static write(message: ProtoOASubscribeLiveTrendbarRes, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
  }
}
