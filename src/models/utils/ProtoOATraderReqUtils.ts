import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOATraderReq } from "../interfaces/ProtoOATraderReq.js";

export class ProtoOATraderReqUtils {
  static default(partialMessage?: Partial<ProtoOATraderReq>): ProtoOATraderReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_TRADER_REQ,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOATraderReq {
    return pbf.readFields(
      ProtoOATraderReqUtils._readField,
      ProtoOATraderReqUtils.default(),
      end,
    );
  }

  private static _readField(tag: number, message: ProtoOATraderReq, pbf: Pbf) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
  }

  static write(message: ProtoOATraderReq, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
  }
}
