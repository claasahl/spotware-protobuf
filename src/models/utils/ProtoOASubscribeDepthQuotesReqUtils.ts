import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOASubscribeDepthQuotesReq } from "../interfaces/ProtoOASubscribeDepthQuotesReq.js";

export class ProtoOASubscribeDepthQuotesReqUtils {
  static default(
    partialMessage?: Partial<ProtoOASubscribeDepthQuotesReq>,
  ): ProtoOASubscribeDepthQuotesReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_DEPTH_QUOTES_REQ,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOASubscribeDepthQuotesReq {
    return pbf.readFields(
      ProtoOASubscribeDepthQuotesReqUtils._readField,
      ProtoOASubscribeDepthQuotesReqUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOASubscribeDepthQuotesReq,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      message.symbolId = [...(message.symbolId ?? []), pbf.readVarint64()];
  }

  static write(message: ProtoOASubscribeDepthQuotesReq, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, symbolId } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (symbolId !== undefined && symbolId !== null)
      symbolId.forEach((symbolId) => pbf.writeVarintField(3, symbolId));
  }
}
