import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAv1PnLChangeUnSubscribeRes } from "../interfaces/ProtoOAv1PnLChangeUnSubscribeRes.js";

export class ProtoOAv1PnLChangeUnSubscribeResUtils {
  static default(
    partialMessage?: Partial<ProtoOAv1PnLChangeUnSubscribeRes>,
  ): ProtoOAv1PnLChangeUnSubscribeRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_V1_PNL_CHANGE_UN_SUBSCRIBE_RES,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAv1PnLChangeUnSubscribeRes {
    return pbf.readFields(
      ProtoOAv1PnLChangeUnSubscribeResUtils._readField,
      ProtoOAv1PnLChangeUnSubscribeResUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAv1PnLChangeUnSubscribeRes,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
  }

  static write(message: ProtoOAv1PnLChangeUnSubscribeRes, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
  }
}
