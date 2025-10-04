import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOAArchivedSymbol extends BaseMessage {
  symbolId: number;
  name: string;
  utcLastUpdateTimestamp: number;
  description?: string;
}
