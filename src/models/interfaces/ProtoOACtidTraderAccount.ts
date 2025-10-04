import type { BaseMessage } from "./BaseMessage.ts";

export interface ProtoOACtidTraderAccount extends BaseMessage {
  ctidTraderAccountId: number;
  isLive?: boolean;
  traderLogin?: number;
  lastClosingDealTimestamp?: number;
  lastBalanceUpdateTimestamp?: number;
  brokerTitleShort?: string;
}
