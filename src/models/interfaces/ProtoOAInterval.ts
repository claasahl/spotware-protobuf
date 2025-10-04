import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAInterval extends BaseMessage {
  startSecond: number;
  endSecond: number;
}
