import Pbf from "pbf";

import { ProtoOACtidTraderAccountUtils } from "./ProtoOACtidTraderAccountUtils.js";
import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAClientPermissionScope } from "../enums/ProtoOAClientPermissionScope.js";
import { ProtoOAGetAccountListByAccessTokenRes } from "../interfaces/ProtoOAGetAccountListByAccessTokenRes.js";

export class ProtoOAGetAccountListByAccessTokenResUtils {
  static default(
    partialMessage?: Partial<ProtoOAGetAccountListByAccessTokenRes>,
  ): ProtoOAGetAccountListByAccessTokenRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES,
      accessToken: "",
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAGetAccountListByAccessTokenRes {
    return pbf.readFields(
      ProtoOAGetAccountListByAccessTokenResUtils._readField,
      ProtoOAGetAccountListByAccessTokenResUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAGetAccountListByAccessTokenRes,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.accessToken = pbf.readString();
    if (tag === 3) message.permissionScope = pbf.readVarint();
    if (tag === 4)
      message.ctidTraderAccount = [
        ...(message.ctidTraderAccount ?? []),
        ProtoOACtidTraderAccountUtils.read(pbf, pbf.readVarint() + pbf.pos),
      ];
  }

  static write(message: ProtoOAGetAccountListByAccessTokenRes, pbf: Pbf): void {
    const { payloadType, accessToken, permissionScope, ctidTraderAccount } =
      message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (accessToken !== undefined && accessToken !== null)
      pbf.writeStringField(2, accessToken);
    if (permissionScope !== undefined && permissionScope !== null)
      pbf.writeVarintField(3, permissionScope);
    if (ctidTraderAccount !== undefined && ctidTraderAccount !== null)
      ctidTraderAccount.forEach((ctidTraderAccount) =>
        ProtoOACtidTraderAccountUtils.write(ctidTraderAccount, pbf),
      );
  }
}
