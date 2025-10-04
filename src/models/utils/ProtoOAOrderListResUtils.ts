import Pbf from "pbf";

import { ProtoOAOrderUtils } from "./ProtoOAOrderUtils.js";
import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAOrderListRes } from "../interfaces/ProtoOAOrderListRes.js";

export class ProtoOAOrderListResUtils {
  static default(
    partialMessage?: Partial<ProtoOAOrderListRes>,
  ): ProtoOAOrderListRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_ORDER_LIST_RES,
      ctidTraderAccountId: 0,
      hasMore: false,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAOrderListRes {
    return pbf.readFields(
      ProtoOAOrderListResUtils._readField,
      ProtoOAOrderListResUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAOrderListRes,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      message.order = [
        ...(message.order ?? []),
        ProtoOAOrderUtils.read(pbf, pbf.readVarint() + pbf.pos),
      ];
    if (tag === 4) message.hasMore = pbf.readBoolean();
  }

  static write(message: ProtoOAOrderListRes, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, order, hasMore } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (order !== undefined && order !== null)
      order.forEach((order) => ProtoOAOrderUtils.write(order, pbf));
    if (hasMore !== undefined && hasMore !== null)
      pbf.writeBooleanField(4, hasMore);
  }
}
