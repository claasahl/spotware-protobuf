import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoMessage extends BaseMessage {
  payloadType: number;
  payload?: Uint8Array;
  clientMsgId?: string;
}
