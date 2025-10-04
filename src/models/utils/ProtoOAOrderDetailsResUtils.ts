import Pbf from "pbf";

import { ProtoOAOrderUtils } from "./ProtoOAOrderUtils.js";
import { ProtoOADealUtils } from "./ProtoOADealUtils.js";
import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAOrderDetailsRes } from "../interfaces/ProtoOAOrderDetailsRes.js";

export class ProtoOAOrderDetailsResUtils {
  static default(
    partialMessage?: Partial<ProtoOAOrderDetailsRes>,
  ): ProtoOAOrderDetailsRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_ORDER_DETAILS_RES,
      ctidTraderAccountId: 0,
      order: ProtoOAOrderUtils.default(),
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAOrderDetailsRes {
    return pbf.readFields(
      ProtoOAOrderDetailsResUtils._readField,
      ProtoOAOrderDetailsResUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAOrderDetailsRes,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      message.order = ProtoOAOrderUtils.read(pbf, pbf.readVarint() + pbf.pos);
    if (tag === 4)
      message.deal = [
        ...(message.deal ?? []),
        ProtoOADealUtils.read(pbf, pbf.readVarint() + pbf.pos),
      ];
  }

  static write(message: ProtoOAOrderDetailsRes, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, order, deal } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (order !== undefined && order !== null)
      ProtoOAOrderUtils.write(order, pbf);
    if (deal !== undefined && deal !== null)
      deal.forEach((deal) => ProtoOADealUtils.write(deal, pbf));
  }
}
