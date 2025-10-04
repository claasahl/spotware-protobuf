import Pbf from "pbf";

import { ProtoOATrendbarUtils } from "./ProtoOATrendbarUtils.js";
import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOATrendbarPeriod } from "../enums/ProtoOATrendbarPeriod.js";
import { ProtoOAGetTrendbarsRes } from "../interfaces/ProtoOAGetTrendbarsRes.js";

export class ProtoOAGetTrendbarsResUtils {
  static default(
    partialMessage?: Partial<ProtoOAGetTrendbarsRes>,
  ): ProtoOAGetTrendbarsRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_GET_TRENDBARS_RES,
      ctidTraderAccountId: 0,
      period: Object.values(ProtoOATrendbarPeriod)[0] as ProtoOATrendbarPeriod,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAGetTrendbarsRes {
    return pbf.readFields(
      ProtoOAGetTrendbarsResUtils._readField,
      ProtoOAGetTrendbarsResUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAGetTrendbarsRes,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) message.period = pbf.readVarint();
    if (tag === 4) message.timestamp = pbf.readVarint64();
    if (tag === 5)
      message.trendbar = [
        ...(message.trendbar ?? []),
        ProtoOATrendbarUtils.read(pbf, pbf.readVarint() + pbf.pos),
      ];
    if (tag === 6) message.symbolId = pbf.readVarint64();
    if (tag === 7) message.hasMore = pbf.readBoolean();
  }

  static write(message: ProtoOAGetTrendbarsRes, pbf: Pbf): void {
    const {
      payloadType,
      ctidTraderAccountId,
      period,
      timestamp,
      trendbar,
      symbolId,
      hasMore,
    } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (period !== undefined && period !== null)
      pbf.writeVarintField(3, period);
    if (timestamp !== undefined && timestamp !== null)
      pbf.writeVarintField(4, timestamp);
    if (trendbar !== undefined && trendbar !== null)
      trendbar.forEach((trendbar) => ProtoOATrendbarUtils.write(trendbar, pbf));
    if (symbolId !== undefined && symbolId !== null)
      pbf.writeVarintField(6, symbolId);
    if (hasMore !== undefined && hasMore !== null)
      pbf.writeBooleanField(7, hasMore);
  }
}
