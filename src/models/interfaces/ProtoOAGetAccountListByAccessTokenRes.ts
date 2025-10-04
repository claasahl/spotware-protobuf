import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOAClientPermissionScope } from "../enums/ProtoOAClientPermissionScope.ts";
import type { ProtoOACtidTraderAccount } from "./ProtoOACtidTraderAccount.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAGetAccountListByAccessTokenRes extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_GET_ACCOUNTS_BY_ACCESS_TOKEN_RES;
  accessToken: string;
  permissionScope?: ProtoOAClientPermissionScope;
  ctidTraderAccount?: ReadonlyArray<ProtoOACtidTraderAccount>;
}
