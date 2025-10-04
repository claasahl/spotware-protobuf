export interface ProtoMessage {
  payloadType: number;
  payload?: Uint8Array;
  clientMsgId?: string;
}
