import Pbf from "pbf";

import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOASymbolsListReq } from "../interfaces/ProtoOASymbolsListReq.js";

export class ProtoOASymbolsListReqUtils {
  static default(
    partialMessage?: Partial<ProtoOASymbolsListReq>,
  ): ProtoOASymbolsListReq {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_REQ,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOASymbolsListReq {
    return pbf.readFields(
      ProtoOASymbolsListReqUtils._readField,
      ProtoOASymbolsListReqUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOASymbolsListReq,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3) message.includeArchivedSymbols = pbf.readBoolean();
  }

  static write(message: ProtoOASymbolsListReq, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, includeArchivedSymbols } =
      message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (includeArchivedSymbols !== undefined && includeArchivedSymbols !== null)
      pbf.writeBooleanField(3, includeArchivedSymbols);
  }
}
