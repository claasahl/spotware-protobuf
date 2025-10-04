import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOADealListReq } from "../interfaces/ProtoOADealListReq.js";

export class ProtoOADealListReqUtils {
  static default(
    partialMessage?: Partial<ProtoOADealListReq>,
  ): ProtoOADealListReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_DEAL_LIST_REQ,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOADealListReq {
    return pbf.readFields(
      ProtoOADealListReqUtils._readField,
      ProtoOADealListReqUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOADealListReq,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) message.fromTimestamp = pbf.readVarint64();
    if (tag === 4) message.toTimestamp = pbf.readVarint64();
    if (tag === 5) message.maxRows = pbf.readVarint();
  }

  static write(message: ProtoOADealListReq, pbf: Pbf): void {
    const {
      payloadType,
      ctidTraderAccountId,
      fromTimestamp,
      toTimestamp,
      maxRows,
    } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (fromTimestamp !== undefined && fromTimestamp !== null)
      pbf.writeVarintField(3, fromTimestamp);
    if (toTimestamp !== undefined && toTimestamp !== null)
      pbf.writeVarintField(4, toTimestamp);
    if (maxRows !== undefined && maxRows !== null)
      pbf.writeVarintField(5, maxRows);
  }
}
