import type { ProtoPayloadType } from "../enums/ProtoPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoErrorRes extends ProtoMessage {
  payloadType: ProtoPayloadType.ERROR_RES;
  errorCode: string;
  description?: string;
  maintenanceEndTimestamp?: number;
}
