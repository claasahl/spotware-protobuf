import Pbf from "pbf";

import { ProtoOAOrderUtils } from "./ProtoOAOrderUtils.js";
import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAOrderListByPositionIdRes } from "../interfaces/ProtoOAOrderListByPositionIdRes.js";

export class ProtoOAOrderListByPositionIdResUtils {
  static default(
    partialMessage?: Partial<ProtoOAOrderListByPositionIdRes>,
  ): ProtoOAOrderListByPositionIdRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_ORDER_LIST_BY_POSITION_ID_RES,
      ctidTraderAccountId: 0,
      hasMore: false,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAOrderListByPositionIdRes {
    return pbf.readFields(
      ProtoOAOrderListByPositionIdResUtils._readField,
      ProtoOAOrderListByPositionIdResUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAOrderListByPositionIdRes,
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

  static write(message: ProtoOAOrderListByPositionIdRes, pbf: Pbf): void {
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
