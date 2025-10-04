import Pbf from "pbf";

import { ProtoOAAssetClass } from "../interfaces/ProtoOAAssetClass.js";

export class ProtoOAAssetClassUtils {
  static default(
    partialMessage?: Partial<ProtoOAAssetClass>,
  ): ProtoOAAssetClass {
    return {
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAAssetClass {
    return pbf.readFields(
      ProtoOAAssetClassUtils._readField,
      ProtoOAAssetClassUtils.default(),
      end,
    );
  }

  private static _readField(tag: number, message: ProtoOAAssetClass, pbf: Pbf) {
    if (tag === 1) message.id = pbf.readVarint64();
    if (tag === 2) message.name = pbf.readString();
    if (tag === 3) message.sortingNumber = pbf.readDouble();
  }

  static write(message: ProtoOAAssetClass, pbf: Pbf): void {
    const { id, name, sortingNumber } = message;
    if (id !== undefined && id !== null) pbf.writeVarintField(1, id);
    if (name !== undefined && name !== null) pbf.writeStringField(2, name);
    if (sortingNumber !== undefined && sortingNumber !== null)
      pbf.writeDoubleField(3, sortingNumber);
  }
}
