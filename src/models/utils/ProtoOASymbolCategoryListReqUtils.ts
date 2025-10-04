import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOASymbolCategoryListReq } from "../interfaces/ProtoOASymbolCategoryListReq.js";

export class ProtoOASymbolCategoryListReqUtils {
  static default(
    partialMessage?: Partial<ProtoOASymbolCategoryListReq>,
  ): ProtoOASymbolCategoryListReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_REQ,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOASymbolCategoryListReq {
    return pbf.readFields(
      ProtoOASymbolCategoryListReqUtils._readField,
      ProtoOASymbolCategoryListReqUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOASymbolCategoryListReq,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
  }

  static write(message: ProtoOASymbolCategoryListReq, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
  }
}
