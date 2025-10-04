import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAExpectedMargin extends ProtoMessage {
  volume: number;
  buyMargin: number;
  sellMargin: number;
}
