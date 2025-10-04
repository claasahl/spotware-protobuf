import type { ProtoOATrendbarPeriod } from "../enums/ProtoOATrendbarPeriod.ts";

export interface ProtoOATrendbar {
  volume: number;
  period?: ProtoOATrendbarPeriod;
  low?: number;
  deltaOpen?: number;
  deltaClose?: number;
  deltaHigh?: number;
  utcTimestampInMinutes?: number;
}
