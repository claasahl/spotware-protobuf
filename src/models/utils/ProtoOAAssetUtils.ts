import Pbf from "pbf";

import { ProtoOAAsset } from "../interfaces/ProtoOAAsset.js";

export class ProtoOAAssetUtils {
  static default(partialMessage?: Partial<ProtoOAAsset>): ProtoOAAsset {
    return {
      assetId: 0,
      name: "",
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAAsset {
    return pbf.readFields(
      ProtoOAAssetUtils._readField,
      ProtoOAAssetUtils.default(),
      end,
    );
  }

  private static _readField(tag: number, message: ProtoOAAsset, pbf: Pbf) {
    if (tag === 1) message.assetId = pbf.readVarint64();
    if (tag === 2) message.name = pbf.readString();
    if (tag === 3) message.displayName = pbf.readString();
    if (tag === 4) message.digits = pbf.readVarint();
  }

  static write(message: ProtoOAAsset, pbf: Pbf): void {
    const { assetId, name, displayName, digits } = message;
    if (assetId !== undefined && assetId !== null)
      pbf.writeVarintField(1, assetId);
    if (name !== undefined && name !== null) pbf.writeStringField(2, name);
    if (displayName !== undefined && displayName !== null)
      pbf.writeStringField(3, displayName);
    if (digits !== undefined && digits !== null)
      pbf.writeVarintField(4, digits);
  }
}
