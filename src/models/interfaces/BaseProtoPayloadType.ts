import type { ProtoPayloadType } from "../enums/ProtoPayloadType.ts";
import type { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.ts";

export interface BaseProtoPayloadType {
  payloadType?: ProtoPayloadType | ProtoOAPayloadType;
}
