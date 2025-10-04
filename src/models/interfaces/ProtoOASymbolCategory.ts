import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOASymbolCategory extends ProtoMessage {
  id: number;
  assetClassId: number;
  name: string;
  sortingNumber?: number;
}
