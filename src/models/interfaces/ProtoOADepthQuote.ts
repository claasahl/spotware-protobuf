import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOADepthQuote extends BaseMessage {
  id: number;
  size: number;
  bid?: number;
  ask?: number;
}
