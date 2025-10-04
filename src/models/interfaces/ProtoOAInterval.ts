import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAInterval extends ProtoMessage {
  startSecond: number;
  endSecond: number;
}
