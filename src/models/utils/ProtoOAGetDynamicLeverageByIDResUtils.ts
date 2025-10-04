import Pbf from "pbf";

import { ProtoOADynamicLeverageUtils } from "./ProtoOADynamicLeverageUtils.js";
import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAGetDynamicLeverageByIDRes } from "../interfaces/ProtoOAGetDynamicLeverageByIDRes.js";

export class ProtoOAGetDynamicLeverageByIDResUtils {
  static default(
    partialMessage?: Partial<ProtoOAGetDynamicLeverageByIDRes>,
  ): ProtoOAGetDynamicLeverageByIDRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_GET_DYNAMIC_LEVERAGE_RES,
      ctidTraderAccountId: 0,
      leverage: ProtoOADynamicLeverageUtils.default(),
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAGetDynamicLeverageByIDRes {
    return pbf.readFields(
      ProtoOAGetDynamicLeverageByIDResUtils._readField,
      ProtoOAGetDynamicLeverageByIDResUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAGetDynamicLeverageByIDRes,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      message.leverage = ProtoOADynamicLeverageUtils.read(
        pbf,
        pbf.readVarint() + pbf.pos,
      );
  }

  static write(message: ProtoOAGetDynamicLeverageByIDRes, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, leverage } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (leverage !== undefined && leverage !== null)
      ProtoOADynamicLeverageUtils.write(leverage, pbf);
  }
}
