import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOASubscribeSpotsRes extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_SUBSCRIBE_SPOTS_RES;
  ctidTraderAccountId: number;
}
