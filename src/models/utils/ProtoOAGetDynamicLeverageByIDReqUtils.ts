import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAGetDynamicLeverageByIDReq } from "../interfaces/ProtoOAGetDynamicLeverageByIDReq.js";

export class ProtoOAGetDynamicLeverageByIDReqUtils {
  static default(
    partialMessage?: Partial<ProtoOAGetDynamicLeverageByIDReq>,
  ): ProtoOAGetDynamicLeverageByIDReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_GET_DYNAMIC_LEVERAGE_REQ,
      ctidTraderAccountId: 0,
      leverageId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAGetDynamicLeverageByIDReq {
    return pbf.readFields(
      ProtoOAGetDynamicLeverageByIDReqUtils._readField,
      ProtoOAGetDynamicLeverageByIDReqUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAGetDynamicLeverageByIDReq,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) message.leverageId = pbf.readVarint64();
  }

  static write(message: ProtoOAGetDynamicLeverageByIDReq, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, leverageId } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (leverageId !== undefined && leverageId !== null)
      pbf.writeVarintField(3, leverageId);
  }
}
