import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAUnsubscribeDepthQuotesReq } from "../interfaces/ProtoOAUnsubscribeDepthQuotesReq.js";

export class ProtoOAUnsubscribeDepthQuotesReqUtils {
  static default(
    partialMessage?: Partial<ProtoOAUnsubscribeDepthQuotesReq>,
  ): ProtoOAUnsubscribeDepthQuotesReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_REQ,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAUnsubscribeDepthQuotesReq {
    return pbf.readFields(
      ProtoOAUnsubscribeDepthQuotesReqUtils._readField,
      ProtoOAUnsubscribeDepthQuotesReqUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAUnsubscribeDepthQuotesReq,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      message.symbolId = [...(message.symbolId ?? []), pbf.readVarint64()];
  }

  static write(message: ProtoOAUnsubscribeDepthQuotesReq, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, symbolId } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (symbolId !== undefined && symbolId !== null)
      symbolId.forEach((symbolId) => pbf.writeVarintField(3, symbolId));
  }
}
