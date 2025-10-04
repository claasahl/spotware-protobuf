import Pbf from "pbf";

import { ProtoOAExpectedMarginUtils } from "./ProtoOAExpectedMarginUtils.js";
import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAExpectedMarginRes } from "../interfaces/ProtoOAExpectedMarginRes.js";

export class ProtoOAExpectedMarginResUtils {
  static default(
    partialMessage?: Partial<ProtoOAExpectedMarginRes>,
  ): ProtoOAExpectedMarginRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_EXPECTED_MARGIN_RES,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAExpectedMarginRes {
    return pbf.readFields(
      ProtoOAExpectedMarginResUtils._readField,
      ProtoOAExpectedMarginResUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAExpectedMarginRes,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      message.margin = [
        ...(message.margin ?? []),
        ProtoOAExpectedMarginUtils.read(pbf, pbf.readVarint() + pbf.pos),
      ];
    if (tag === 4) message.moneyDigits = pbf.readVarint();
  }

  static write(message: ProtoOAExpectedMarginRes, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, margin, moneyDigits } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (margin !== undefined && margin !== null)
      margin.forEach((margin) => ProtoOAExpectedMarginUtils.write(margin, pbf));
    if (moneyDigits !== undefined && moneyDigits !== null)
      pbf.writeVarintField(4, moneyDigits);
  }
}
