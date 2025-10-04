import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAUnsubscribeSpotsReq } from "../interfaces/ProtoOAUnsubscribeSpotsReq.js";

export class ProtoOAUnsubscribeSpotsReqUtils {
  static default(
    partialMessage?: Partial<ProtoOAUnsubscribeSpotsReq>,
  ): ProtoOAUnsubscribeSpotsReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_REQ,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAUnsubscribeSpotsReq {
    return pbf.readFields(
      ProtoOAUnsubscribeSpotsReqUtils._readField,
      ProtoOAUnsubscribeSpotsReqUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAUnsubscribeSpotsReq,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      message.symbolId = [...(message.symbolId ?? []), pbf.readVarint64()];
  }

  static write(message: ProtoOAUnsubscribeSpotsReq, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, symbolId } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (symbolId !== undefined && symbolId !== null)
      symbolId.forEach((symbolId) => pbf.writeVarintField(3, symbolId));
  }
}
