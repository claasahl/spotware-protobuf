import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAErrorRes extends BaseMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_ERROR_RES;
  ctidTraderAccountId?: number;
  errorCode: string;
  description?: string;
  maintenanceEndTimestamp?: number;
  retryAfter?: number;
}
