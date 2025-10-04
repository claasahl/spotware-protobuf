import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOASymbolByIdReq } from "../interfaces/ProtoOASymbolByIdReq.js";

export class ProtoOASymbolByIdReqUtils {
  static default(
    partialMessage?: Partial<ProtoOASymbolByIdReq>,
  ): ProtoOASymbolByIdReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_REQ,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOASymbolByIdReq {
    return pbf.readFields(
      ProtoOASymbolByIdReqUtils._readField,
      ProtoOASymbolByIdReqUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOASymbolByIdReq,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      message.symbolId = [...(message.symbolId ?? []), pbf.readVarint64()];
  }

  static write(message: ProtoOASymbolByIdReq, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, symbolId } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (symbolId !== undefined && symbolId !== null)
      symbolId.forEach((symbolId) => pbf.writeVarintField(3, symbolId));
  }
}
