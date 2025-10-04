import Pbf from "pbf";

import { ProtoOAAssetClassUtils } from "./ProtoOAAssetClassUtils.js";
import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAAssetClassListRes } from "../interfaces/ProtoOAAssetClassListRes.js";

export class ProtoOAAssetClassListResUtils {
  static default(
    partialMessage?: Partial<ProtoOAAssetClassListRes>,
  ): ProtoOAAssetClassListRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_RES,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAAssetClassListRes {
    return pbf.readFields(
      ProtoOAAssetClassListResUtils._readField,
      ProtoOAAssetClassListResUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAAssetClassListRes,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      message.assetClass = [
        ...(message.assetClass ?? []),
        ProtoOAAssetClassUtils.read(pbf, pbf.readVarint() + pbf.pos),
      ];
  }

  static write(message: ProtoOAAssetClassListRes, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, assetClass } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (assetClass !== undefined && assetClass !== null)
      assetClass.forEach((assetClass) =>
        ProtoOAAssetClassUtils.write(assetClass, pbf),
      );
  }
}
