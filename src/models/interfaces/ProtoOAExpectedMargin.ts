import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAExpectedMargin extends BaseMessage {
  volume: number;
  buyMargin: number;
  sellMargin: number;
}
