import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAAccountLogoutRes } from "../interfaces/ProtoOAAccountLogoutRes.js";

export class ProtoOAAccountLogoutResUtils {
  static default(
    partialMessage?: Partial<ProtoOAAccountLogoutRes>,
  ): ProtoOAAccountLogoutRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_ACCOUNT_LOGOUT_RES,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAAccountLogoutRes {
    return pbf.readFields(
      ProtoOAAccountLogoutResUtils._readField,
      ProtoOAAccountLogoutResUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAAccountLogoutRes,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
  }

  static write(message: ProtoOAAccountLogoutRes, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
  }
}
