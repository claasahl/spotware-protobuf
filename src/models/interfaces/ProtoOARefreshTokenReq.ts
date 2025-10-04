import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOARefreshTokenReq extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_REFRESH_TOKEN_REQ;
  refreshToken: string;
}
