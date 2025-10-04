import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOARefreshTokenRes extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_REFRESH_TOKEN_RES;
  accessToken: string;
  tokenType: string;
  expiresIn: number;
  refreshToken: string;
}
