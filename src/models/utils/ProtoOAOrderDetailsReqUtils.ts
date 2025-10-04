import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAOrderDetailsReq } from "../interfaces/ProtoOAOrderDetailsReq.js";

export class ProtoOAOrderDetailsReqUtils {
  static default(
    partialMessage?: Partial<ProtoOAOrderDetailsReq>,
  ): ProtoOAOrderDetailsReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_ORDER_DETAILS_REQ,
      ctidTraderAccountId: 0,
      orderId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAOrderDetailsReq {
    return pbf.readFields(
      ProtoOAOrderDetailsReqUtils._readField,
      ProtoOAOrderDetailsReqUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAOrderDetailsReq,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) message.orderId = pbf.readVarint64();
  }

  static write(message: ProtoOAOrderDetailsReq, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, orderId } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (orderId !== undefined && orderId !== null)
      pbf.writeVarintField(3, orderId);
  }
}
