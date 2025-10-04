import type { ProtoOATradeSide } from "../enums/ProtoOATradeSide.ts";

export interface ProtoOATradeData {
  symbolId: number;
  volume: number;
  tradeSide: ProtoOATradeSide;
  openTimestamp?: number;
  label?: string;
  guaranteedStopLoss?: boolean;
  comment?: string;
  measurementUnits?: string;
  closeTimestamp?: number;
}
