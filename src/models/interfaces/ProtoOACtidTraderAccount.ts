import type { ProtoMessage } from "./ProtoMessage.ts";

export interface ProtoOACtidTraderAccount extends ProtoMessage {
  ctidTraderAccountId: number;
  isLive?: boolean;
  traderLogin?: number;
  lastClosingDealTimestamp?: number;
  lastBalanceUpdateTimestamp?: number;
  brokerTitleShort?: string;
}
