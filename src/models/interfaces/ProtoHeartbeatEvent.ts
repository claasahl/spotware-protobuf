import type { ProtoPayloadType } from "../enums/ProtoPayloadType.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoHeartbeatEvent extends BaseMessage {
  payloadType: ProtoPayloadType.HEARTBEAT_EVENT;
}
