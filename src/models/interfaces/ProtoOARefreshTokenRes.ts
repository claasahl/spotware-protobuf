import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOARefreshTokenRes extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_REFRESH_TOKEN_RES;
  accessToken: string;
  tokenType: string;
  expiresIn: number;
  refreshToken: string;
}
