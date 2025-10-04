import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAUnsubscribeSpotsRes extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_UNSUBSCRIBE_SPOTS_RES;
  ctidTraderAccountId: number;
}
