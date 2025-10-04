import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAAccountLogoutReq } from "../interfaces/ProtoOAAccountLogoutReq.js";

export class ProtoOAAccountLogoutReqUtils {
  static default(
    partialMessage?: Partial<ProtoOAAccountLogoutReq>,
  ): ProtoOAAccountLogoutReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_REQ,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAAccountLogoutReq {
    return pbf.readFields(
      ProtoOAAccountLogoutReqUtils._readField,
      ProtoOAAccountLogoutReqUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAAccountLogoutReq,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
  }

  static write(message: ProtoOAAccountLogoutReq, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
  }
}
