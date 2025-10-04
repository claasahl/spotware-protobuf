import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOADynamicLeverageTier extends ProtoMessage {
  volume: number;
  leverage: number;
}
