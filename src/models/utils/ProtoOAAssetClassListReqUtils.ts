import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAAssetClassListReq } from "../interfaces/ProtoOAAssetClassListReq.js";

export class ProtoOAAssetClassListReqUtils {
  static default(
    partialMessage?: Partial<ProtoOAAssetClassListReq>,
  ): ProtoOAAssetClassListReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_ASSET_CLASS_LIST_REQ,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAAssetClassListReq {
    return pbf.readFields(
      ProtoOAAssetClassListReqUtils._readField,
      ProtoOAAssetClassListReqUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAAssetClassListReq,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
  }

  static write(message: ProtoOAAssetClassListReq, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
  }
}
