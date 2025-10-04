import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOATickData extends ProtoMessage {
  timestamp: number;
  tick: number;
}
