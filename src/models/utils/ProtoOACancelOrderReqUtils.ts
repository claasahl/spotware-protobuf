import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOACancelOrderReq } from "../interfaces/ProtoOACancelOrderReq.js";

export class ProtoOACancelOrderReqUtils {
  static default(
    partialMessage?: Partial<ProtoOACancelOrderReq>,
  ): ProtoOACancelOrderReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_CANCEL_ORDER_REQ,
      ctidTraderAccountId: 0,
      orderId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOACancelOrderReq {
    return pbf.readFields(
      ProtoOACancelOrderReqUtils._readField,
      ProtoOACancelOrderReqUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOACancelOrderReq,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) message.orderId = pbf.readVarint64();
  }

  static write(message: ProtoOACancelOrderReq, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, orderId } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (orderId !== undefined && orderId !== null)
      pbf.writeVarintField(3, orderId);
  }
}
