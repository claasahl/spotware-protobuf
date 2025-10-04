import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAExpectedMarginReq } from "../interfaces/ProtoOAExpectedMarginReq.js";

export class ProtoOAExpectedMarginReqUtils {
  static default(
    partialMessage?: Partial<ProtoOAExpectedMarginReq>,
  ): ProtoOAExpectedMarginReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_REQ,
      ctidTraderAccountId: 0,
      symbolId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAExpectedMarginReq {
    return pbf.readFields(
      ProtoOAExpectedMarginReqUtils._readField,
      ProtoOAExpectedMarginReqUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAExpectedMarginReq,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) message.symbolId = pbf.readVarint64();
    if (tag === 4)
      message.volume = [...(message.volume ?? []), pbf.readVarint64()];
  }

  static write(message: ProtoOAExpectedMarginReq, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, symbolId, volume } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (symbolId !== undefined && symbolId !== null)
      pbf.writeVarintField(3, symbolId);
    if (volume !== undefined && volume !== null)
      volume.forEach((volume) => pbf.writeVarintField(4, volume));
  }
}
