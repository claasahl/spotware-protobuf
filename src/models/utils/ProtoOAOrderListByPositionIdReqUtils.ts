import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAOrderListByPositionIdReq } from "../interfaces/ProtoOAOrderListByPositionIdReq.js";

export class ProtoOAOrderListByPositionIdReqUtils {
  static default(
    partialMessage?: Partial<ProtoOAOrderListByPositionIdReq>,
  ): ProtoOAOrderListByPositionIdReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_ORDER_LIST_BY_POSITION_ID_REQ,
      ctidTraderAccountId: 0,
      positionId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAOrderListByPositionIdReq {
    return pbf.readFields(
      ProtoOAOrderListByPositionIdReqUtils._readField,
      ProtoOAOrderListByPositionIdReqUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAOrderListByPositionIdReq,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) message.positionId = pbf.readVarint64();
    if (tag === 4) message.fromTimestamp = pbf.readVarint64();
    if (tag === 5) message.toTimestamp = pbf.readVarint64();
  }

  static write(message: ProtoOAOrderListByPositionIdReq, pbf: Pbf): void {
    const {
      payloadType,
      ctidTraderAccountId,
      positionId,
      fromTimestamp,
      toTimestamp,
    } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (positionId !== undefined && positionId !== null)
      pbf.writeVarintField(3, positionId);
    if (fromTimestamp !== undefined && fromTimestamp !== null)
      pbf.writeVarintField(4, fromTimestamp);
    if (toTimestamp !== undefined && toTimestamp !== null)
      pbf.writeVarintField(5, toTimestamp);
  }
}
