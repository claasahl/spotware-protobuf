import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOALightSymbol extends ProtoMessage {
  symbolId: number;
  symbolName?: string;
  enabled?: boolean;
  baseAssetId?: number;
  quoteAssetId?: number;
  symbolCategoryId?: number;
  description?: string;
  sortingNumber?: number;
}
