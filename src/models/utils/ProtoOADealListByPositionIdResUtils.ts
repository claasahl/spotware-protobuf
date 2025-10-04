import Pbf from "pbf";

import { ProtoOADealUtils } from "./ProtoOADealUtils.js";
import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOADealListByPositionIdRes } from "../interfaces/ProtoOADealListByPositionIdRes.js";

export class ProtoOADealListByPositionIdResUtils {
  static default(
    partialMessage?: Partial<ProtoOADealListByPositionIdRes>,
  ): ProtoOADealListByPositionIdRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_DEAL_LIST_BY_POSITION_ID_RES,
      ctidTraderAccountId: 0,
      hasMore: false,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOADealListByPositionIdRes {
    return pbf.readFields(
      ProtoOADealListByPositionIdResUtils._readField,
      ProtoOADealListByPositionIdResUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOADealListByPositionIdRes,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      message.deal = [
        ...(message.deal ?? []),
        ProtoOADealUtils.read(pbf, pbf.readVarint() + pbf.pos),
      ];
    if (tag === 4) message.hasMore = pbf.readBoolean();
  }

  static write(message: ProtoOADealListByPositionIdRes, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, deal, hasMore } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (deal !== undefined && deal !== null)
      deal.forEach((deal) => ProtoOADealUtils.write(deal, pbf));
    if (hasMore !== undefined && hasMore !== null)
      pbf.writeBooleanField(4, hasMore);
  }
}
