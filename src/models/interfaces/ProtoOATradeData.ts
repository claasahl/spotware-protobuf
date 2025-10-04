import type { ProtoOATradeSide } from "../enums/ProtoOATradeSide.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOATradeData extends BaseMessage {
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
