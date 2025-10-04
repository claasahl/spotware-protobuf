import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAv1PnLChangeSubscribeRes } from "../interfaces/ProtoOAv1PnLChangeSubscribeRes.js";

export class ProtoOAv1PnLChangeSubscribeResUtils {
  static default(
    partialMessage?: Partial<ProtoOAv1PnLChangeSubscribeRes>,
  ): ProtoOAv1PnLChangeSubscribeRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_V1_PNL_CHANGE_SUBSCRIBE_RES,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAv1PnLChangeSubscribeRes {
    return pbf.readFields(
      ProtoOAv1PnLChangeSubscribeResUtils._readField,
      ProtoOAv1PnLChangeSubscribeResUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAv1PnLChangeSubscribeRes,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
  }

  static write(message: ProtoOAv1PnLChangeSubscribeRes, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
  }
}
