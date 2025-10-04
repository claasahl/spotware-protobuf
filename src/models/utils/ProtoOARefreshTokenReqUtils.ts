import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOARefreshTokenReq } from "../interfaces/ProtoOARefreshTokenReq.js";

export class ProtoOARefreshTokenReqUtils {
  static default(
    partialMessage?: Partial<ProtoOARefreshTokenReq>,
  ): ProtoOARefreshTokenReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_REFRESH_TOKEN_REQ,
      refreshToken: "",
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOARefreshTokenReq {
    return pbf.readFields(
      ProtoOARefreshTokenReqUtils._readField,
      ProtoOARefreshTokenReqUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOARefreshTokenReq,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.refreshToken = pbf.readString();
  }

  static write(message: ProtoOARefreshTokenReq, pbf: Pbf): void {
    const { payloadType, refreshToken } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (refreshToken !== undefined && refreshToken !== null)
      pbf.writeStringField(2, refreshToken);
  }
}
