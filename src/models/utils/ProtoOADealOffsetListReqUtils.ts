import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOADealOffsetListReq } from "../interfaces/ProtoOADealOffsetListReq.js";

export class ProtoOADealOffsetListReqUtils {
  static default(
    partialMessage?: Partial<ProtoOADealOffsetListReq>,
  ): ProtoOADealOffsetListReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_DEAL_OFFSET_LIST_REQ,
      ctidTraderAccountId: 0,
      dealId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOADealOffsetListReq {
    return pbf.readFields(
      ProtoOADealOffsetListReqUtils._readField,
      ProtoOADealOffsetListReqUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOADealOffsetListReq,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) message.dealId = pbf.readVarint64();
  }

  static write(message: ProtoOADealOffsetListReq, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, dealId } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (dealId !== undefined && dealId !== null)
      pbf.writeVarintField(3, dealId);
  }
}
