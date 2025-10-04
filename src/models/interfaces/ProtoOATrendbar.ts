import type { ProtoOATrendbarPeriod } from "../enums/ProtoOATrendbarPeriod.ts";
import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOATrendbar extends ProtoMessage {
  volume: number;
  period?: ProtoOATrendbarPeriod;
  low?: number;
  deltaOpen?: number;
  deltaClose?: number;
  deltaHigh?: number;
  utcTimestampInMinutes?: number;
}
