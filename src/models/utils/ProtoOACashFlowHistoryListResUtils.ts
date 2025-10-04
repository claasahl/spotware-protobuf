import Pbf from "pbf";

import { ProtoOADepositWithdrawUtils } from "./ProtoOADepositWithdrawUtils.js";
import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOACashFlowHistoryListRes } from "../interfaces/ProtoOACashFlowHistoryListRes.js";

export class ProtoOACashFlowHistoryListResUtils {
  static default(
    partialMessage?: Partial<ProtoOACashFlowHistoryListRes>,
  ): ProtoOACashFlowHistoryListRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_CASH_FLOW_HISTORY_LIST_RES,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOACashFlowHistoryListRes {
    return pbf.readFields(
      ProtoOACashFlowHistoryListResUtils._readField,
      ProtoOACashFlowHistoryListResUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOACashFlowHistoryListRes,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      message.depositWithdraw = [
        ...(message.depositWithdraw ?? []),
        ProtoOADepositWithdrawUtils.read(pbf, pbf.readVarint() + pbf.pos),
      ];
  }

  static write(message: ProtoOACashFlowHistoryListRes, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, depositWithdraw } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (depositWithdraw !== undefined && depositWithdraw !== null)
      depositWithdraw.forEach((depositWithdraw) =>
        ProtoOADepositWithdrawUtils.write(depositWithdraw, pbf),
      );
  }
}
