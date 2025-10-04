import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAv1PnLChangeSubscribeReq } from "../interfaces/ProtoOAv1PnLChangeSubscribeReq.js";

export class ProtoOAv1PnLChangeSubscribeReqUtils {
  static default(
    partialMessage?: Partial<ProtoOAv1PnLChangeSubscribeReq>,
  ): ProtoOAv1PnLChangeSubscribeReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_V1_PNL_CHANGE_SUBSCRIBE_REQ,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAv1PnLChangeSubscribeReq {
    return pbf.readFields(
      ProtoOAv1PnLChangeSubscribeReqUtils._readField,
      ProtoOAv1PnLChangeSubscribeReqUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAv1PnLChangeSubscribeReq,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
  }

  static write(message: ProtoOAv1PnLChangeSubscribeReq, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
  }
}
