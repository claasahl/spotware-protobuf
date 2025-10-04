import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOAAccountsTokenInvalidatedEvent } from "../interfaces/ProtoOAAccountsTokenInvalidatedEvent.js";

export class ProtoOAAccountsTokenInvalidatedEventUtils {
  static default(
    partialMessage?: Partial<ProtoOAAccountsTokenInvalidatedEvent>,
  ): ProtoOAAccountsTokenInvalidatedEvent {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_ACCOUNTS_TOKEN_INVALIDATED_EVENT,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAAccountsTokenInvalidatedEvent {
    return pbf.readFields(
      ProtoOAAccountsTokenInvalidatedEventUtils._readField,
      ProtoOAAccountsTokenInvalidatedEventUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAAccountsTokenInvalidatedEvent,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2)
      message.ctidTraderAccountIds = [
        ...(message.ctidTraderAccountIds ?? []),
        pbf.readVarint64(),
      ];
    if (tag === 3) message.reason = pbf.readString();
  }

  static write(message: ProtoOAAccountsTokenInvalidatedEvent, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountIds, reason } = message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountIds !== undefined && ctidTraderAccountIds !== null)
      ctidTraderAccountIds.forEach((ctidTraderAccountIds) =>
        pbf.writeVarintField(2, ctidTraderAccountIds),
      );
    if (reason !== undefined && reason !== null)
      pbf.writeStringField(3, reason);
  }
}
