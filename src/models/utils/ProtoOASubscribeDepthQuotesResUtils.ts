import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOASubscribeDepthQuotesRes } from "../interfaces/ProtoOASubscribeDepthQuotesRes.js";

export class ProtoOASubscribeDepthQuotesResUtils {
  static default(
    partialMessage?: Partial<ProtoOASubscribeDepthQuotesRes>,
  ): ProtoOASubscribeDepthQuotesRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_RES,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOASubscribeDepthQuotesRes {
    return pbf.readFields(
      ProtoOASubscribeDepthQuotesResUtils._readField,
      ProtoOASubscribeDepthQuotesResUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOASubscribeDepthQuotesRes,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
  }

  static write(message: ProtoOASubscribeDepthQuotesRes, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
  }
}
