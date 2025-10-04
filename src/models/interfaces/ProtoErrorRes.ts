import type { ProtoPayloadType } from "../enums/ProtoPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoErrorRes extends BaseMessage {
  payloadType: ProtoPayloadType.ERROR_RES;
  errorCode: string;
  description?: string;
  maintenanceEndTimestamp?: number;
}
