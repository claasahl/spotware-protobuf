import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOATickData extends BaseMessage {
  timestamp: number;
  tick: number;
}
