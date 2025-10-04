import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOASymbolCategory extends BaseMessage {
  id: number;
  assetClassId: number;
  name: string;
  sortingNumber?: number;
}
