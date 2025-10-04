import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAAsset extends BaseMessage {
  assetId: number;
  name: string;
  displayName?: string;
  digits?: number;
}
