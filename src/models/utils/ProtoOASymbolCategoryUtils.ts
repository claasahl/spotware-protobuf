import Pbf from "pbf";

import { ProtoOASymbolCategory } from "../interfaces/ProtoOASymbolCategory.js";

export class ProtoOASymbolCategoryUtils {
  static default(
    partialMessage?: Partial<ProtoOASymbolCategory>,
  ): ProtoOASymbolCategory {
    return {
      id: 0,
      assetClassId: 0,
      name: "",
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOASymbolCategory {
    return pbf.readFields(
      ProtoOASymbolCategoryUtils._readField,
      ProtoOASymbolCategoryUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOASymbolCategory,
    pbf: Pbf,
  ) {
    if (tag === 1) message.id = pbf.readVarint64();
    if (tag === 2) message.assetClassId = pbf.readVarint64();
    if (tag === 3) message.name = pbf.readString();
    if (tag === 4) message.sortingNumber = pbf.readDouble();
  }

  static write(message: ProtoOASymbolCategory, pbf: Pbf): void {
    const { id, assetClassId, name, sortingNumber } = message;
    if (id !== undefined && id !== null) pbf.writeVarintField(1, id);
    if (assetClassId !== undefined && assetClassId !== null)
      pbf.writeVarintField(2, assetClassId);
    if (name !== undefined && name !== null) pbf.writeStringField(3, name);
    if (sortingNumber !== undefined && sortingNumber !== null)
      pbf.writeDoubleField(4, sortingNumber);
  }
}
