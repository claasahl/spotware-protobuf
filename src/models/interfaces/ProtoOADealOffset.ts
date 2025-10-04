import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOADealOffset extends ProtoMessage {
  dealId: number;
  volume: number;
  executionTimestamp?: number;
  executionPrice?: number;
}
