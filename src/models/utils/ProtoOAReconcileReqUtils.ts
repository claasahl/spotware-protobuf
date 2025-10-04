import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAReconcileReq } from "../interfaces/ProtoOAReconcileReq.js";

export class ProtoOAReconcileReqUtils {
  static default(
    partialMessage?: Partial<ProtoOAReconcileReq>,
  ): ProtoOAReconcileReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_RECONCILE_REQ,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAReconcileReq {
    return pbf.readFields(
      ProtoOAReconcileReqUtils._readField,
      ProtoOAReconcileReqUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAReconcileReq,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) message.returnProtectionOrders = pbf.readBoolean();
  }

  static write(message: ProtoOAReconcileReq, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, returnProtectionOrders } =
      message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (returnProtectionOrders !== undefined && returnProtectionOrders !== null)
      pbf.writeBooleanField(3, returnProtectionOrders);
  }
}
