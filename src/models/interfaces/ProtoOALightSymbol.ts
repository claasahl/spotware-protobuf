import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOALightSymbol extends BaseMessage {
  symbolId: number;
  symbolName?: string;
  enabled?: boolean;
  baseAssetId?: number;
  quoteAssetId?: number;
  symbolCategoryId?: number;
  description?: string;
  sortingNumber?: number;
}
