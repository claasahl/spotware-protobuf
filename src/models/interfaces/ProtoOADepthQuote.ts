import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOADepthQuote extends ProtoMessage {
  id: number;
  size: number;
  bid?: number;
  ask?: number;
}
