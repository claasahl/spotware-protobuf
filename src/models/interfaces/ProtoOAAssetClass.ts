import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAAssetClass extends BaseMessage {
  id?: number;
  name?: string;
  sortingNumber?: number;
}
