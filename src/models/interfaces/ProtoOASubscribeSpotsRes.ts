import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOASubscribeSpotsRes extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_RES;
  ctidTraderAccountId: number;
}
