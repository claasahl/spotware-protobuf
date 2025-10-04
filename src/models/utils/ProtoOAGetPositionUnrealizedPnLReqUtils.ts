import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAGetPositionUnrealizedPnLReq } from "../interfaces/ProtoOAGetPositionUnrealizedPnLReq.js";

export class ProtoOAGetPositionUnrealizedPnLReqUtils {
  static default(
    partialMessage?: Partial<ProtoOAGetPositionUnrealizedPnLReq>,
  ): ProtoOAGetPositionUnrealizedPnLReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_GET_POSITION_UNREALIZED_PNL_REQ,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAGetPositionUnrealizedPnLReq {
    return pbf.readFields(
      ProtoOAGetPositionUnrealizedPnLReqUtils._readField,
      ProtoOAGetPositionUnrealizedPnLReqUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAGetPositionUnrealizedPnLReq,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
  }

  static write(message: ProtoOAGetPositionUnrealizedPnLReq, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
  }
}
