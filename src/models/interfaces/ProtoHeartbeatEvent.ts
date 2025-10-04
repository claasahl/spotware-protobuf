import type { ProtoPayloadType } from "../enums/ProtoPayloadType.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoHeartbeatEvent extends ProtoMessage {
  payloadType: ProtoPayloadType.HEARTBEAT_EVENT;
}
