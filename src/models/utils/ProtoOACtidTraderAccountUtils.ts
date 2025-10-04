import Pbf from "pbf";

import { ProtoOACtidTraderAccount } from "../interfaces/ProtoOACtidTraderAccount.js";

export class ProtoOACtidTraderAccountUtils {
  static default(
    partialMessage?: Partial<ProtoOACtidTraderAccount>,
  ): ProtoOACtidTraderAccount {
    return {
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOACtidTraderAccount {
    return pbf.readFields(
      ProtoOACtidTraderAccountUtils._readField,
      ProtoOACtidTraderAccountUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOACtidTraderAccount,
    pbf: Pbf,
  ) {
    if (tag === 1) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 2) message.isLive = pbf.readBoolean();
    if (tag === 3) message.traderLogin = pbf.readVarint64();
    if (tag === 4) message.lastClosingDealTimestamp = pbf.readVarint64();
    if (tag === 5) message.lastBalanceUpdateTimestamp = pbf.readVarint64();
    if (tag === 6) message.brokerTitleShort = pbf.readString();
  }

  static write(message: ProtoOACtidTraderAccount, pbf: Pbf): void {
    const {
      ctidTraderAccountId,
      isLive,
      traderLogin,
      lastClosingDealTimestamp,
      lastBalanceUpdateTimestamp,
      brokerTitleShort,
    } = message;
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(1, ctidTraderAccountId);
    if (isLive !== undefined && isLive !== null)
      pbf.writeBooleanField(2, isLive);
    if (traderLogin !== undefined && traderLogin !== null)
      pbf.writeVarintField(3, traderLogin);
    if (
      lastClosingDealTimestamp !== undefined &&
      lastClosingDealTimestamp !== null
    )
      pbf.writeVarintField(4, lastClosingDealTimestamp);
    if (
      lastBalanceUpdateTimestamp !== undefined &&
      lastBalanceUpdateTimestamp !== null
    )
      pbf.writeVarintField(5, lastBalanceUpdateTimestamp);
    if (brokerTitleShort !== undefined && brokerTitleShort !== null)
      pbf.writeStringField(6, brokerTitleShort);
  }
}
