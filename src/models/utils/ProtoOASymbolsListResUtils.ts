import Pbf from "pbf";

import { ProtoOALightSymbolUtils } from "./ProtoOALightSymbolUtils.js";
import { ProtoOAArchivedSymbolUtils } from "./ProtoOAArchivedSymbolUtils.js";
import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOASymbolsListRes } from "../interfaces/ProtoOASymbolsListRes.js";

export class ProtoOASymbolsListResUtils {
  static default(
    partialMessage?: Partial<ProtoOASymbolsListRes>,
  ): ProtoOASymbolsListRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOLS_LIST_RES,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOASymbolsListRes {
    return pbf.readFields(
      ProtoOASymbolsListResUtils._readField,
      ProtoOASymbolsListResUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOASymbolsListRes,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      message.symbol = [
        ...(message.symbol ?? []),
        ProtoOALightSymbolUtils.read(pbf, pbf.readVarint() + pbf.pos),
      ];
    if (tag === 4)
      message.archivedSymbol = [
        ...(message.archivedSymbol ?? []),
        ProtoOAArchivedSymbolUtils.read(pbf, pbf.readVarint() + pbf.pos),
      ];
  }

  static write(message: ProtoOASymbolsListRes, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, symbol, archivedSymbol } =
      message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (symbol !== undefined && symbol !== null)
      symbol.forEach((symbol) => ProtoOALightSymbolUtils.write(symbol, pbf));
    if (archivedSymbol !== undefined && archivedSymbol !== null)
      archivedSymbol.forEach((archivedSymbol) =>
        ProtoOAArchivedSymbolUtils.write(archivedSymbol, pbf),
      );
  }
}
