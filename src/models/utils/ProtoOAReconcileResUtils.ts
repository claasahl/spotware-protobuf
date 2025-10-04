import Pbf from "pbf";

import { ProtoOAPositionUtils } from "./ProtoOAPositionUtils.js";
import { ProtoOAOrderUtils } from "./ProtoOAOrderUtils.js";
import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAReconcileRes } from "../interfaces/ProtoOAReconcileRes.js";

export class ProtoOAReconcileResUtils {
  static default(
    partialMessage?: Partial<ProtoOAReconcileRes>,
  ): ProtoOAReconcileRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_RECONCILE_RES,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAReconcileRes {
    return pbf.readFields(
      ProtoOAReconcileResUtils._readField,
      ProtoOAReconcileResUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAReconcileRes,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      message.position = [
        ...(message.position ?? []),
        ProtoOAPositionUtils.read(pbf, pbf.readVarint() + pbf.pos),
      ];
    if (tag === 4)
      message.order = [
        ...(message.order ?? []),
        ProtoOAOrderUtils.read(pbf, pbf.readVarint() + pbf.pos),
      ];
  }

  static write(message: ProtoOAReconcileRes, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, position, order } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (position !== undefined && position !== null)
      position.forEach((position) => ProtoOAPositionUtils.write(position, pbf));
    if (order !== undefined && order !== null)
      order.forEach((order) => ProtoOAOrderUtils.write(order, pbf));
  }
}
