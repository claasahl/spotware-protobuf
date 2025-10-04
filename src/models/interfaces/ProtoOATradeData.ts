import type { ProtoOATradeSide } from "../enums/ProtoOATradeSide.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOATradeData extends ProtoMessage {
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
