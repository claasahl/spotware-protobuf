import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOACashFlowHistoryListReq } from "../interfaces/ProtoOACashFlowHistoryListReq.js";

export class ProtoOACashFlowHistoryListReqUtils {
  static default(
    partialMessage?: Partial<ProtoOACashFlowHistoryListReq>,
  ): ProtoOACashFlowHistoryListReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_REQ,
      ctidTraderAccountId: 0,
      fromTimestamp: 0,
      toTimestamp: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOACashFlowHistoryListReq {
    return pbf.readFields(
      ProtoOACashFlowHistoryListReqUtils._readField,
      ProtoOACashFlowHistoryListReqUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOACashFlowHistoryListReq,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) message.fromTimestamp = pbf.readVarint64();
    if (tag === 4) message.toTimestamp = pbf.readVarint64();
  }

  static write(message: ProtoOACashFlowHistoryListReq, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, fromTimestamp, toTimestamp } =
      message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (fromTimestamp !== undefined && fromTimestamp !== null)
      pbf.writeVarintField(3, fromTimestamp);
    if (toTimestamp !== undefined && toTimestamp !== null)
      pbf.writeVarintField(4, toTimestamp);
  }
}
