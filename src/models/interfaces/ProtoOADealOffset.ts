import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOADealOffset extends BaseMessage {
  dealId: number;
  volume: number;
  executionTimestamp?: number;
  executionPrice?: number;
}
