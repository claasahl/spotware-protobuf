import type { ProtoPayloadType } from "../enums/ProtoPayloadType.js";
import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";

export interface BaseMessage {
  payloadType?: ProtoPayloadType | ProtoOAPayloadType;
}
