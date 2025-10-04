import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAPositionUnrealizedPnL extends BaseMessage {
  positionId: number;
  grossUnrealizedPnL: number;
  netUnrealizedPnL: number;
}
