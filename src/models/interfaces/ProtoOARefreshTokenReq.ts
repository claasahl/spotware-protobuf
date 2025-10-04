import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOARefreshTokenReq extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_REFRESH_TOKEN_REQ;
  refreshToken: string;
}
