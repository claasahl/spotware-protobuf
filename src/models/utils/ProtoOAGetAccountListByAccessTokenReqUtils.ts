import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAGetAccountListByAccessTokenReq } from "../interfaces/ProtoOAGetAccountListByAccessTokenReq.js";

export class ProtoOAGetAccountListByAccessTokenReqUtils {
  static default(
    partialMessage?: Partial<ProtoOAGetAccountListByAccessTokenReq>,
  ): ProtoOAGetAccountListByAccessTokenReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_REQ,
      accessToken: "",
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAGetAccountListByAccessTokenReq {
    return pbf.readFields(
      ProtoOAGetAccountListByAccessTokenReqUtils._readField,
      ProtoOAGetAccountListByAccessTokenReqUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAGetAccountListByAccessTokenReq,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.accessToken = pbf.readString();
  }

  static write(message: ProtoOAGetAccountListByAccessTokenReq, pbf: Pbf): void {
    const { payloadType, accessToken } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (accessToken !== undefined && accessToken !== null)
      pbf.writeStringField(2, accessToken);
  }
}
