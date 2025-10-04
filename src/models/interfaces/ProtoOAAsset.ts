import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAAsset extends ProtoMessage {
  assetId: number;
  name: string;
  displayName?: string;
  digits?: number;
}
