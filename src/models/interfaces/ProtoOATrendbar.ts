import type { ProtoOATrendbarPeriod } from "../enums/ProtoOATrendbarPeriod.ts";
import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOATrendbar extends BaseMessage {
  volume: number;
  period?: ProtoOATrendbarPeriod;
  low?: number;
  deltaOpen?: number;
  deltaClose?: number;
  deltaHigh?: number;
  utcTimestampInMinutes?: number;
}
