import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAAccountAuthRes } from "../interfaces/ProtoOAAccountAuthRes.js";

export class ProtoOAAccountAuthResUtils {
  static default(
    partialMessage?: Partial<ProtoOAAccountAuthRes>,
  ): ProtoOAAccountAuthRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_RES,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAAccountAuthRes {
    return pbf.readFields(
      ProtoOAAccountAuthResUtils._readField,
      ProtoOAAccountAuthResUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAAccountAuthRes,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
  }

  static write(message: ProtoOAAccountAuthRes, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
  }
}
