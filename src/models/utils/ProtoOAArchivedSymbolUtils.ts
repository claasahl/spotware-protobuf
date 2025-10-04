import Pbf from "pbf";

import { ProtoOAArchivedSymbol } from "../interfaces/ProtoOAArchivedSymbol.js";

export class ProtoOAArchivedSymbolUtils {
  static default(
    partialMessage?: Partial<ProtoOAArchivedSymbol>,
  ): ProtoOAArchivedSymbol {
    return {
      symbolId: 0,
      name: "",
      utcLastUpdateTimestamp: 0,
      ...partialMessage,
    };
  }

  static read(pbf: Pbf, end?: number): ProtoOAArchivedSymbol {
    return pbf.readFields(
      ProtoOAArchivedSymbolUtils._readField,
      ProtoOAArchivedSymbolUtils.default(),
      end,
    );
  }

  private static _readField(
    tag: number,
    message: ProtoOAArchivedSymbol,
    pbf: Pbf,
  ) {
    if (tag === 1) message.symbolId = pbf.readVarint64();
    if (tag === 2) message.name = pbf.readString();
    if (tag === 3) message.utcLastUpdateTimestamp = pbf.readVarint64();
    if (tag === 4) message.description = pbf.readString();
  }

  static write(message: ProtoOAArchivedSymbol, pbf: Pbf): void {
    const { symbolId, name, utcLastUpdateTimestamp, description } = message;
    if (symbolId !== undefined && symbolId !== null)
      pbf.writeVarintField(1, symbolId);
    if (name !== undefined && name !== null) pbf.writeStringField(2, name);
    if (utcLastUpdateTimestamp !== undefined && utcLastUpdateTimestamp !== null)
      pbf.writeVarintField(3, utcLastUpdateTimestamp);
    if (description !== undefined && description !== null)
      pbf.writeStringField(4, description);
  }
}
