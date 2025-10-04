import Pbf from "pbf";

import { ProtoOACtidProfileUtils } from "./ProtoOACtidProfileUtils.js";
import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAGetCtidProfileByTokenRes } from "../interfaces/ProtoOAGetCtidProfileByTokenRes.js";

export class ProtoOAGetCtidProfileByTokenResUtils {
  static default(
    partialMessage?: Partial<ProtoOAGetCtidProfileByTokenRes>,
  ): ProtoOAGetCtidProfileByTokenRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES,
      profile: ProtoOACtidProfileUtils.default(),
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAGetCtidProfileByTokenRes {
    return pbf.readFields(
      ProtoOAGetCtidProfileByTokenResUtils._readField,
      ProtoOAGetCtidProfileByTokenResUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAGetCtidProfileByTokenRes,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2)
      message.profile = ProtoOACtidProfileUtils.read(
        pbf,
        pbf.readVarint() + pbf.pos,
      );
  }

  static write(message: ProtoOAGetCtidProfileByTokenRes, pbf: Pbf): void {
    const { payloadType, profile } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (profile !== undefined && profile !== null)
      ProtoOACtidProfileUtils.write(profile, pbf);
  }
}
