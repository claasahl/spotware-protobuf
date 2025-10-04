import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAAssetClass extends ProtoMessage {
  id?: number;
  name?: string;
  sortingNumber?: number;
}
