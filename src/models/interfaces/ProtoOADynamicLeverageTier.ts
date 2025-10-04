import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOADynamicLeverageTier extends BaseMessage {
  volume: number;
  leverage: number;
}
