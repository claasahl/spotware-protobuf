import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAUnsubscribeDepthQuotesRes } from "../interfaces/ProtoOAUnsubscribeDepthQuotesRes.js";

export class ProtoOAUnsubscribeDepthQuotesResUtils {
  static default(
    partialMessage?: Partial<ProtoOAUnsubscribeDepthQuotesRes>,
  ): ProtoOAUnsubscribeDepthQuotesRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_DEPTH_QUOTES_RES,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAUnsubscribeDepthQuotesRes {
    return pbf.readFields(
      ProtoOAUnsubscribeDepthQuotesResUtils._readField,
      ProtoOAUnsubscribeDepthQuotesResUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAUnsubscribeDepthQuotesRes,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
  }

  static write(message: ProtoOAUnsubscribeDepthQuotesRes, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
  }
}
