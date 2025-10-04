import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOATrendbarPeriod } from "../enums/ProtoOATrendbarPeriod.js";
import { ProtoOAGetTrendbarsReq } from "../interfaces/ProtoOAGetTrendbarsReq.js";

export class ProtoOAGetTrendbarsReqUtils {
  static default(
    partialMessage?: Partial<ProtoOAGetTrendbarsReq>,
  ): ProtoOAGetTrendbarsReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_REQ,
      ctidTraderAccountId: 0,
      period: Object.values(ProtoOATrendbarPeriod)[0] as ProtoOATrendbarPeriod,
      symbolId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAGetTrendbarsReq {
    return pbf.readFields(
      ProtoOAGetTrendbarsReqUtils._readField,
      ProtoOAGetTrendbarsReqUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAGetTrendbarsReq,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) message.fromTimestamp = pbf.readVarint64();
    if (tag === 4) message.toTimestamp = pbf.readVarint64();
    if (tag === 5) message.period = pbf.readVarint();
    if (tag === 6) message.symbolId = pbf.readVarint64();
    if (tag === 7) message.count = pbf.readVarint();
  }

  static write(message: ProtoOAGetTrendbarsReq, pbf: Pbf): void {
    const {
      payloadType,
      ctidTraderAccountId,
      fromTimestamp,
      toTimestamp,
      period,
      symbolId,
      count,
    } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (fromTimestamp !== undefined && fromTimestamp !== null)
      pbf.writeVarintField(3, fromTimestamp);
    if (toTimestamp !== undefined && toTimestamp !== null)
      pbf.writeVarintField(4, toTimestamp);
    if (period !== undefined && period !== null)
      pbf.writeVarintField(5, period);
    if (symbolId !== undefined && symbolId !== null)
      pbf.writeVarintField(6, symbolId);
    if (count !== undefined && count !== null) pbf.writeVarintField(7, count);
  }
}
