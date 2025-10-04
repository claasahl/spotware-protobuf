import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAErrorRes extends ProtoMessage {
  payloadType: ProtoOAPayloadType.PROTO_OA_ERROR_RES;
  ctidTraderAccountId?: number;
  errorCode: string;
  description?: string;
  maintenanceEndTimestamp?: number;
  retryAfter?: number;
}
