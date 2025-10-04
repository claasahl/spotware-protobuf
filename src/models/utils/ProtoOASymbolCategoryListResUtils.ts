import Pbf from "pbf";

import { ProtoOASymbolCategoryUtils } from "./ProtoOASymbolCategoryUtils.js";
import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOASymbolCategoryListRes } from "../interfaces/ProtoOASymbolCategoryListRes.js";

export class ProtoOASymbolCategoryListResUtils {
  static default(
    partialMessage?: Partial<ProtoOASymbolCategoryListRes>,
  ): ProtoOASymbolCategoryListRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOL_CATEGORY_RES,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOASymbolCategoryListRes {
    return pbf.readFields(
      ProtoOASymbolCategoryListResUtils._readField,
      ProtoOASymbolCategoryListResUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOASymbolCategoryListRes,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      message.symbolCategory = [
        ...(message.symbolCategory ?? []),
        ProtoOASymbolCategoryUtils.read(pbf, pbf.readVarint() + pbf.pos),
      ];
  }

  static write(message: ProtoOASymbolCategoryListRes, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, symbolCategory } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (symbolCategory !== undefined && symbolCategory !== null)
      symbolCategory.forEach((symbolCategory) =>
        ProtoOASymbolCategoryUtils.write(symbolCategory, pbf),
      );
  }
}
