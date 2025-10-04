import Pbf from "pbf";

import { ProtoOADealOffsetUtils } from "./ProtoOADealOffsetUtils.js";
import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOADealOffsetListRes } from "../interfaces/ProtoOADealOffsetListRes.js";

export class ProtoOADealOffsetListResUtils {
  static default(
    partialMessage?: Partial<ProtoOADealOffsetListRes>,
  ): ProtoOADealOffsetListRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_DEAL_OFFSET_LIST_RES,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOADealOffsetListRes {
    return pbf.readFields(
      ProtoOADealOffsetListResUtils._readField,
      ProtoOADealOffsetListResUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOADealOffsetListRes,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      message.offsetBy = [
        ...(message.offsetBy ?? []),
        ProtoOADealOffsetUtils.read(pbf, pbf.readVarint() + pbf.pos),
      ];
    if (tag === 4)
      message.offsetting = [
        ...(message.offsetting ?? []),
        ProtoOADealOffsetUtils.read(pbf, pbf.readVarint() + pbf.pos),
      ];
  }

  static write(message: ProtoOADealOffsetListRes, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, offsetBy, offsetting } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (offsetBy !== undefined && offsetBy !== null)
      offsetBy.forEach((offsetBy) =>
        ProtoOADealOffsetUtils.write(offsetBy, pbf),
      );
    if (offsetting !== undefined && offsetting !== null)
      offsetting.forEach((offsetting) =>
        ProtoOADealOffsetUtils.write(offsetting, pbf),
      );
  }
}
