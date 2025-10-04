import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAClosePositionReq } from "../interfaces/ProtoOAClosePositionReq.js";

export class ProtoOAClosePositionReqUtils {
  static default(
    partialMessage?: Partial<ProtoOAClosePositionReq>,
  ): ProtoOAClosePositionReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_CLOSE_POSITION_REQ,
      ctidTraderAccountId: 0,
      positionId: 0,
      volume: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAClosePositionReq {
    return pbf.readFields(
      ProtoOAClosePositionReqUtils._readField,
      ProtoOAClosePositionReqUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAClosePositionReq,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) message.positionId = pbf.readVarint64();
    if (tag === 4) message.volume = pbf.readVarint64();
  }

  static write(message: ProtoOAClosePositionReq, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, positionId, volume } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (positionId !== undefined && positionId !== null)
      pbf.writeVarintField(3, positionId);
    if (volume !== undefined && volume !== null)
      pbf.writeVarintField(4, volume);
  }
}
