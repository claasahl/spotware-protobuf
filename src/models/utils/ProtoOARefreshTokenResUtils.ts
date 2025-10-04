import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOARefreshTokenRes } from "../interfaces/ProtoOARefreshTokenRes.js";

export class ProtoOARefreshTokenResUtils {
  static default(
    partialMessage?: Partial<ProtoOARefreshTokenRes>,
  ): ProtoOARefreshTokenRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_REFRESH_TOKEN_RES,
      accessToken: "",
      tokenType: "",
      expiresIn: 0,
      refreshToken: "",
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOARefreshTokenRes {
    return pbf.readFields(
      ProtoOARefreshTokenResUtils._readField,
      ProtoOARefreshTokenResUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOARefreshTokenRes,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.accessToken = pbf.readString();
    if (tag === 3) message.tokenType = pbf.readString();
    if (tag === 4) message.expiresIn = pbf.readVarint64();
    if (tag === 5) message.refreshToken = pbf.readString();
  }

  static write(message: ProtoOARefreshTokenRes, pbf: Pbf): void {
    const { payloadType, accessToken, tokenType, expiresIn, refreshToken } =
      message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (accessToken !== undefined && accessToken !== null)
      pbf.writeStringField(2, accessToken);
    if (tokenType !== undefined && tokenType !== null)
      pbf.writeStringField(3, tokenType);
    if (expiresIn !== undefined && expiresIn !== null)
      pbf.writeVarintField(4, expiresIn);
    if (refreshToken !== undefined && refreshToken !== null)
      pbf.writeStringField(5, refreshToken);
  }
}
