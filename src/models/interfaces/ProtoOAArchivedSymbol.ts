import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOAArchivedSymbol extends ProtoMessage {
  symbolId: number;
  name: string;
  utcLastUpdateTimestamp: number;
  description?: string;
}
