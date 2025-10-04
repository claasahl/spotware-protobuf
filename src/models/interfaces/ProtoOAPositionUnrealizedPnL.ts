import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAPositionUnrealizedPnL extends ProtoMessage {
  positionId: number;
  grossUnrealizedPnL: number;
  netUnrealizedPnL: number;
}
