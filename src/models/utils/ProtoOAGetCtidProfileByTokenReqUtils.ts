import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAGetCtidProfileByTokenReq } from "../interfaces/ProtoOAGetCtidProfileByTokenReq.js";

export class ProtoOAGetCtidProfileByTokenReqUtils {
  static default(
    partialMessage?: Partial<ProtoOAGetCtidProfileByTokenReq>,
  ): ProtoOAGetCtidProfileByTokenReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_REQ,
      accessToken: "",
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAGetCtidProfileByTokenReq {
    return pbf.readFields(
      ProtoOAGetCtidProfileByTokenReqUtils._readField,
      ProtoOAGetCtidProfileByTokenReqUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAGetCtidProfileByTokenReq,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.accessToken = pbf.readString();
  }

  static write(message: ProtoOAGetCtidProfileByTokenReq, pbf: Pbf): void {
    const { payloadType, accessToken } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (accessToken !== undefined && accessToken !== null)
      pbf.writeStringField(2, accessToken);
  }
}
