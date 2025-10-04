import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOASymbolsForConversionReq } from "../interfaces/ProtoOASymbolsForConversionReq.js";

export class ProtoOASymbolsForConversionReqUtils {
  static default(
    partialMessage?: Partial<ProtoOASymbolsForConversionReq>,
  ): ProtoOASymbolsForConversionReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOLS_FOR_CONVERSION_REQ,
      ctidTraderAccountId: 0,
      firstAssetId: 0,
      lastAssetId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOASymbolsForConversionReq {
    return pbf.readFields(
      ProtoOASymbolsForConversionReqUtils._readField,
      ProtoOASymbolsForConversionReqUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOASymbolsForConversionReq,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) message.firstAssetId = pbf.readVarint64();
    if (tag === 4) message.lastAssetId = pbf.readVarint64();
  }

  static write(message: ProtoOASymbolsForConversionReq, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, firstAssetId, lastAssetId } =
      message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (firstAssetId !== undefined && firstAssetId !== null)
      pbf.writeVarintField(3, firstAssetId);
    if (lastAssetId !== undefined && lastAssetId !== null)
      pbf.writeVarintField(4, lastAssetId);
  }
}
