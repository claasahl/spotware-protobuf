import Pbf from "pbf";

import { ProtoOATraderUtils } from "./ProtoOATraderUtils.js";
import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOATraderRes } from "../interfaces/ProtoOATraderRes.js";

export class ProtoOATraderResUtils {
  static default(partialMessage?: Partial<ProtoOATraderRes>): ProtoOATraderRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_TRADER_RES,
      ctidTraderAccountId: 0,
      trader: ProtoOATraderUtils.default(),
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOATraderRes {
    return pbf.readFields(
      ProtoOATraderResUtils._readField,
      ProtoOATraderResUtils.default(),
      end,
    );
  }

  private static _readField(tag: number, message: ProtoOATraderRes, pbf: Pbf) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      message.trader = ProtoOATraderUtils.read(pbf, pbf.readVarint() + pbf.pos);
  }

  static write(message: ProtoOATraderRes, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, trader } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (trader !== undefined && trader !== null)
      ProtoOATraderUtils.write(trader, pbf);
  }
}
