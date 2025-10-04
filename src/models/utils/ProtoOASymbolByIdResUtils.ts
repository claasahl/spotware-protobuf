import Pbf from "pbf";

import { ProtoOASymbolUtils } from "./ProtoOASymbolUtils.js";
import { ProtoOAArchivedSymbolUtils } from "./ProtoOAArchivedSymbolUtils.js";
import { ProtoOAPayloadType } from "../enums/ProtoOAPayloadType.js";
import { ProtoOASymbolByIdRes } from "../interfaces/ProtoOASymbolByIdRes.js";

export class ProtoOASymbolByIdResUtils {
  static default(
    partialMessage?: Partial<ProtoOASymbolByIdRes>,
  ): ProtoOASymbolByIdRes {
    return {
      payloadType: ProtoOAPayloadType.PROTO_OA_SYMBOL_BY_ID_RES,
      ctidTraderAccountId: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOASymbolByIdRes {
    return pbf.readFields(
      ProtoOASymbolByIdResUtils._readField,
      ProtoOASymbolByIdResUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOASymbolByIdRes,
    pbf: Pbf,
  ) {
    if (tag === 1) message.payloadType = pbf.readVarint();
    if (tag === 2) message.ctidTraderAccountId = pbf.readVarint64();
    if (tag === 3)
      message.symbol = [
        ...(message.symbol ?? []),
        ProtoOASymbolUtils.read(pbf, pbf.readVarint() + pbf.pos),
      ];
    if (tag === 4)
      message.archivedSymbol = [
        ...(message.archivedSymbol ?? []),
        ProtoOAArchivedSymbolUtils.read(pbf, pbf.readVarint() + pbf.pos),
      ];
  }

  static write(message: ProtoOASymbolByIdRes, pbf: Pbf): void {
    const { payloadType, ctidTraderAccountId, symbol, archivedSymbol } =
      message;
    if (payloadType !== undefined && payloadType !== null)
      pbf.writeVarintField(1, payloadType);
    if (ctidTraderAccountId !== undefined && ctidTraderAccountId !== null)
      pbf.writeVarintField(2, ctidTraderAccountId);
    if (symbol !== undefined && symbol !== null)
      symbol.forEach((symbol) => ProtoOASymbolUtils.write(symbol, pbf));
    if (archivedSymbol !== undefined && archivedSymbol !== null)
      archivedSymbol.forEach((archivedSymbol) =>
        ProtoOAArchivedSymbolUtils.write(archivedSymbol, pbf),
      );
  }
}
