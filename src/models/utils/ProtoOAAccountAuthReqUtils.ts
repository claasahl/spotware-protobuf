import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAAccountAuthReq } from "../interfaces/ProtoOAAccountAuthReq.js";

export class ProtoOAAccountAuthReqUtils {
  static default(
    partialMessage?: Partial<ProtoOAAccountAuthReq>,
  ): ProtoOAAccountAuthReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_ACCOUNT_AUTH_REQ,
      ctidTraderAccountId: 0,
      accessToken: "",
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAAccountAuthReq {
    return pbf.readFields(
      ProtoOAAccountAuthReqUtils._readField,
      ProtoOAAccountAuthReqUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAAccountAuthReq,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) message.accessToken = pbf.readString();
  }

  static write(message: ProtoOAAccountAuthReq, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, accessToken } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (accessToken !== undefined && accessToken !== null)
      pbf.writeStringField(3, accessToken);
  }
}
