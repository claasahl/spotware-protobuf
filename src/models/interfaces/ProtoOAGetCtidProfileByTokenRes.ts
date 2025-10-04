import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoOACtidProfile } from "./ProtoOACtidProfile.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAGetCtidProfileByTokenRes extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_GET_CTID_PROFILE_BY_TOKEN_RES;
  profile: ProtoOACtidProfile;
}
