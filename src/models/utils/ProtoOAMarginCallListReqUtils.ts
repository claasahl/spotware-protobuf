import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAMarginCallListReq } from "../interfaces/ProtoOAMarginCallListReq.js";

export class ProtoOAMarginCallListReqUtils {
  static default(
    partialMessage?: Partial<ProtoOAMarginCallListReq>,
  ): ProtoOAMarginCallListReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_MARGIN_CALL_LIST_REQ,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAMarginCallListReq {
    return pbf.readFields(
      ProtoOAMarginCallListReqUtils._readField,
      ProtoOAMarginCallListReqUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAMarginCallListReq,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
  }

  static write(message: ProtoOAMarginCallListReq, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
  }
}
