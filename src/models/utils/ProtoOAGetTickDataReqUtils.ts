import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAQuoteType } from "../enums/ProtoOAQuoteType.js";
import { ProtoOAGetTickDataReq } from "../interfaces/ProtoOAGetTickDataReq.js";

export class ProtoOAGetTickDataReqUtils {
  static default(
    partialMessage?: Partial<ProtoOAGetTickDataReq>,
  ): ProtoOAGetTickDataReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_GET_TICKDATA_REQ,
      ctidTraderAccountId: 0,
      symbolId: 0,
      type: Object.values(ProtoOAQuoteType)[0] as ProtoOAQuoteType,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAGetTickDataReq {
    return pbf.readFields(
      ProtoOAGetTickDataReqUtils._readField,
      ProtoOAGetTickDataReqUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAGetTickDataReq,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) message.symbolId = pbf.readVarint64();
    if (tag === 4) message.type = pbf.readVarint();
    if (tag === 5) message.fromTimestamp = pbf.readVarint64();
    if (tag === 6) message.toTimestamp = pbf.readVarint64();
  }

  static write(message: ProtoOAGetTickDataReq, pbf: Pbf): void {
    const {
      payloadType,
      ctidTraderAccountId,
      symbolId,
      type,
      fromTimestamp,
      toTimestamp,
    } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (symbolId !== undefined && symbolId !== null)
      pbf.writeVarintField(3, symbolId);
    if (type !== undefined && type !== null) pbf.writeVarintField(4, type);
    if (fromTimestamp !== undefined && fromTimestamp !== null)
      pbf.writeVarintField(5, fromTimestamp);
    if (toTimestamp !== undefined && toTimestamp !== null)
      pbf.writeVarintField(6, toTimestamp);
  }
}
