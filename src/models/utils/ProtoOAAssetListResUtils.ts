import Pbf from "pbf";

import { ProtoOAAssetUtils } from "./ProtoOAAssetUtils.js";
import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAAssetListRes } from "../interfaces/ProtoOAAssetListRes.js";

export class ProtoOAAssetListResUtils {
  static default(
    partialMessage?: Partial<ProtoOAAssetListRes>,
  ): ProtoOAAssetListRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_ASSET_LIST_RES,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAAssetListRes {
    return pbf.readFields(
      ProtoOAAssetListResUtils._readField,
      ProtoOAAssetListResUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAAssetListRes,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      message.asset = [
        ...(message.asset ?? []),
        ProtoOAAssetUtils.read(pbf, pbf.readVarint() + pbf.pos),
      ];
  }

  static write(message: ProtoOAAssetListRes, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, asset } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (asset !== undefined && asset !== null)
      asset.forEach((asset) => ProtoOAAssetUtils.write(asset, pbf));
  }
}
